/**
 * XReader.JS
 * @author Angelo Scicolone <angelo.scicolone@pubcoder.com>
 * @copyright Copyright 2024 PubCoder srl. All rights reserved.
 */

var app = {
	xreaderCalls : {
		Inited : function(params) {
			if (document.location.protocol == "file:") return;

			// setting xreader environment variables
			xreader.Environment.AppName = "XReader.js";
			xreader.Environment.AppVersion = "2.2";
			xreader.Environment.Platform = xreader.Platform.Web;
			// xreader.Version.Idiom = ?;

			console.log(`%c
 _    _  ______                     _                     _       
\\ \\  / /(_____ \\                   | |                   (_)      
 \\ \\/ /  _____) )  ____   ____   _ | |  ____   ____       _   ___ 
  )  (  (_____ (  / _  ) / _  | / || | / _  ) / ___)     | | /___)
 / /\\ \\       | |( (/ / ( ( | |( (_| |( (/ / | |     _   | ||___ |
/_/  \\_\\      |_| \\____) \\_||_| \\____| \\____)|_|    (_) _| |(___/ 
                                                       (__/       
XReader.js Version ${xreader.Environment.AppVersion}`, "font-family: monospace; color: #fc546f;");

			// setting up XReaderJS basic settings
			app.readerViewWidth = params[0];
			app.readerViewHeight = params[1];
			app.identifier = xreader.Document.Settings.appIdentifier;

			// init renditions
			var renditions = isMobile() ? xreader.Document.Renditions.Mobile : xreader.Document.Renditions.Desktop;
			app.renditions = renditions;

			// init UI
			$("body").css("background-color", xreader.Document.Settings.backgroundColor);

			$("#playScreen").click(function (e) { e.preventDefault();
				// try to authorize audioContext playback (if available) from user click
				try {
					var source = app.audioContext.createBufferSource();
					source.connect(app.audioContext.destination);
				} catch (err) {}
				// try to authorize audio elements playback from user click
				try {
					app.soundtrackAudioPlayer.play().catch(function(err){});
				} catch (err) {
				} finally {
					app.soundtrackAudioPlayer.pause();
				}
				try {
					app.readaloudAudioPlayer.play().catch(function(err){});
				} catch (err) {
				} finally {
					app.readaloudAudioPlayer.pause();
				}
				app.autoplay = true; 
				app.updateReader(true);
			});

			$("#nextPageBtn").click(function (e) { e.preventDefault(); !xreader.isTurningPages && app.goToNextSpread(); });
			$("#previousPageBtn").click(function (e) { e.preventDefault(); !xreader.isTurningPages && app.goToPreviousSpread(); });
			
			$(".modal").on("click mousedown mouseup touchstart touchmove touchend", function (e) { e.stopPropagation(); });

			$("#readaloudToggleBtn").on(app.events.readaloudPlaybackStatusChanged, function() { $(this).html(!app.readaloudIsPlaying ? "Start Read Aloud" : "Stop Read Aloud"); }); // localize
			$("#readaloudTurnPagesCheckbox").on(app.events.readaloudPlaybackStatusChanged, function() { if (this.checked != app.readaloudTurnsPagesAutomatically) this.checked = app.readaloudTurnsPagesAutomatically; });
			$("#soundtrackToggleBtn").on(app.events.soundtrackPlaybackStatusChanged, function() { $(this).html(!app.soundtrackIsPlaying ? "Start Soundtrack" : "Stop Soundtrack"); }); // localize
			$("#searchControlsModal").on("show.bs.modal", app.initSearch);
			$("#searchControlsModal").on("shown.bs.modal", () => { $("#searchField").focus(); });
			$("#xreaderBottomMenuView").on("wheel", (e) => e.stopPropagation());
			app.readaloudAudioPlayer.onended = app.onPageReadaloudEnded;

			if (app.renditions.localizations.length > 1) {
				app.renditions.localizations.forEach(localization => {
					var el = "<a href=\"#\" class=\"list-group-item list-group-item-action\" data-xr-language-code=\"" + localization.languageCode + "\">" + localization.label + "</a>";
					$("#languageSelector").append(el);
				});
				$("#languageSelector .list-group-item").click(function () {
					app.localStorage.setItem("userPreferredLanguageCode", $(this).attr("data-xr-language-code"));
					app.updateReader(true);
				});
			} else {
				$("#languageBtn").hide();
			}

			// load renditions list
			app.renditions.list = [];
			_(renditions.formats).each(function(format) {
				_(renditions.orientations).each(function(orientation) {
					_(renditions.localizations).each(function(localization) {
						var r = {
							width: orientation.orientation == "portrait" ? format.screenHeight : format.screenWidth,
							height: orientation.orientation == "portrait" ? format.screenWidth : format.screenHeight,
							localization: localization.label,
							languageCode: localization.languageCode,
							isPreferred: localization.default == true
						}
						r.baseUrl = document.location.href.split("/").slice(0,-1).join("/") + "/Payload/" + [format.id,orientation.id,localization.id].join(".") + "/";
						r.contentsUrl = r.baseUrl + "OEBPS/";
						r.aspectRatio = r.width / r.height;
						app.renditions.list.push(r);
					});
				});
			});

			// plug-in XReader.JS extensions into XReader.Core

			xreader.Hooks.BeforePagePlay = function(pageSrc) {
				// plug-in XReader.JS reference into window object
				xreader.executeJavascript(pageSrc, function ($, window, document) {
					window.xreaderjs = app;
				});

				// load toc into page pubcoder object
				var toc = app.rendition.data.toc.map(entry => {
					return {
						title : entry.title,
						startPage : entry.pageNumber
					}
				});
				if (toc.length == 0 || toc[0].startPage > 1) {
					toc.splice(0, 0, {
						title : "",
						startPage : 1
					});
				}
				for (var i = 0; i < toc.length; i++) {
					if (i == toc.length-1) {
						toc[i].endPage = app.rendition.data.pages.length;
					} else {
						toc[i].endPage = toc[i + 1].startPage - 1;
					}
				}
				xreader.executeJavascript(pageSrc, function ($, window, document) {
					window.pubcoder.project.toc = toc;
				});

				// eventually inject lms library
				if (getCookie("lms_enabled") === "true") {
					xreader.executeJavascript(pageSrc, function ($, window, document) {
						var lmsLibSrc = getCookie("lms_lib_url");
						console.log('Injecting LMS Library', lmsLibSrc);
						var doc = window.document;
						var myScript = doc.createElement('script');
						myScript.setAttribute('type', 'text/javascript');
						myScript.setAttribute('src', lmsLibSrc);
						doc.body.appendChild(myScript)
					});
				}
			}

			// eventually disable quiz auto-init
			if (getCookie("lms_assessments_enabled") === "true") {
				xreader.Hooks.BeforePageLoad = function(pageSrc) {
					xreader.executeJavascript(pageSrc, function ($, window, document) {
						var disableAutoInitSelectors = window.pubcoder.disableAutoInitSelectors || [
							"SCQuiz", "SCCrosswords", "SCFillInTheGaps", "SCTrueFalse", "SCMatchWordWithPicture"
						];
						disableAutoInitSelectors.forEach(function(selector) {
							var elements = $("." + selector);
							console.warn("disabling auto-init for " + elements.length + " " + selector);
							elements.attr("data-autoinit", "false");
						});
					});
				};
			}

			// start reader
			setTimeout(function() {
				app.inited = true;
				app.updateReader(true);
			}, 1);
		},

		ToggleMenu: function() {
			if ($("#xreaderUI").css("display") != "none") {
				$("#xreaderUI").hide();
			} else if (xreader.ReaderSettings.EnableTouchToOpenAppMenu) {
				$("#xreaderUI").show();
				setTimeout(function () {
					app.scrollPageSwitcherToActivePage(false);
					var bLazy = new Blazy({
						container: '.pagesThumbnailsContainer'
					});
				}, 100);
			}
		},

		GoToPageAtRight : function() { 
			if (app.currentPage != null) {
				app.goToPageAtRight();
			} else {
				console.warn("cannot go to page at right, no page loaded yet")
			}
		},

        GoToPageAtLeft : function() {
			if (app.currentPage != null) {
				app.goToPageAtLeft();
			} else {
				console.warn("cannot go to page at left, no page loaded yet")
			}
		},

		WindowResize : function(params) {
			app.readerViewWidth = params[0];
			app.readerViewHeight = params[1];
			app.updateReader();
		},
		
		"XPUB.Ready": function(params) {
			var pageUrl = params[0];
			// console.warn("XPUB.Ready", pageUrl, app.currentPage.url);
			if (app.readaloudIsPlaying && pageUrl == (app.rendition.contentsUrl + app.currentPage.url)) {
				app.startReadaloud(app.currentPage);
			}
			if (app.currentSearchPattern.length > 0) {
				xreader.executeJavascript("*", function ($, window, document) { window.XPUB.find(app.currentSearchPattern); });
			}
		},

		"XPUB.OpenUrl": function(params) {
			var senderPageUrl = params[0];
			var url = params[1];
			var openInBrowser = params[2];

			if (openInBrowser) {
				window.open(url);	
				return;
			}

			// eventually resolve relative URLS
			if (url.substring(0, 2) == "./" || url.substring(0, 3) == "../") {
				var absUrl = new URL(url, senderPageUrl);
				url = absUrl.href;
			}

			// check if XPUB wants to change page actually
			if (url.substring(0, app.rendition.contentsUrl.length) == app.rendition.contentsUrl) {
				var pageUrl = url.substring(app.rendition.contentsUrl.length);
				var destPage = _(app.rendition.data.pages).findWhere({url: pageUrl});
				if (destPage != null) app.goToPage(app.rendition.data.pages.indexOf(destPage) + 1);
				return; // anyway, deny opening a local file that is not a page
			}

			// finally open in a new window
			window.open(url);
		},

		"XPUB.OpenMenu": function() {
			$("#xreaderUI").show();
			setTimeout(function () {
				app.scrollPageSwitcherToActivePage(false);
				var bLazy = new Blazy({
					container: '.pagesThumbnailsContainer'
				});
			}, 100);
		},

		"XPUB.PlayAudio": function(params) {
			var senderPageUrl = params[0];
			var url = params[1];
			var playFromBeginning = params[2];
			var objectIdInPage = params[3];
			// console.log(url, playFromBeginning, objectIdInPage);

			var buffer = app.audioBuffers[url];
			if (buffer == null) {
				var request = new XMLHttpRequest();
				// console.log("getting", url);
				request.open('GET', url, true);
				request.responseType = 'arraybuffer';
				request.onload = function() {
					app.audioContext.decodeAudioData(request.response, function(buffer) {
						app.audioBuffers[url] = buffer;
						app.xreaderCalls["XPUB.PlayAudio"](params);
					}, function(error) {
						console.error(error);
					});
				}
				request.send();

			} else {
				var source = app.audioContext.createBufferSource();
				source.buffer = buffer;
				source.connect(app.audioContext.destination);
				source.onended = function() {
					// console.warn("ENDED");
					try {
						xreader.getPageContentWindow(senderPageUrl).$("#" + objectIdInPage).trigger("ended");
					} catch (error) {}
				}
				app.audioSources.push(source);
				source.start(0);
				app.audioContext.suspend().then(() => app.audioContext.resume()); // on safari mobile, after some idle time or after going to standby by being idle, the audio context goes to an inconistent state where audioContext.state == "running" but the playback is actually suspended. Forcing .resume is not enough, we need to suspend the audioContext manually and then resume it.
			}
		},

		"XPUB.SeekReadaloud": function(params) {
			var senderPageUrl = params[0];
			var blockId = params[1];
			if (!app.readaloudIsPlaying) return;
			// console.warn(senderPageUrl, blockId);
			var page = app.currentPage;
			if (page == null || app.rendition.contentsUrl + page.url != senderPageUrl) {
				var url = senderPageUrl.substr(app.rendition.contentsUrl.length);
				// console.warn(url);
				page = _(app.rendition.data.pages).find(function (p) { return p.url == url });
				if (page == null) return;
				app.startReadaloud(page);
			}
			if (page.readaloudBlocks == null) return;
			var block = _(page.readaloudBlocks).find(function (b) { return b.DOMElementId == blockId });
			if (block == null) return;
			app.readaloudAudioPlayer.currentTime = block.ClipBegin;
			if (app.readaloudAudioPlayer.paused) {
				app.startReadaloud(page);
			}
		},

		"XPUB.StartStopReadAloud": function(params) {
			if (app.readaloudIsPlaying) {
				app.stopReadaloud();
			} else {
				var senderPageUrl = params[0];
				var url = senderPageUrl.substr(app.rendition.contentsUrl.length);
				var page = _(app.rendition.data.pages).find(function (p) { return p.url == url });
				app.startReadaloud(page);
			}
		},
		"XPUB.StartReadAloud": function(params) {
			var senderPageUrl = params[0];
			var startFromBeginning = params.length > 1 ? params[1] : true;
			var url = senderPageUrl.substr(app.rendition.contentsUrl.length);
			var page = _(app.rendition.data.pages).find(function (p) { return p.url == url });
			app.startReadaloud(page, startFromBeginning);
		},
		"XPUB.StopReadAloud": function() {
			app.stopReadaloud();
		},
		"XPUB.PauseReadAloud": function() {
			app.pauseReadaloud();
		},
		"XPUB.StartSoundtrack": function() {
			app.startSoundtrack();
		},
		"XPUB.StopSoundtrack": function() {
			app.stopSoundtrack();
		},
		"XPUB.ToggleSoundtrack": function() {
			app.toggleSoundtrack();
		},

		"XPUB.OpenLocalizationsMenu": function() {
			$('#languageControlsModal').modal();
		},
		
		// "XPUB.PlayAudio": function(params) {
		// 	var senderPageUrl = params[0];
		// 	var url = params[1];
		// 	var playFromBeginning = params[2];
		// 	var objectIdInPage = params[3];
		// 	console.log(url, playFromBeginning, objectIdInPage);
			
		// 	if (app.audioTracks == null) app.audioTracks = [];

		// 	var track = app.audioTracks[objectIdInPage];
		// 	if (track == null) {
		// 		const audioElement = xreader.getPageContentWindow(senderPageUrl).document.getElementById(objectIdInPage);
		// 		const track = app.audioContext.createMediaElementSource(audioElement);
		// 		track.connect(app.audioContext.destination);
		// 		app.audioTracks[objectIdInPage] = track
		// 		app.xreaderCalls["XPUB.PlayAudio"](params);
		// 	} else {
		// 		track.mediaElement.play();
		// 		// const audioElement = xreader.getPageContentWindow(senderPageUrl).document.getElementById(objectIdInPage);
		// 		// audioElement.currentTime = 0;
		// 		// audioElement.play();
		// 	}
		// }

	},
	
	inited: false,
	isFirstReaderUpdate: true,
	identifier : "",
	readerViewWidth : 0,
	readerViewHeight : 0,
	renditions : [],
	rendition : null,
	isFacingPages : false,
	isRightToLeft : false,
	swipeToNavigate : false,
	autoplay: false,
	viewportFitCover: true,
	audioBuffers: [],
	audioSources: [],
	currentSearchPattern: "",
	
	_currentPageNumber : 0,
	get currentPageNumber() {
		return this._currentPageNumber;
	},
	set currentPageNumber(value) {
		this._currentPageNumber = value;
		console.info("current page is now", this._currentPageNumber, this.currentPage);
	},


	events : {
		readaloudPlaybackStatusChanged: "readaloudPlaybackStatusChanged",
		soundtrackPlaybackStatusChanged: "soundtrackPlaybackStatusChanged",
	},

	get currentPage() {
		if (this.currentPageNumber == 0 || this.rendition == null || this.rendition.data == null) return null;
		var page = this.rendition.data.pages[this.currentPageNumber-1];
		return page || null;
	},

	_audioContext: null,
	get audioContext() {
		try {
			if (this._audioContext == null) {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				this._audioContext = new AudioContext();
				// this._audioContext.resume(); // someone advices to resume audiocontect manually for Safari mobile
			}
			return this._audioContext;	
		} catch (error) {
			return null; // browser does not support AudioContext
		}
	},

	_soundtrackIsPlaying: true,
	get soundtrackIsPlaying() {
		return this._soundtrackIsPlaying;
	},
	set soundtrackIsPlaying(value) {
		this._soundtrackIsPlaying = value;
		$(".xr-control").trigger(this.events.soundtrackPlaybackStatusChanged);
	},
	get soundtrackAudioPlayer() {
		return document.getElementById("soundtrackAudioPlayer");
	},
	get soundtrackVolume() {
		return this.soundtrackAudioPlayer.volume * 100;
	},
	set soundtrackVolume(value) {
		this.soundtrackAudioPlayer.volume = value/100;
		document.getElementById("soundtrackVolumeSlider").value = value;
	},

	_readaloudIsPlaying: false,
	get readaloudIsPlaying() {
		return this._readaloudIsPlaying;
	},
	set readaloudIsPlaying(value) {
		this._readaloudIsPlaying = value;
		$(".xr-control").trigger(this.events.readaloudPlaybackStatusChanged);
	},

	_readaloudTurnsPagesAutomatically: false,
	get readaloudTurnsPagesAutomatically() {
		return this._readaloudTurnsPagesAutomatically;
	},
	set readaloudTurnsPagesAutomatically(value) {
		this._readaloudTurnsPagesAutomatically = value;
		$(".xr-control").trigger(this.events.readaloudPlaybackStatusChanged);
	},

	get readaloudAudioPlayer() {
		return document.getElementById("readaloudAudioPlayer");
	},

	get readaloudVolume() {
		return this.readaloudAudioPlayer.volume * 100;
	},
	set readaloudVolume(value) {
		this.readaloudAudioPlayer.volume = value/100;
		document.getElementById("readaloudVolumeSlider").value = value;
	},

	readaloudInterval: null,
	readaloudCurrentBlock: null,

	startSoundtrack : function() {
		var self = app;
		var player = self.soundtrackAudioPlayer;
		// console.log("soundtrack playback starting");
		self.soundtrackIsPlaying = true;

		var src = self.currentPage.soundtrackUrl;
		if (typeof(src) === "undefined") src = null;
		src = src != null ? self.rendition.contentsUrl + src : "";
		
		if (player.src == src) {
			// console.log("soundtrack didn't change");
			if (src != "" && player.paused) player.play(); // e.g. previous playback blocked
			return;
		} else {
			// console.log("soundtrack changed");
		}
		
		player.pause();
		player.src = "";

		if (src == "") return;

		player.src = src;
		player.load();
		player.play();
	},
	stopSoundtrack : function() {
		var self = app;
		var player = self.soundtrackAudioPlayer;
		// console.log("soundtrack playback stopping");
		self.soundtrackIsPlaying = false;
		player.pause();
		player.src = "";
	},
	toggleSoundtrack : function() {
		var self = app;
		if (!self.soundtrackIsPlaying) {
			self.startSoundtrack();
		} else {
			self.stopSoundtrack();
		}
	},

	startReadaloud : function(page, startFromBeginning = false) {
		var self = app;
		var player = self.readaloudAudioPlayer;
		if (page == null) page = self.currentPage;
		// console.log("readaloud playback starting", page, app.currentPage);
		self.readaloudIsPlaying = true;

		if (page.readaloudAudioUrl == null && app.isFacingPages) {
			// this page does not have read aloud, check if facing page has one and eventually switch to it
			if (app.currentPageNumber % 2 == 0 &&
				app.rendition.data.pages.length > app.currentPageNumber &&
				app.rendition.data.pages[app.currentPageNumber].readaloudAudioUrl != null) {
				app.goToNextPage();
				app.startReadaloud(app.currentPage);
				return;
			} else if (app.currentPageNumber % 2 == 1 &&
				app.currentPageNumber > 1 &&
				app.rendition.data.pages[app.currentPageNumber-2].readaloudAudioUrl != null) {
				app.goToPreviousPage();
				app.startReadaloud(app.currentPage);
				return;
			}
		}

		if (page != app.currentPage) {
			self.goToPage(self.rendition.data.pages.indexOf(page)+1);
		}

		var src = page.readaloudAudioUrl;
		if (typeof(src) === "undefined") src = null;

		if (src == null) {
			player.pause();
			player.src = "";
			return;
		}

		src = self.rendition.contentsUrl + src;

		if (player.src != src || (player.paused && startFromBeginning)) {
			player.src = src;
			player.load();
		}
		if (player.paused || startFromBeginning) {
			player.play().catch(() => {});
			self.readaloudCurrentBlock = null;
			xreader.applyMediaOverlay(self.readaloudIsPlaying);
		}

		xreader.applyMediaOverlay(self.readaloudIsPlaying, app.rendition.contentsUrl + page.url, self.readaloudCurrentBlock != null ? self.readaloudCurrentBlock.DOMElementId : null, !player.paused);

		if (self.readaloudInterval == null) {
			self.readaloudInterval = setInterval(function() {
				var time = app.readaloudAudioPlayer.currentTime;
				var page = app.currentPage;
				if (page == null) return;
				if (page.readaloudBlocks == null) return;
				var block = _(page.readaloudBlocks).find(function (b) { return time >= b.ClipBegin && time < b.ClipEnd; });
				if (block != self.readaloudCurrentBlock) {
					// console.warn(self.readaloudIsPlaying, app.rendition.contentsUrl + page.url, block != null ? block.DOMElementId : null);
					self.readaloudCurrentBlock = block;
					xreader.applyMediaOverlay(self.readaloudIsPlaying, app.rendition.contentsUrl + page.url, block != null ? block.DOMElementId : null, !player.paused);
				}
			}, 50);
		}
	},
	stopReadaloud : function() {
		var self = app;
		var player = self.readaloudAudioPlayer;
		// console.log("readaloud playback stopping");
		self.readaloudIsPlaying = false;
		player.pause();
		player.src = "";
		if (self.readaloudInterval != null) {
			clearInterval(self.readaloudInterval);
			self.readaloudInterval = null;
		}
		xreader.applyMediaOverlay(false);
	},
	pauseReadaloud : function() {
		var self = app;
		var player = self.readaloudAudioPlayer;
		// console.log("readaloud playback pausing");
		self.readaloudIsPlaying = false;
		player.pause();
		if (self.readaloudInterval != null) {
			clearInterval(self.readaloudInterval);
			self.readaloudInterval = null;
		}
		xreader.applyMediaOverlay(false);
	},
	toggleReadaloud : function() {
		var self = app;
		if (!self.readaloudIsPlaying) {
			self.startReadaloud(app.currentPage);
		} else {
			self.stopReadaloud();
		}
	},
	onPageReadaloudEnded: function() {
		var self = app;
		var player = self.readaloudAudioPlayer;
		console.warn("readaloud player ended");

		// page playback finished, clear latest highlighted blocks
		player.pause();
		player.src = "";

		// trigger read aloud page completed event
		xreader.executeJavascript("*", ($) => $(".SCPageObject").trigger("SCEventReadAloudPageCompleted"));

		// eventually go next page and start its media overlay
		if (self.isFacingPages && self.currentPageNumber % 2 == 0 && self.rendition.data.pages.length > self.currentPageNumber) {
			self.goToNextPage();
			if (self.currentPage.readaloudAudioUrl != null) {
				self.startReadaloud(self.currentPage);
				return;
			}
		}
		// eventually turn page automatically (only if call comes from an audio that actually finished playing, otherwise it would turn pages indefinitely)
		if (self.readaloudTurnsPagesAutomatically) {
			self.goToNextPage();
		}
	},

	loadSmilForPage: function(page) {
		if (page == null) return;
		if (page.readaloudSmilUrl == null) return;
		if (page.readaloudBlocks != null) return; // already loaded
		// console.warn(page.readaloudSmilUrl);
		var smilUrl = app.rendition.contentsUrl + page.readaloudSmilUrl;
		var smilTimeToSeconds = function(timeString) {
			var t = timeString.split(":");
			var s = 0;
			for (var i = t.length-1; i >= 0; i--) {
				s = s + parseFloat(t[i]) * Math.pow(60, t.length-1-i);
			}
			return s;
		};
		$.ajax({
			type: "GET",
			url: smilUrl,
			dataType: "xml",
			success: function(xml) {
				// console.warn(xml);
				var readaloudBlocks = [];
				$(xml).find('par').each(function(){
					try {
						var src = $(this).find('text').attr('src');
						readaloudBlocks.push({
							DOMElementId: src.substr(src.indexOf('#')+1),
							ClipBegin: smilTimeToSeconds($(this).find('audio').attr('clipBegin')),
							ClipEnd: smilTimeToSeconds($(this).find('audio').attr('clipEnd'))
						});
					} catch (err) {
						throw err;
					}
			   });
			   page.readaloudBlocks = readaloudBlocks;
			},
			error: function() {
				console.error("error loading smil " + smilUrl);
			}
		});
	},

	stopReaderInteractivity: function () {
		app.audioSources.forEach(source => {
			source.stop(0);
		});
		app.audioSources = [];
	},

	scrollPageSwitcherToActivePage: function (animated) {
		try {
			var toffset = $(".pageThumbnail.active").offset().left;
		} catch (error) {
			return; // no selection
		}
		if (toffset < 0 || toffset + $(".pageThumbnail.active").width() > $(".pagesThumbnailsContainer").width()) {
			var tscroll = $(".pagesThumbnailsContainer").scrollLeft() + toffset;
			if (toffset > 0) tscroll = tscroll - $(".pagesThumbnailsContainer").width() + $(".pageThumbnail.active").width();
			if (animated === true) {
				$(".pagesThumbnailsContainer").animate({ scrollLeft: tscroll}, 300);
			} else {
				$(".pagesThumbnailsContainer").scrollLeft(tscroll);
			}
		}
	},

	localStorage : {
		getItem : function(key) {
			return localStorage.getItem(app.identifier + "." + key);
		},
		setItem : function(key, value) {
			localStorage.setItem(app.identifier + "." + key, value);
		}
	},
	

	/**
	 * Updates the reader basing on the current view size, device orientation, selected language and every other reader settings.
	 * If necessary, will switch document rendition, adjust display, and navigate to the correct page accordingly
	 * @memberof app
	 * @param {boolean} forceUpdate true to always force page update, false to stick with current page state if possible
	 */
	updateReader : function(forceUpdate) {
		if (!app.inited) return;

		var shouldSelectRenditionFromUrl = this.isFirstReaderUpdate;
		this.isFirstReaderUpdate = false;

		var width = app.readerViewWidth;
		var height = app.readerViewHeight;

		// select a preferred language: first look for language query parameter, otherwise try to restore user preferences, finally continue with default value...
		if (shouldSelectRenditionFromUrl) {
			var preferredLanguageCode = null;
			try {
				var queryParams = new URLSearchParams(new URL(window.location.href).search);
				if (queryParams.get("language") != null) {
					var foundRendition = _(app.renditions.localizations).findWhere({languageCode: queryParams.get("language")});
					if (foundRendition != null) {
						console.log("forcing " + foundRendition.languageCode + " rendition from URL parameters");
						preferredLanguageCode = foundRendition.languageCode;
						app.localStorage.setItem("userPreferredLanguageCode", foundRendition.languageCode);
					} else {
						console.error("rendition " + queryParams.get("language") + " from URL parameters not found!");
					}
				}		
			} catch (err) {
				console.error(err);
			}
		}

		if (preferredLanguageCode == null) {
			preferredLanguageCode = app.localStorage.getItem("userPreferredLanguageCode") || navigator.language; // e.g. en-US
		}

		// find the best rendition matching current settings
		var rendition = app.getBestRenditionMatching(width, height, preferredLanguageCode);
		
		// updates facing pages display (used only with portrait renditions)
		var previousFacingPages = app.isFacingPages;
		app.isFacingPages = (xreader.Document.Settings.facingPagesInLandscape && width > height && rendition.width < rendition.height);

		var previousRendition = app.rendition;
        var previousPageId = app.currentPageNumber > 0 && app.rendition != null ? app.rendition.data.pages[app.currentPageNumber - 1].id : null;

		if (app.readerViewWidth > 0 && app.readerViewHeight > 0) {
			$("#navigation").css("width", app.readerViewWidth + "px");
			$("#navigation").css("height", app.readerViewHeight + "px");
			$("#xreaderUI").css("width", app.readerViewWidth + "px");
			$("#xreaderUI").css("height", app.readerViewHeight + "px");
			$("#playScreen").css("width", app.readerViewWidth + "px");
			$("#playScreen").css("height", app.readerViewHeight + "px");
		}

		app.loadRendition(rendition, function() {
			if (!forceUpdate) {
				if (app.rendition == previousRendition && app.isFacingPages == previousFacingPages) {
					// the very same page(s) is(are) in the same rendition displayed, just adjust sizing
					xreader.adjustInterface();
					return;
				}
				// console.log("rendition / facing pages changed!");
			}

			// adjust reader controls & settings
			if (previousRendition == null) {
				app.soundtrackVolume = rendition.data.options.soundtrackVolumeDefault;
			}
			app.autoplay = app.autoplay || app.rendition.data.options.autoplay;
			app.viewportFitCover = app.rendition.data.options.viewportFitCover;
			app.isRightToLeft = app.rendition.data.meta['page-progression-direction'] == "rtl";
			app.swipeToNavigate = app.rendition.data.options.swipeToNavigate;

			if (app.rendition.data.options.enableThumbnails) {
				$("#xreaderBottomMenuView").css("visibility","visible");
			} else {
				$("#xreaderBottomMenuView").css("visibility","hidden");
			}

			if (app.rendition.data.options.enableReadaloud || app.rendition.data.options.enableSoundtrack) {
				$("#audioControlsBtn").show();
				$("#readaloudSettingsContainer").css("display", app.rendition.data.options.enableReadaloud ? "block" : "none");
				$("#soundtrackSettingsContainer").css("display", app.rendition.data.options.enableSoundtrack ? "block" : "none");
			} else {
				$("#audioControlsBtn").hide();
			}

			if (app.rendition.data.options.enableSearch) {
				$("#searchControlsBtn").show();
			} else {
				$("#searchControlsBtn").hide();
			}
			app.clearSearch();
			$('#searchControlsModal').modal('hide');

			$("#languageSelector .list-group-item").removeClass("active");
			$("#languageSelector .list-group-item[data-xr-language-code='" + app.rendition.languageCode + "']").addClass("active");

			if (rendition.data.toc.length > 1) {
				$("#tocBtn").show();
				$("#chapterSelector").html("");
				rendition.data.toc.forEach(chapter => {
					var el = "<a href=\"#\" class=\"list-group-item list-group-item-action\" data-xr-page-number=\"" + chapter.pageNumber + "\">" + chapter.title + "</a>";
					$("#chapterSelector").append(el);
				});
				$("#chapterSelector .list-group-item").click(function () {
					app.goToPage(parseInt($(this).attr("data-xr-page-number")), true);
					$("#tocModal").modal('hide');
				});
			} else {
				$("#tocBtn").hide();
			}

			$(".pagesThumbnailsContainer").html("");
			rendition.data.pages.forEach(page => {
				var el = "<a href=\"#\" class=\"pageThumbnail\" data-xr-page-number=\"" + page.number + "\"><img class=\"b-lazy\" src=\"" + rendition.contentsUrl + "images/default-thumbnail.png\" data-src=\"" + rendition.contentsUrl + page.thumbnailImageUrl + "\" alt=\"Page " + page.number + "\"></a>";
				$(".pagesThumbnailsContainer").append(el);
			});
			$(".pageThumbnail").click(function (e) {
				e.preventDefault();
				app.goToPage(parseInt($(this).attr("data-xr-page-number")));
			});
			setTimeout(function () {
				app.scrollPageSwitcherToActivePage(false);
				var bLazy = new Blazy({
					container: '.pagesThumbnailsContainer'
				});
			}, 1000);

			if (app.viewportFitCover) {
				$("body").addClass("use-safe-area");
			} else {
				$("body").removeClass("use-safe-area");
			}

			$(".navArrow").removeClass("navLeftArrow,navRightArrow");
			if (!app.isRightToLeft) {
				$("#nextPageBtn").addClass("navRightArrow");
				$("#previousPageBtn").addClass("navLeftArrow");
			} else {
				$("#nextPageBtn").addClass("navLeftArrow");
				$("#previousPageBtn").addClass("navRightArrow");
			}
			
			$("#navigation").css("display", rendition.data.options.navigationArrows ? "block" : "none");

			if (app.autoplay) {
				$("#playScreen").hide();
				$("#spread").show();
			} else {
				$("#playScreen").css("background-image", "url('" + app.rendition.contentsUrl + app.rendition.data.meta.cover + "')");
				$("#playScreen").show();
				$("#spread").hide();
				return;
			}

			// navigate to page

			var pageToNavigate = null;
			if (previousPageId != null) {
				// Rendition may have changed, so current page probably did
				// try to find the page corresponding to the previous rendition one in the current rendition
				pageToNavigate = _(app.rendition.data.pages).findWhere({id:previousPageId});
			}
			// eventually look for startPage query parameter
			if (pageToNavigate == null) {
				try {
					var queryParams = new URLSearchParams(new URL(window.location.href).search);
					if (queryParams.get("startPage") != null) {
						pageToNavigate = _(app.rendition.data.pages).findWhere({number:parseInt(queryParams.get("startPage"))});
					}		
				} catch (err) {
					console.error(err);
				}
			}
			// if we don't have a specific destination to navigate to, eventually restore the last seen page
			if (pageToNavigate == null && xreader.Document.Settings.restoreLatestPage) {
				// not implemented yet
				// var pageToNavigateString = ViewerManager.GetViewerPreference(ItemId, "lastPageNumber");
				// if (string.IsNullOrEmpty(pageToNavigateString)) pageToNavigateString = "1";
				// if (int.TryParse(pageToNavigateString, out int pageToNavigateInt)) {
				// 	pageToNavigateInt = Math.Max(0, pageToNavigateInt - 1);
				// 	if (pageToNavigateInt < Document.Current.Pages.Count) {
				// 		pageToNavigate = Document.Current.Pages[pageToNavigateInt];
				// 	}
				// }
			}

			// if we still don't have a specific destination to navigate to, pick the default one
			var destPage = pageToNavigate != null ? app.rendition.data.pages.indexOf(pageToNavigate)+1 : 1;
			
			app.goToPage(destPage, true);
		});
	},


	/**
	 * Gets the best possible rendition matching a certain language and page/screen width and height.
	 * If preferred language is not available, author-preferred language is used
	 * @memberof app
	 * @param {number} width Window Width
	 * @param {number} width Widow Height
	 * @param {string} preferredLanguageCode Preferred language code
	 */
	getBestRenditionMatching : function(width, height, preferredLanguageCode) {
		// select renditions with user-preferred language
		var results = _(app.renditions.list).where({languageCode:preferredLanguageCode});

		// eventually fallback to renditions with language-only code (e.g. "en" instead of "en-US")
		if (results.length == 0 && preferredLanguageCode.indexOf("-") >= 0) {
			preferredLanguageCode = preferredLanguageCode.substring(0, preferredLanguageCode.indexOf("-"));
			results = _(app.renditions.list).where({languageCode:preferredLanguageCode});
		}

		// eventually fallback to renditions with author-preferred language
		if (results.length == 0) results = _(app.renditions.list).where({isPreferred:true});

		// if «facing pages in landscape» option is on, always select a portrait rendition
		if (xreader.Document.Settings.facingPagesInLandscape) {
			var maxSize = Math.max(width, height);
			var minSize = Math.min(width, height);
			height = maxSize;
			width = minSize;
		}

		// select renditions with best matching aspect ratio
		var currentRatio = width / height;
		var ratio = _(results).reduce(function(bestMatch, rendition) {
			if (bestMatch == null) {
				return rendition
			} else {
				return Math.abs(rendition.aspectRatio - currentRatio) < Math.abs(bestMatch.aspectRatio - currentRatio) ? rendition : bestMatch;
			}
		}).aspectRatio;
		results = _(results).filter(function(r) { return Math.abs(r.aspectRatio - ratio) < 0.01 });

		// select renditions with resoultion equal or higher than current resolution
		var currentResolution = width * height;
		var higherResResults = _(results).filter(function(r) { return r.width * r.height >= currentResolution });

		if (higherResResults.length > 0) {
			// if renditions with resolutions higher or equal than the current where found, select the smallest among these
			return _(higherResResults).reduce(function(bestMatch, rendition) {
				if (bestMatch == null) {
					return rendition
				} else {
					return rendition.width * rendition.height < bestMatch.width * bestMatch.height ? rendition : bestMatch;
				}
			});
		} else {
			// otherwise use the rendition with the highest resolution available (but always smaller than the current)
			return _(results).reduce(function(bestMatch, rendition) {
				if (bestMatch == null) {
					return rendition
				} else {
					return rendition.width * rendition.height > bestMatch.width * bestMatch.height ? rendition : bestMatch;
				}
			});
		}
	},


	/**
	 * Loads a rendition and makes it the active one for the reader
	 * @param {Object} rendition The rendition to load
	 * @param {function():void} callback Called when rendition has been loaded
	 */
	loadRendition : function(rendition, callback) {
		if (app.rendition == rendition) {
			callback();
			return;
		}
		app.rendition = rendition;

		// load rendition data
		var myScript = document.createElement("script");
		myScript.setAttribute("src", rendition.baseUrl + "META-INF/com.pubcoder.xreader.meta.js");
		myScript.addEventListener("load", function() {
			document.body.removeChild(myScript);
			// console.log("rendition loaded:", app.rendition);
			callback();
		}, false);
		document.body.appendChild(myScript);
	},


	goToPage : function(pageNumber, forceReload) {
	    if (pageNumber < 1) pageNumber = 1;
	    if (pageNumber > app.rendition.data.pages.length) pageNumber = app.rendition.data.pages.length;

		if (forceReload !== true && app.currentPageNumber == pageNumber) return;

		if (app.readaloudIsPlaying && app.currentPageNumber != pageNumber) {
			app.readaloudAudioPlayer.pause();
			app.readaloudAudioPlayer.src = "";
		}

		var useDoublePage = app.isFacingPages;
		var isRightToLeft = app.isRightToLeft;
		var animationFunction = null;
		var pageIsAlreadyVisible = false;

		if (app.currentPageNumber > 0) {
			// chose behavior basing on path to current page to destination,
			// e.g. page is already visible and we should cancel navigation or
			// page is adjacent and we should use an animation

			var visiblePages = app.getVisiblePages()
			var leftPages = visiblePages.leftPages;
			var rightPages = visiblePages.rightPages;
			visiblePages = visiblePages.visiblePages;

			if (useDoublePage && _(visiblePages).contains(pageNumber) && app.currentPageNumber != pageNumber) {
				// destination page is already displayed, so there's no need to reload the page
				xreader.cancelPageSwitch(false);
				pageIsAlreadyVisible = true;
			} else if (_(rightPages).contains(pageNumber) && app.swipeToNavigate) {
				// turn to the page at right with an animation
				animationFunction = xreader.turnPagesRightAnimated;
			} else if (_(leftPages).contains(pageNumber) && app.swipeToNavigate) {
				// turn to the page at left with an animation
				animationFunction = xreader.turnPagesLeftAnimated;
			}
			
			$(".pageThumbnail[data-xr-page-number='" + app.currentPageNumber + "']").removeClass("active");
		}

        app.currentPageNumber = pageNumber;
		$(".pageThumbnail[data-xr-page-number='" + app.currentPageNumber + "']").addClass("active");

		app.scrollPageSwitcherToActivePage(true);

		if (app.soundtrackIsPlaying) app.startSoundtrack();
		if (app.readloudIsPlaying) app.startReadaloud(pageNumber);

		if (forceReload !== true && pageIsAlreadyVisible) return;

		app.stopReaderInteractivity();

		var startIndex = pageNumber - (useDoublePage && pageNumber % 2 != 0 ? 2 : 1);
		var index = startIndex;
		var baseUrl = app.rendition.contentsUrl;

		var pageOne = (index >= 0 ?
			baseUrl + app.rendition.data.pages[index].url : "");
		var pageObjectOne = pageOne.length > 0 ? app.rendition.data.pages[index] : null;

		var thumbOne = (index >= 0 ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		var pageTwo = (useDoublePage && ++index < app.rendition.data.pages.length ?
			baseUrl + app.rendition.data.pages[index].url : "");
		var pageObjectTwo = pageTwo.length > 0 ? app.rendition.data.pages[index] : null;
		var endIndex = pageTwo.length > 0 ? index : startIndex;

		var thumbTwo = (useDoublePage && index < app.rendition.data.pages.length ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		var thumbRightOne = (++index < app.rendition.data.pages.length ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		var thumbRightTwo = (useDoublePage && ++index < app.rendition.data.pages.length ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		index = startIndex - 1;

		var thumbLeftOne = (index >= 0 ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		var thumbLeftTwo = (useDoublePage && --index >= 0 ?
			baseUrl + app.rendition.data.pages[index].loadingImageUrl : "");

		if (useDoublePage) {
			var tmp = thumbLeftTwo; thumbLeftTwo = thumbLeftOne; thumbLeftOne = tmp;
		}

		if (isRightToLeft) {
			if (useDoublePage) {
				var tmp;
				tmp = pageTwo; pageTwo = pageOne; pageOne = tmp;
				tmp = thumbTwo; thumbTwo = thumbOne; thumbOne = tmp;
				tmp = thumbRightOne; thumbRightOne = thumbLeftTwo; thumbLeftTwo = tmp;
				tmp = thumbRightTwo; thumbRightTwo = thumbLeftOne; thumbLeftOne = tmp;
			} else {
				var tmp = thumbRightOne; thumbRightOne = thumbLeftOne; thumbLeftOne = tmp;
			}
		}

		var readerSettings = {
			EnableDoublePage: useDoublePage,
			EnableRightToLeft: isRightToLeft,
			EnableSwipeToNavigate: app.rendition.data.options.swipeToNavigate,
			EnablePinchToZoom: true, //app.rendition.data.options.pinchToZoom,
			EnableTouchToOpenAppMenu: app.rendition.data.options.touchToOpenAppMenu,
			EnableNavigationArrows: app.rendition.data.options.navigationArrows,
			EnableTapToSeekReadaloud: true,
			ViewportFitCover: app.viewportFitCover,
		};

		if (pageObjectOne != null) app.loadSmilForPage(pageObjectOne);
		if (pageObjectTwo != null) app.loadSmilForPage(pageObjectTwo);

		var goToPageFn = function () {
			xreader.load(readerSettings, app.rendition.data.meta.width, app.rendition.data.meta.height, 
				pageOne, pageTwo,
				thumbOne, thumbTwo,
				thumbRightOne, thumbRightTwo,
				thumbLeftOne, thumbLeftTwo
			);
			
			var nextPageBtnDisplay, previousPageBtnDisplay;
			if (isRightToLeft) {
				xreader.canDragPageRight = (endIndex < app.rendition.data.pages.length - 1);
				xreader.canDragPageLeft = (startIndex > 0);
				nextPageBtnDisplay = xreader.canDragPageRight ? "block" : "none";
				previousPageBtnDisplay = xreader.canDragPageLeft ? "block" : "none";
			} else {
				xreader.canDragPageRight = (startIndex > 0);
				xreader.canDragPageLeft = (endIndex < app.rendition.data.pages.length - 1);
				nextPageBtnDisplay = xreader.canDragPageLeft ? "block" : "none";
				previousPageBtnDisplay = xreader.canDragPageRight ? "block" : "none";
			}
			
			$("#nextPageBtn").css("display", nextPageBtnDisplay);
			$("#previousPageBtn").css("display", previousPageBtnDisplay);
		}

		if (animationFunction == null) {
			goToPageFn();
		} else {
			animationFunction(goToPageFn);
		}
	},

	goToNextPage: function() {
		var destPageNumber = app.currentPageNumber + 1;
		app.goToPage(destPageNumber);
	},

	goToPreviousPage: function() {
		var destPageNumber = app.currentPageNumber - 1;
		app.goToPage(destPageNumber);
	},

	goToPageAtRight : function() {
		var destPage = app.currentPageNumber;

		if (app.isFacingPages) {
			if (app.isRightToLeft) {
				destPage = (app.currentPageNumber % 2 != 0 ? app.currentPageNumber - 2 : app.currentPageNumber - 1);
			} else {
				destPage = (app.currentPageNumber % 2 == 0 ? app.currentPageNumber + 2 : app.currentPageNumber + 1);
			}
		} else {
			if (app.isRightToLeft) {
				destPage--;
			} else {
				destPage++;
			}
		}

		if (destPage < 1) destPage = 1;
		if (destPage > app.rendition.data.pages.length) destPage = app.rendition.data.pages.length;
		// var page = app.rendition.data.pages[destPage - 1];
		app.goToPage(destPage);
	},

	goToPageAtLeft : function() {
		var destPage = app.currentPageNumber;

		if (app.isFacingPages) {
			if (app.isRightToLeft) {
				destPage = (app.currentPageNumber % 2 == 0 ? app.currentPageNumber + 2 : app.currentPageNumber + 1);
			} else {
				destPage = (app.currentPageNumber % 2 != 0 ? app.currentPageNumber - 2 : app.currentPageNumber - 1);
			}
		} else {
			if (app.isRightToLeft) {
				destPage++;
			} else {
				destPage--;
			}
		}

		if (destPage < 1) destPage = 1;
		if (destPage > app.rendition.data.pages.length) destPage = app.rendition.data.pages.length;
		// var page = app.rendition.data.pages[destPage - 1];
		app.goToPage(destPage);
	},

	goToNextSpread: function() {
		if (!app.isRightToLeft) {
			app.goToPageAtRight();
		} else {
			app.goToPageAtLeft();
		}
	},

	goToPreviousSpread: function() {
		if (!app.isRightToLeft) {
			app.goToPageAtLeft();
		} else {
			app.goToPageAtRight();
		}
	},

	getVisiblePages: function() {
		var useDoublePage = app.isFacingPages;
		var isRightToLeft = app.isRightToLeft;

		var visiblePages = [];
		var leftPages = [];
		var rightPages = [];
		var lvb = (app.currentPageNumber % 2 == 0 ? app.currentPageNumber : app.currentPageNumber - 1);

		if (isRightToLeft) {
			if (useDoublePage) {
				rightPages.push(lvb - 2);
				rightPages.push(lvb - 1);
				visiblePages.push(lvb);
				visiblePages.push(lvb + 1);
				leftPages.push(lvb + 2);
				leftPages.push(lvb + 3);
			} else {
				rightPages.push(app.currentPageNumber - 1);
				visiblePages.push(app.currentPageNumber);
				leftPages.push(app.currentPageNumber + 1);
			}
		} else {
			if (useDoublePage) {
				leftPages.push(lvb - 2);
				leftPages.push(lvb - 1);
				visiblePages.push(lvb);
				visiblePages.push(lvb + 1);
				rightPages.push(lvb + 2);
				rightPages.push(lvb + 3);
			} else {
				leftPages.push(app.currentPageNumber - 1);
				visiblePages.push(app.currentPageNumber);
				rightPages.push(app.currentPageNumber + 1);
			}
		}
		visiblePages = _(visiblePages).reject(function(x) { return x < 1 || x > app.rendition.data.pages.length; });
		leftPages = _(leftPages).reject(function(x) { return x < 1 || x > app.rendition.data.pages.length; });
		rightPages = _(rightPages).reject(function(x) { return x < 1 || x > app.rendition.data.pages.length; });

		return {
			visiblePages: visiblePages,
			leftPages: leftPages,
			rightPages: rightPages
		}
	},

	initSearch: function () {
		// eventually load Payload/rendition/META-INF/index.json into rendition object
		if (app.rendition.insertedText != null) return;
		var indexJsonUrl = app.rendition.baseUrl + "META-INF/index.json";
		$.ajax({
			type: "GET",
			url: indexJsonUrl,
			dataType: "json",
			success: function(json) {
				// console.warn(json);
				app.rendition.indexedText = json;
			},
			error: function() {
				console.error("error loading " + indexJsonUrl);
				app.rendition.indexedText = {};
			}
		});
	},

	searchInProject: function () {
		var pattern = $("#searchField")[0].value;
		app.currentSearchPattern = pattern;
		// console.warn("search", pattern);
		// var foundInPages = [];
		$(".searchResultsContainer").html("");

		if (pattern.length > 0) {
			var rendition = app.rendition;
			_(rendition.indexedText).each((txt, index) => {
				var r = new RegExp(pattern, "i");
				var found = r.test(txt);

				if (found) {
					// foundInPages.push(index);
					var page = rendition.data.pages[index-1];
					var el = "<a href=\"#\" class=\"searchResultPageThumbnail\" data-xr-page-number=\"" + page.number + "\"><img class=\"b-lazy\" src=\"" + rendition.contentsUrl + "images/default-thumbnail.png\" data-src=\"" + rendition.contentsUrl + page.thumbnailImageUrl + "\" alt=\"Page " + page.number + "\">" + page.number + "</a>";
					$(".searchResultsContainer").append(el);
				}
			});
			// console.warn(foundInPages);

			$(".searchResultPageThumbnail").click(function (e) {
				e.preventDefault();
				app.goToPage(parseInt($(this).attr("data-xr-page-number")));
			});

			setTimeout(function () {
				var bLazy = new Blazy({
					container: '.searchResultsContainer'
				});
			}, 100);
		} else {
			app.searchInPage();
		}
	},

	searchInPage: function() {
		if (app.currentSearchPattern.length > 0) {
			xreader.executeJavascript("*", function ($, window, document) { try { window.XPUB.find(app.currentSearchPattern); } catch (err) {} });
		} else {
			xreader.executeJavascript("*", function ($, window, document) { try { window.XPUB.clearSearchResults(); } catch (err) {} });
		}
	},

	clearSearch: function() {
		$("#searchField")[0].value = "";
		app.currentSearchPattern = "";
		app.searchInProject();
	}


};



function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


function isMobile() {
	var check = false;
	(function(a){
	  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
		check = true;
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}


var getCookie = function (cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
}


var jsBridge = {
	invokeAction : function(data) {
		if (app == null || app.windowLoaded !== true) {
			console.warn("jsBridge: received action before windowLoad, waiting...");
			setTimeout(function() {
				jsBridge.invokeAction(data);
			}, 100);
			return;
		}

		// console.log(data);
		var methodCall = JSON.parse(data);
		if (isFunction(app.xreaderCalls[methodCall.method])) {
			app.xreaderCalls[methodCall.method](methodCall.params, methodCall.callbackFn, methodCall.errorFn);
		} else {
			console.error("unknown json-rpc call: " + data);
		}
	}
};

window.onload = function() {
	app.windowLoaded = true;
}