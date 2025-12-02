/**
 * XReader.Core
 * @author Angelo Scicolone <angelo.scicolone@pubcoder.com>
 * @copyright Copyright 2024 PubCoder srl. All rights reserved.
 */

 
/**
* The global XReader object, which manages the javascript core of XReader
* @global
*/
var xreader = window.PubViewer || {
	accWheelX: 0,
	accWheelY: 0,

	wheelTime: Date.now(),
	/**
	 * Whether XReader was already intialized
	 * @type {boolean}
	 * @memberof xreader
	 */
	inited: false,

	/**
	 * Latest id used to send messages to the native app via jsBridge
	 * @type {number}
	 * @memberof xreader
	 */
	sentMsgID : 0,
	pageInstanceID : 1,

	/**
	 * Messages sent to the native app via jsBridge awaiting a response via callback are stored here
	 * @type {number}
	 * @memberof xreader
	 */
	messagesAwaitingResponse : [],

	/**
	 * Set by onTouchStart as a time reference of when the user finger was initially placed on the screen
	 * @type {number}
	 * @memberof xreader
	 */
	touchStartTime : Date.now(),

	/**
	 * Set by onTouchStart to true if it was not handled by content
	 * @type {number}
	 * @memberof xreader
	 */
	touchActionDefaultPrevented : false,

	/**
	 * Set by onTouchStart to the X coordinate of the touchstart event
	 * @type {number}
	 * @memberof xreader
	 */
	touchStartX : 0,

	/**
	 * Set by onTouchStart to the Y coordinate of the touchstart event
	 * @type {number}
	 * @memberof xreader
	 */
	touchStartY : 0,

	/**
	 * Incremented by onTouchMove, every time it is called
	 * @type {number}
	 * @memberof xreader
	 */
	touchMoves : 0,
	
	/**
	 * True if the user is currently dragging/swiping pages, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	draggingPage : false,

	/**
	 * True if the user just finished dragging/swiping pages, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	wasDraggingPage : false,

	/**
	 * True if the user page dragging/swiping is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	canDragPage : false,

	/**
	 * True if the user page dragging/swiping to left is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	canDragPageLeft: false,

	/**
	 * True if the user page dragging/swiping to right is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	canDragPageRight: false,

	/**
	 * Current drag delta applied to pages UI as a translation, derived from the user horizontal finger swipe
	 * @type {number}
	 * @memberof xreader
	 */
	currentDragX : 0,

	/**
	 * Set by handleReaderTouchAction as a time reference of when the last touchend/mouseup event handled by the reader happened
	 * @type {number}
	 * @memberof xreader
	 */
	lastReaderTouchEndTime : 0,

	/**
	 * Set by handleReaderTouchAction as a time reference of when the last click event handled by the reader happened
	 * @type {number}
	 * @memberof xreader
	 */
	lastReaderTapTime : 0,

	/**
	 * Width of the entire reader window/container
	 * @type {number}
	 * @memberof xreader
	 */
	containerWidth : 0,

	/**
	 * Height of the entire reader window/container
	 * @type {number}
	 * @memberof xreader
	 */
	containerHeight : 0,

	/**
	 * True if currently displaying double pages / facing pages, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	isDoublePage : true,

	/**
	 * xreader.Android native app sets the reader zoom level here
	 * @type {number}
	 * @memberof xreader
	 */
	zoom : 1,

	/**
	 * The width of a page in the current rendition
	 * @type {number}
	 * @memberof xreader
	 */
	pageW : 0,

	/**
	 * The height of a page in the current rendition
	 * @type {number}
	 * @memberof xreader
	 */
	pageH : 0,

	/**
	 * The zoom ratio currently applied to each page to fit the reader screen
	 * @type {number}
	 * @memberof xreader
	 */
	pageZoom: 0,

	/**
	 * True if a page-turn animation is currently running, false otherwise
	 * @type {boolean}
	 * @memberof xreader
	 */
	isTurningPages: false,

	/**
	 * An orientation value that overrides the main window orientation, or null to use window.orientation
	 * xreader.Android sets this nativaley, since in Android 4.4 window.orientation does not change automatically when turning the device upside down
	 * @type {number}
	 * @memberof xreader
	 */
	overriddenOrientation: null,


	/**
	 * An object containing document settings
	 * @type {Object}
	 * @memberof xreader
	 */
	Document : {
		Settings: {
			appName: "PubCoder Project",
			appIdentifier: "",
			facingPagesInLandscape: true,
			lockOrientation:false,
			restoreLatestPage:true
		},
		Renditions : {
			Mobile : [],
			Desktop : []
		},
	},


	/**
	 * An object containing media overlay settings
	 * @type {Object}
	 * @memberof xreader
	 */
	MediaOverlay: {
		/**
		 * True if media overlays are enabled, false otherwise
		 * @memberof xreader.MediaOverlay
		 * @type {boolean}
		 */
		IsPlaying: false,

		/**
		 * True if media overlays are enabled and playing audio, false otherwise
		 * @memberof xreader.MediaOverlay
		 * @type {boolean}
		 */
		IsPlayingAudio: false,

		/**
		 * The Id of the DOM element to be currently highlighted
		 * @memberof xreader.MediaOverlay
		 * @type {string}
		 */
		CurrentElement : null,

		/**
		 * The CSS class to be applied to the highlighted element
		 * @memberof xreader.MediaOverlay
		 * @type {string}
		 */
		ActiveElementClass : "-epub-media-overlay-active", // for compatibility
	},


	/**
	 * An object containing definitions of supported platforms
	 * @type {Object}
	 * @memberof xreader
	 */
	Platform : {
		Web : "Web", // XReader.JS
		iOS : "iOS", // XReader.Hybrid on iOS
		Android : "Android", // XReader.Hybrid on Android
		Mac : "Mac", // XReader.Hybrid on macOS
		Windows : "Windows", // XReader.Hybrid on Windows
		Unknown : "Unknown"
	},

	/**
	 * An object containing definitions of supported idioms
	 * @type {Object}
	 * @memberof xreader
	 */
	Idiom : {
		Phone : "Phone", // XReader.Hybrid on Phone
		Tablet : "Tablet", // XReader.Hybrid on Phone
		Desktop : "Desktop", // XReader.Hybrid on Phone
		Unknown : "Unknown" // XReader.JS?
	},


	/**
	 * An object containing environment information set by XReader.Hybrid or XReader.JS.
	 * Values of this object are set by the native app
	 * @type {Object}
	 * @memberof xreader
	 */
	Environment : {
		Platform : "Unknown",
		Idiom : "Unknown",
		AppName : "Unknown",
		AppVersion : "0.0",
		CurrentUsername : null,
		CurrentDeviceId : null,
		ProductId : null
	},

	Hooks: {
		_beforeNavigationHooks: [], // called when xreader is about to navigate to a different spread of pages (xreader.load)
		_beforePageLoadHooks: [], // called when xreader is about to dispatch event SCEventPageLoad on a page window
		_beforePagePlayHooks: [], // called when xreader is about to dispatch event SCEventPagePlay on a page window
		set BeforeNavigation(hook) {
			this._beforeNavigationHooks.push(hook);
		},
		set BeforePageLoad(hook) {
			this._beforePageLoadHooks.push(hook);
		},
		set BeforePagePlay(hook) {
			this._beforePagePlayHooks.push(hook);
		}
	},

	/**
	 * An object containing various reader settings coming from the native app
	 * @type {Object}
	 * @memberof xreader
	 */
	ReaderSettings : {
		EnableDoublePage : false,
		EnableRightToLeft : false,
		EnableSwipeToNavigate: true,
		EnablePinchToZoom: true,
		EnableTouchToOpenAppMenu: true,
		EnableTapToSeekReadaloud: true,
		ViewportFitCover: true
	},


	/**
	 * An alternative to localStorage
	 * @type {Object}
	 * @memberof xreader
	 */
	NativeStorage: {
		data: {},
		setItem: function(key, value) {
			if (typeof(key) !== "string" || typeof(value) !== "string") return;
			xreader.NativeStorage.data[key] = value;
		},
		getItem: function(key) {
			if (typeof(key) !== "string") return null;
			return xreader.NativeStorage.data[key];
		}
	},


	/**
	 * Returns true if reader is currently zoomed, false otherwise
	 * @type {Object}
	 * @memberof xreader
	 * @returns {boolean} true if reader is currently zoomed, false otherwise
	 */
	getWindowZoomedByUser : function() {
		if (xreader.Environment.Platform == xreader.Platform.Android) {
			return (xreader.zoom > 1); // sometimes zoom out can actually bring the value to 0.9999, not 1
		} else if (typeof(window.visualViewport) !== "undefined" && typeof(window.visualViewport.scale) === "number") {
			return (window.visualViewport.scale > 1);
		} else {
			return (document.documentElement.clientWidth - window.innerWidth > 0.001);
		}
	},


	/**
	 * Inits XReader.Core, e.g. binding all necessary events.
	 * When initialization is completed, notifies the application level so it can start loading content page(s)
	 * @memberof xreader
	 */
	init: function () {
		if (document.body == null) {
			// document is not yet ready. retry in a few moments
			setTimeout(function () { xreader.init(); }, 50);
			return;
		}

		if (xreader.inited) {
			return;
		} else {
			// console.log("initing");
			xreader.inited = true;
		}

		$("body").bind('touchstart mousedown', function(ev, iframeEvent){
			xreader.onTouchStart(ev, iframeEvent);
		});

		$("body").bind('touchmove', function(ev, iframeEvent){
			xreader.onTouchMove(ev, iframeEvent);
		});

		$("body").bind('touchend mouseup', function(ev, iframeEvent){
			xreader.onTouchEnd(ev, iframeEvent);
		});

		$("#container").bind('click', function(ev, iframeEvent){
			xreader.onTap(ev, iframeEvent);
		});

		$("#overlay").bind('touchstart mousedown', function(ev, iframeEvent){
			xreader.onTouchStart(ev, iframeEvent);
		});

		$("#overlay").bind('touchmove', function(ev, iframeEvent){
			xreader.onTouchMove(ev, iframeEvent);
		});

		$("#overlay").bind('touchend mouseup', function(e){
			xreader.onTouchEnd(e);
		});

		$("#overlay").bind('click', function(ev, iframeEvent){
			xreader.onTap(ev, iframeEvent);
		});

		$(window).bind('keydown', function(ev, iframeEvent){
			xreader.onKeyDown(ev, iframeEvent);
		});

		// xreader.adjustInterface();

		xreader.callAppMethod("Inited", [window.innerWidth, window.innerHeight]);

		$(window).resize(function() {
			xreader._lastKnownWindowInnerWidth = window.innerWidth;
			xreader._lastKnownWindowInnerHeight = window.innerHeight;
			xreader.onWindowResize();
		});
		if (xreader.Environment.Platform == xreader.Platform.Web || xreader.Environment.Idiom == xreader.Idiom.Desktop) {
			// resize events are not fired while page (or its iframes) are loading, so this
			// is a workaround to avoid UI to screw up - e.g. changing device orientation 
			// while content pages are loading
			window.setInterval(function () {
				if (xreader._lastKnownWindowInnerWidth != window.innerWidth ||
					xreader._lastKnownWindowInnerHeight != window.innerHeight) {
						xreader._lastKnownWindowInnerWidth = window.innerWidth;
						xreader._lastKnownWindowInnerHeight = window.innerHeight;
						if (xreader.Environment.Platform == xreader.Platform.Web) {
							if (document.activeElement.tagName === "textarea" || document.getElementById("ReaderPageOne").contentWindow.document.activeElement.tagName == "textarea" || document.getElementById("ReaderPageTwo").contentWindow.document.activeElement.tagName == "textarea") {
								console.log("ignoring window resize while textarea is focused");
								return;
							}
						}
						xreader.onWindowResize();
					}
			}, 250);
		}

		$(window).on("wheel", function(ev, iframeEvent) {
			xreader.onWheel(ev, iframeEvent);
		});

		window.addEventListener("message", function (event) {
			// forward messages to page iframes
			try {
				var message = event.data;
				document.getElementById('ReaderPageOne').contentWindow.postMessage(message, "*");
				document.getElementById('ReaderPageTwo').contentWindow.postMessage(message, "*");
			} catch (error) {
				console.error(error);
			}
		});
	},


	/**
	 * Handles window resizing event, eventually notifying the native side that orientation has changed
	 * @memberof xreader
	 */
	onWindowResize: function() {
		if (xreader.Environment.Platform == xreader.Platform.Web || xreader.Environment.Idiom == xreader.Idiom.Desktop) {
			var width = window.innerWidth;
			var height = window.innerHeight;
			if (xreader.getWindowZoomedByUser()) {
				width = document.documentElement.clientWidth;
				height = document.documentElement.clientHeight;
			}
			xreader.callAppMethod("WindowResize", [width, height]);
			return;
		}
		
		if ((window.innerWidth > window.innerHeight && xreader.containerWidth > xreader.containerHeight) ||
			(window.innerWidth < window.innerHeight && xreader.containerWidth < xreader.containerHeight)) {
			// orientation didn't change zooming on Android 4.4, window size changes temporarily
			return;
		} else if (window.innerWidth == window.innerHeight) {
			console.log("skipped onWindowResize at " + window.innerWidth + " x " + window.innerHeight);
			// probably device was rotated and innerHeight was not yet updated, retry in a few moments
			setTimeout(xreader.onWindowResize, 10);
			return;
		}
		xreader.callAppMethod("WindowResize", [window.innerWidth, window.innerHeight]);
	},


	setOverriddenOrientation: function(orientation) {
		xreader.overriddenOrientation = orientation;
	},


	/**
	 * Handles touch/tap reader action.
	 * Evantually tells the app side to show/hide menu
	 * @memberof xreader
	 * @param {Event} e original The tap/touchend/mouseup event
	 */
	handleReaderTouchAction : function(e) {
		if (e == null) return
		if (e.originalEvent != null) {
			// console.log(e.type, e.defaultPrevented);
			e = e.originalEvent;
		}
		if (e.defaultPrevented) return;
		
		if (e.type == "touchend" || e.type == "mouseup") {
			xreader.lastReaderTouchEndTime = Date.now();
		} else if (e.type == "click") {
			xreader.lastReaderTapTime = Date.now();
		} else {
			return;
		}
		if (Math.abs(xreader.lastReaderTouchEndTime - xreader.lastReaderTapTime) < 250) {
			// console.trace("ToggleMenu");
			xreader.callAppMethod("ToggleMenu");
		}
	},


	/**
	 * Handles tap event coming from page content iframe or reader UI.
	 * @memberof xreader
	 * @param {Event} ev The tap event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTap: function(ev, iframeEvent) {
		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log("reader tap", e);

		// eventually deny tap to show menu if click was default-prevented or originated from specific controls
		var eventComesFromRealClick = (e.isTrusted == true || e.x != 0 || e.y != 0); // both isTrusted and screenX/Y are not set correctly on Android 4.4
		var neverShowMenuObjects = [ "textarea", "input", "button", "select", "label" ];
		if (e.defaultPrevented || !eventComesFromRealClick || xreader.wasDraggingPage || (e.target != null && neverShowMenuObjects.indexOf(e.target.localName) >= 0)) {
			// console.log("canceled click");
			xreader.wasDraggingPage = false;
			xreader.touchActionDefaultPrevented = true;
			// e.stopPropagation();
			return false;
		}
		// console.log(e.target);

		// eventually deny tap to show menu on video or audio with controls
		neverSwipeObjects = [ "video", "audio" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			// console.log("canceled click");
			xreader.wasDraggingPage = false;
			xreader.touchActionDefaultPrevented = true;
			// e.stopPropagation();
			return false;
		}

		// tell native app to toggle menu
		xreader.handleReaderTouchAction(e);
	},


	/**
	 * Handles keydown event coming from page content iframe or reader UI.
	 * Evantually tells native side to switch page if left/right arrow key was pressed
	 * @memberof xreader
	 * @param {Event} ev The keydown event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onKeyDown: function (ev, iframeEvent) {
		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);

		// eventually deny page swipe
		var neverShowMenuObjects = [ "textarea", "input" ];
		if (e.defaultPrevented || xreader.isTurningPages || (e.target != null && neverShowMenuObjects.indexOf(e.target.localName) >= 0)) {
			// console.log("canceled arrow key page change");
			return false;
		}
		
		if (xreader.ReaderSettings.EnableSwipeToNavigate || xreader.ReaderSettings.EnableNavigationArrows) {
			if (e.keyCode == 39) { // arrow right
				xreader.callAppMethod("GoToPageAtRight", []);
			} else if (e.keyCode == 37) { // arrow left
				xreader.callAppMethod("GoToPageAtLeft", []);
			}
		}
	},

	
	/**
	 * Handles touchstart event coming from page content iframe or reader UI.
	 * This includes allowing or denying page swipe, that will later be handled by onTouchMove
	 * @memberof xreader
	 * @param {Event} ev The touchstart event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchStart: function(ev, iframeEvent) {
		// console.log("body.touchstart");
		xreader.touchStartTime = Date.now();
		xreader.touchActionDefaultPrevented = true; // will be set to false at the end of the function if every other check fails

		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);

		// ignore touch if default is prevented of reader is already handling page-turning
		if (e.defaultPrevented || xreader.isTurningPages) {
			// e.stopPropagation();
			return false;
		}
		
		// eventually ignore touches started on focused text controls, to allow cursor dragging instead
		var neverSwipeObjects = [ "textarea", "input" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && $(e.target).is(":focus")) {
			return false;
		}

		// eventually ignore touches started on audio controls, to allow timeline cursor dragging instead
		neverSwipeObjects = [ "audio" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			return false;
		}

		// eventually ignore touches started on video with controls, to allow timeline cursor dragging instead
		neverSwipeObjects = [ "video" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			return false;
			// the following ignored touches only if started on lower end of video, to allow page drag when not touching
			// controls, but does not work on iOS when page is zoomed
			// var limitY = e.target.offsetTop + e.target.offsetHeight - 60;
			// console.log("touchY: " + e.changedTouches[0].screenY);
			// console.log("limitY: " + limitY);
			// if (e.changedTouches[0].screenY > limitY) return false;
		}

		// eventually ignore touches started on horizontally-scrollable elements
		if (e.target != null) {
			var el = e.target;
			while (el != null && !el.classList.contains("SCContent") && !el.classList.contains("SCOverlay") &&
							!el.classList.contains("SCPage") && el.nodeName != "body") {
				// console.log(el);
				var cs = window.getComputedStyle(el);
				if (cs["overflow-x"] == "scroll") {
					xreader.canDragPage = false;
					return false;
				}
				el = el.parentElement;
			}
		}

		// eventually start page dragging
		if (xreader.ReaderSettings.EnableSwipeToNavigate && e.type == "touchstart" && e.touches.length == 1 && !xreader.getWindowZoomedByUser()) {
			xreader.cancelPageSwitch(false);
			xreader.wasDraggingPage = false;
			xreader.draggingPage = false;
			xreader.canDragPage = true;
			xreader.touchMoves = 0;
			xreader.touchStartX = e.changedTouches[0].screenX;
			xreader.touchStartY = e.changedTouches[0].screenY;
			xreader.currentDragX = 0;
			// console.log("TouchStart: " + xreader.touchStartX + ", " + xreader.touchStartY);
			// xreader.callAppMethod("TouchStart", [xreader.touchStartX, xreader.touchStartY]);
			// e.preventDefault(); // preventing default here will make pinch to zoom not work
			// console.log("qui2");
		}
		
		// touch start was handled by reader
		xreader.touchActionDefaultPrevented = false;
	},


	/**
	 * Handles touchmove events coming from page content iframe or reader UI.
	 * This includes code for actually swiping between pages, if previously allowed by onTouchStart
	 * @memberof xreader
	 * @param {Event} ev The touchmove event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchMove: function(ev, iframeEvent){
		// console.log(iframeEvent);
		// console.log("body.touchmove");
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);
		// console.log(ev);
		if (e.defaultPrevented) {
			// console.log("touchMove defaultPrevented");
			// xreader.canDragPage = false;
			// e.stopPropagation();
			return false;
		}
		// console.log(e.type, e.view, e.view.getSelection().toString());
		if (e.type == "touchmove" && e.view.getSelection().toString().length > 0) {
			// don't drag page to allow drag-to-select-text
			console.log("touchMove canceled to allow drag-to-select-text");
			return false;
		}
		if (e.touches.length == 1 && xreader.canDragPage) {
			xreader.touchMoves++;
			var multiplier = (xreader.Environment.Platform == xreader.Platform.Android ? (xreader.containerHeight / screen.height) : 1.0);
			var dx = (e.changedTouches[0].screenX - xreader.touchStartX) * multiplier;
			var dy = (e.changedTouches[0].screenY - xreader.touchStartY) * multiplier;
			// console.log("TouchMove: " + e.changedTouches[0].screenX + " - " + xreader.touchStartX + " = " + dx);
			if (xreader.touchMoves > 1) {
				// xreader.callAppMethod("TouchMove", [dx, dy]);
			}
			if (!xreader.draggingPage) {
				// if drag has already started, go on with the drag, otherwise, check before allowing the drag
				if (Math.abs(dx) <= Math.abs(dy)) return;
				if (Math.abs(dx) < 10) return;
				// if ((dx > 0 && !xreader.canDragPageRight) || (dx < 0 && !xreader.canDragPageLeft)) return; // drag is allowed here but canceled later on
				if (xreader.getWindowZoomedByUser()) return;
			}
			
			if (!(e.ownerDocument == document && e.target.id == "overlay")) e.preventDefault(); // preventing default will make vertical scrolling not work / not preventing it will make event fire only once on Android 4.4
			xreader.draggingPage = true;

			// try to load the loading images before they are actually used, to avoid flickering
			// if (xreader.Environment.Platform != xreader.Platform.Android) {
			var prepareWrapperOne = ($("#ReaderPageOne").css("opacity") == "1" && $("#ReaderPageOne").css("display") == "block"); // otherwise previous page is still loading and wrapper background is visible!!
			var prepareWrapperTwo = ($("#ReaderPageTwo").css("opacity") == "1" && $("#ReaderPageTwo").css("display") == "block"); // otherwise previous page is still loading and wrapper background is visible!!
			if (xreader.currentDragX <= 0 && dx > 0) {
				if (prepareWrapperOne) document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage;
				if (prepareWrapperTwo) document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage;
			} else if (xreader.currentDragX >= 0 && dx < 0) {
				if (prepareWrapperOne) document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailOne').style.backgroundImage;
				if (prepareWrapperTwo) document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage;
			}
			// }

			// var pageOneContainer = document.getElementById('ReaderPageOne');
			// var pageTwoContainer = document.getElementById('ReaderPageTwo');
			// $(pageOneContainer).hide();
			// $(pageTwoContainer).hide();

			xreader.currentDragX = dx;
			document.getElementById('container').style.webkitTransform = "translate3d(" + dx + "px, 0, 0)";
		
		}

	},


	/**
	 * Handles touchend events coming from page content iframe or reader UI.
	 * This includes code for actually deciding if we have to switch page after a page swipe handled by onTouchMove
	 * @memberof xreader
	 * @param {Event} ev The touchend event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchEnd: function(ev, iframeEvent){
		xreader.canDragPage = false;

		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}

		if (e.defaultPrevented) {
			xreader.touchActionDefaultPrevented = true;
			return true;
		}
		var ms = Date.now() - xreader.touchStartTime;
		var speed = (Math.abs(xreader.currentDragX)/xreader.containerWidth) / (ms/1000)
		// console.log("TouchEnd (" + ms + "ms, " + xreader.currentDragX + ", " + speed + " screens/second)", e);
		
		// eventually handle page drag end
		if (xreader.draggingPage) {
			var currentPageDx = 0;
			if (ms < 500 && speed > 0.8) {
				// quick swipe
				currentPageDx = -xreader.currentDragX / Math.abs(xreader.currentDragX);
			} else if (xreader.currentDragX > xreader.containerWidth / 2) {
				currentPageDx = -1;
			} else if (xreader.currentDragX < -xreader.containerWidth / 2) {
				currentPageDx = 1;
			}
			if (currentPageDx > 0 && xreader.canDragPageLeft) {
				xreader.turnPagesRightAnimated();
			} else if (currentPageDx < 0 && xreader.canDragPageRight) {
				xreader.turnPagesLeftAnimated();
			} else {
				xreader.cancelPageSwitch(true);
				$("#overlay").hide();
			}
			e.preventDefault();
			// e.stopPropagation();
			xreader.draggingPage = false;
			xreader.wasDraggingPage = true;
			setTimeout(function() {
				xreader.wasDraggingPage = false;
			}, 500);
			return;
		}

		// eventually handle tap-to-show-menu, handling this mouseup as a click on the container
		// (the click may still be ignored, e.g. if a default-prevented click happened almost at the same time)
		if (!xreader.touchActionDefaultPrevented && Date.now() - xreader.touchStartTime < 250) {
			xreader.handleReaderTouchAction(e);
		}
	},

	/**
	 * Handles wheel events coming from page content iframe or reader UI.
	 * This includes code for actually deciding if we have to switch page when scrolling horizontally
	 * @memberof xreader
	 * @param {Event} ev The wheel event, eventually re-triggered from the outer xreader object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onWheel: function (ev, iframeEvent) {
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}

		if (xreader.getWindowZoomedByUser()) return;	
		if (!xreader.ReaderSettings.EnableSwipeToNavigate) return;
		var ms = Date.now() - xreader.wheelTime;
		// console.warn("wheeling!", e.deltaX, xreader.accWheelX, xreader.accWheelY, ms);
		xreader.wheelTime = Math.max(Date.now(), xreader.wheelTime);
		if (ms < 0 || ms > 300 || Math.abs(e.deltaX) < 20 || xreader.isTurningPages) { // ignore slow or inertial scrolling
			xreader.accWheelX = 0;
			xreader.accWheelY = 0;
			return;
		}
		xreader.accWheelX += e.deltaX;
		xreader.accWheelY += e.deltaY;
		if (Math.abs(xreader.accWheelX) > 500 && Math.abs(xreader.accWheelY) < 100) {
			var x = xreader.accWheelX;
			xreader.accWheelX = 0;
			xreader.accWheelY = 0;
			xreader.wheelTime = Date.now() + 800; // don't swipe page for some time to prevent scrolling multiple pages after a strong inertial scroll
			if (x > 0) {
				xreader.callAppMethod("GoToPageAtRight", []);
			} else {
				xreader.callAppMethod("GoToPageAtLeft", []);
			}
		}
	},


	/**
	 * Resizes reader UI to fit page(s) on the screen size, basing on the current screen size or
	 * on a custom size given as passed with the function parameters
	 * @memberof xreader
	 * @param {number} customWidth The custom width to resize the UI to, or null to use the actual window width
	 * @param {number} customHeight The custom height to resize the UI to, or null to use the actual window height
	 */
	adjustInterface: function(customWidth, customHeight) {
		if (customWidth != null && customHeight != null) {
			// console.log("adjustInterface manually at " + customWidth + " x " + customHeight);
			xreader.containerWidth = customWidth;
			xreader.containerHeight = customHeight;

		} else {
			if (window.innerWidth == window.innerHeight) {
				// console.log("skipped adjustInterface at " + window.innerWidth + " x " + window.innerHeight);
				// probably device was rotated and innerHeight was not yet updated, retry in a few moments
				setTimeout(xreader.adjustInterface, 100);
				return;
			}
			if (xreader.getWindowZoomedByUser()) {
				xreader.containerWidth = document.documentElement.clientWidth;
				xreader.containerHeight = document.documentElement.clientHeight;
			} else {
				xreader.containerWidth = window.innerWidth;
				xreader.containerHeight = window.innerHeight;
			}
		}

		// $("body").css("width", xreader.containerWidth + "px");
		// $("body").css("height", xreader.containerHeight + "px");
		$("#spread").css("width", xreader.containerWidth + "px");
		$("#spread").css("height", xreader.containerHeight + "px");
		$("#container").css("width", xreader.containerWidth + "px");
		$("#container").css("height", xreader.containerHeight + "px");
		$("#overlay").css("width", xreader.containerWidth + "px");
		$("#overlay").css("height", xreader.containerHeight + "px");

		var pageOneColumn = document.getElementById('ReaderPageOneColumn');
		var pageTwoColumn = document.getElementById('ReaderPageTwoColumn');
		var leftThumbnailOne = document.getElementById('ReaderLeftThumbnailOne');
		var leftThumbnailTwo = document.getElementById('ReaderLeftThumbnailTwo');
		var leftThumbnailOneColumn = document.getElementById('ReaderLeftThumbnailOneColumn');
		var leftThumbnailTwoColumn = document.getElementById('ReaderLeftThumbnailTwoColumn');
		var rightThumbnailOne = document.getElementById('ReaderRightThumbnailOne');
		var rightThumbnailTwo = document.getElementById('ReaderRightThumbnailTwo');
		var rightThumbnailOneColumn = document.getElementById('ReaderRightThumbnailOneColumn');
		var rightThumbnailTwoColumn = document.getElementById('ReaderRightThumbnailTwoColumn');
		var pageOneWrapper = document.getElementById('ReaderPageOneWrapper');
		var pageOne = document.getElementById('ReaderPageOne');
		var pageTwoWrapper = document.getElementById('ReaderPageTwoWrapper');
		var pageTwo = document.getElementById('ReaderPageTwo');
		
		var doublePageItemsVisibility = "hidden";
		var doublePageItemsDisplay = "none";
		if (xreader.isDoublePage) {
			pageOneColumn.style.width = "50%";
			leftThumbnailOneColumn.style.width = "50%";
			rightThumbnailOneColumn.style.width = "50%";
			doublePageItemsVisibility = "visible";
			doublePageItemsDisplay = "block";
		} else {
			pageOneColumn.style.width = "100%";
			leftThumbnailOneColumn.style.width = "100%";
			rightThumbnailOneColumn.style.width = "100%";
		}
		pageTwoColumn.style.visibility = doublePageItemsVisibility;
		pageTwoColumn.style.display = doublePageItemsDisplay;
		leftThumbnailTwoColumn.style.visibility = doublePageItemsVisibility;
		leftThumbnailTwoColumn.style.display = doublePageItemsDisplay;
		rightThumbnailTwoColumn.style.visibility = doublePageItemsVisibility;
		rightThumbnailTwoColumn.style.display = doublePageItemsDisplay;

		var cw = Math.round(xreader.containerWidth / (xreader.isDoublePage ? 2 : 1));
		var ch = xreader.containerHeight;

		if (xreader.pageH/xreader.pageW < ch/cw) {
			xreader.pageZoom = cw/xreader.pageW;
		} else {
			xreader.pageZoom = ch/xreader.pageH;
		}

		var wrapperWidth = xreader.pageW * xreader.pageZoom;
		var wrapperHeight = xreader.pageH * xreader.pageZoom;
		$(".ReaderPageWrapper").css("width", wrapperWidth + "px");
		$(".ReaderPageWrapper").css("height", wrapperHeight + "px");
		$(".ReaderPageWrapper").css("top", Math.round((ch - wrapperHeight)/2) + "px");
		var wrappersOneX = Math.round((cw - wrapperWidth)/2) + "px";
		var wrappersTwoX = wrappersOneX;
		if (xreader.isDoublePage) {
			wrappersOneX = (cw - wrapperWidth) + "px";
			wrappersTwoX = "0px";
		}
		pageOneWrapper.style.left = wrappersOneX
		pageTwoWrapper.style.left = wrappersTwoX
		leftThumbnailOne.style.left = wrappersOneX
		leftThumbnailTwo.style.left = wrappersTwoX
		rightThumbnailOne.style.left = wrappersOneX
		rightThumbnailTwo.style.left = wrappersTwoX


		$(".ReaderPage").css("width", xreader.pageW + "px");
		$(".ReaderPage").css("height", xreader.pageH + "px");
		$(".ReaderPage").css("webkit-transform", "scale(" + xreader.pageZoom + ")");
	},


	/**
	 * Starts to load one or two facing content pages in the reader iframes, and starts initialization loop that will
	 * wait for full page load before initializing it. While waiting it displays a thumbnail that will be later hidden when loading is completed, 
	 * and prepares thumbnails of adjacent pages for faster page swipe when the user will do it next.
	 * This is the order of thumbnails as displayed on the reader when using single page: thumbLeftOne, thumbOne, thumbRightOne.
	 * This is the order of thumbnails as displayed on the reader when using facing pages: thumbLeftTwo, thumbLeftOne, thumbOne, thumbTwo, thumbRightOne, thumbRightTwo.
	 * @memberof xreader
	 * @param {Object} readerSettings An object containing various settings and parameters passed by the native side (see xreader.ReaderSettings)
	 * @param {number} w width of the page, in pixels
	 * @param {number} h height of the page, in pixels
	 * @param {string} pageOne URL of the single page to be loaded, or URL of the page to be loaded in the left when loading two facing pages
	 * @param {string} pageTwo URL of the page to be loaded in the right when loading two facing pages, or empty if loading one page
	 * @param {string} thumbOne URL of the loading image thumbnail for the single page to be loaded, or for the left page when loading two facing pages
	 * @param {string} thumbTwo URL of the loading image thumbnail for the right page when loading two facing pages
	 * @param {string} thumbRightOne URL of the loading image thumbnail for the page at right of the current one (or of the current right page when loading facing pages)
	 * @param {string} thumbRightTwo URL of the loading image thumbnail for the page at right of thumbRightOne when loading facing pages, or empty if loading one page
	 * @param {string} thumbLeftOne URL of the loading image thumbnail for the page at left of the current one (or of the current left page when loading facing pages)
	 * @param {string} thumbLeftTwo URL of the loading image thumbnail for the page at left of thumbLeftOne when loading facing pages, or empty if loading one page
	 */
	load: function(readerSettings, w, h, pageOne, pageTwo, thumbOne, thumbTwo, thumbRightOne, thumbRightTwo, thumbLeftOne, thumbLeftTwo) {
		xreader.isTurningPages = false;
		xreader.isDoublePage = readerSettings.EnableDoublePage;
		xreader.pageW = w;
		xreader.pageH = h;
		xreader.ReaderSettings = readerSettings;

		xreader.Hooks._beforeNavigationHooks.forEach((hook, hookIndex) => {
			if (typeof(hook) === "function") {
				try {
					hook(pageOne,pageTwo);
				} catch (error) {
					console.error(error);
				}
			}
		});

		if (!xreader.draggingPage) $("#overlay").show();

		var metaViewportContent = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=6";
		if (!readerSettings.EnablePinchToZoom) metaViewportContent += ", user-scalable=no";
		if (readerSettings.ViewportFitCover) metaViewportContent += ", viewport-fit=cover";
		document.querySelector("meta[name=viewport]").setAttribute("content", metaViewportContent);

		if (xreader.Environment.Platform == xreader.Platform.iOS) {
			xreader.adjustInterface(readerSettings.WebViewWidth, readerSettings.WebViewHeight);
		} else {
			xreader.adjustInterface();
		}

		var pageOneWrapper = document.getElementById('ReaderPageOneWrapper');
		var pageOneContainer = document.getElementById('ReaderPageOne');
		
		var pageTwoWrapper = document.getElementById('ReaderPageTwoWrapper');
		var pageTwoContainer = document.getElementById('ReaderPageTwo');

		pageOneWrapper.style.backgroundImage = "url('" + thumbOne + "')";
		pageTwoWrapper.style.backgroundImage = "url('" + thumbTwo + "')";

		if (pageOne == null || pageOne == "") {
			$(pageOneContainer).hide();
			$(".SCLoader", pageOneWrapper).hide();
			pageOneContainer.contentWindow.location.replace("about:blank");
		} else {
			pageOneContainer.contentWindow.location.replace(pageOne);
			$(pageOneContainer).css("opacity", "0.001");
			$(pageOneContainer).show();
			setTimeout(function(){
				if ($(pageOneContainer).css("display") != "none" && $(pageOneContainer).css("opacity") != "1" &&
					pageOneContainer.contentWindow.location.href == pageOne) {
					$(".SCLoader", pageOneWrapper).show();
				}
			}, 2000);
		}
		if (pageTwo == null || pageTwo == "") {
			$(pageTwoContainer).hide();
			$(".SCLoader", pageTwoWrapper).hide();
			pageTwoContainer.contentWindow.location.replace("about:blank");
		} else {
			pageTwoContainer.contentWindow.location.replace(pageTwo);
			$(pageTwoContainer).css("opacity", "0.001");
			$(pageTwoContainer).show();
			setTimeout(function(){
				if ($(pageTwoContainer).css("display") != "none" && $(pageTwoContainer).css("opacity") != "1" &&
					pageTwoContainer.contentWindow.location.href == pageTwo) {
					$(".SCLoader", pageTwoWrapper).show();
				}
			}, 2000);
		}

		document.getElementById('container').style.webkitTransform = "translate3d(0px, 0, 0)";
		document.getElementById('container').style.transform = "";

		setTimeout(function () {
			document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage = "url('" + thumbLeftOne + "')";
			document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage = "url('" + thumbLeftTwo + "')";
			document.getElementById('ReaderRightThumbnailOne').style.backgroundImage = "url('" + thumbRightOne + "')";
			document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage = "url('" + thumbRightTwo + "')";
			xreader.initReaderPage(pageOneContainer, pageOne, xreader.pageInstanceID++);
		}, 25);
		setTimeout(function () {
			xreader.initReaderPage(pageTwoContainer, pageTwo, xreader.pageInstanceID++);
		}, 125);
	},


	/**
	 * Initializes a content page injecting required JavaScript to handle XReader events and functionalities, then
	 * starts to "play" the page. If the page is not fully loaded, retries the initialization in a few milliseconds
	 * @memberof xreader
	 * @param {Element} iframeElement The frame where the content page resides
	 * @param {string} src The source URL of the page to be initialized
	 * @param {number} pagePageInstanceId an incremental ID used to handle a unique page initialization flow, avoiding to initialize the page twice
	 */
	initReaderPage: function(iframeElement, src, pagePageInstanceId) {
		if (src == null || src.length == 0) return;
		if (iframeElement.contentWindow != null
			&& iframeElement.contentWindow.location != null
			&& iframeElement.contentWindow.location.href != null
			&& iframeElement.contentWindow.document != null
			&& iframeElement.contentWindow.document.body != null
			&& iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") != null
			&& iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") > pagePageInstanceId) {
			// give up, another, newer page was already loaded
			return;
		}
		if (iframeElement.contentWindow == null
			|| iframeElement.contentWindow.location == null
			|| iframeElement.contentWindow.location.href == null
			|| iframeElement.contentWindow.location.href != src
			|| iframeElement.contentWindow.document == null
			|| iframeElement.contentWindow.document.body == null
			|| iframeElement.contentWindow.document.body.childElementCount == 0
			|| iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") != null) {
			// iframe is not yet ready. retry in a few moments
			// console.log("skipped initReaderPage (1) " + src);
			setTimeout(function () { xreader.initReaderPage(iframeElement, src, pagePageInstanceId); }, 100);
			return;
		}
		
		var iframeWindow = iframeElement.contentWindow;
		var iframeDocument = iframeWindow.document;
		var iframeBody = iframeDocument.body;

		// if (iframeElement.contentWindow.document.body.setAttribute("XReaderPagePageInstanceId") != pageInstanceID) {}
		iframeBody.setAttribute("XReaderPagePageInstanceId", pagePageInstanceId);
		
		// add events listener to page iframe
		// console.log(iframeElement.contentWindow.location.href);
		var forwardEventToXReader = function(e) {
			$("body").trigger(e.type, [e]);
		};
		iframeBody.addEventListener("touchstart", forwardEventToXReader);
		iframeBody.addEventListener("touchmove", forwardEventToXReader);
		iframeBody.addEventListener("touchend", forwardEventToXReader);
		iframeBody.addEventListener("mousedown", forwardEventToXReader);
		iframeBody.addEventListener("mousemove", forwardEventToXReader);
		iframeBody.addEventListener("mouseup", forwardEventToXReader);
		iframeBody.addEventListener("click", function(e) {
			// console.log("qui", e);
			$("#container").trigger(e.type, [e]);
		});
		// $(iframeBody).bind('touchstart touchmove touchend mousedown mousemove mouseup', function(e) {
		// 	console.log("I AM TRIGGERING");
		// 	e = e.originalEvent;
		// 	$("body").trigger(e.type, [e]);
		// });
		iframeWindow.addEventListener('keydown', function(e) {
			$(window).trigger('keydown', [e]);
		});
		iframeWindow.addEventListener('wheel', function(e) {
			$(window).trigger('wheel', [e]);
		});

		// add event listeners to page internal iframes (if any)
		var pageIframes = iframeBody.getElementsByTagName("iframe");
		$.each(pageIframes, function(index, item) {
			item.onload = function () {
				var w = item.contentWindow;
				w.addEventListener('touchend', function(e) {
					$("body").trigger('touchend', [e]);
				});
				w.addEventListener('touchmove', function(e) {
					$("body").trigger('touchmove', [e]);
				});
				w.addEventListener('touchstart', function(e) {
					$("body").trigger('touchstart', [e]);
				});
				w.addEventListener('click', function(e) {
					// console.log(e);
					if (e.defaultPrevented) {
						e.stopPropagation();
						return true;
					}
					$("#container").trigger('click', [e]);
				});
				w.addEventListener('keydown', function(e) {
					$(window).trigger('keydown', [e]);
				});

				var internalIframeDocument = w.document;
				var internalIframeInjectedCss = "* { -webkit-tap-highlight-color: transparent; }";
				var internalIframeInjectedStyleNode = internalIframeDocument.createElement('style'); internalIframeInjectedStyleNode.innerHTML = internalIframeInjectedCss; internalIframeDocument.head.appendChild(internalIframeInjectedStyleNode);
			}
		});

		// iframeDocument.addEventListener('touchmove', function (event) {
		// 	if (event.scale !== 1) { event.preventDefault(); }
		// }, { passive: false });
		
		// toggle menu on click
		// var pageElement = iframeBody.getElementsByClassName("SCPage")[0];
		// pageElement.addEventListener('click', function(e) {
		// 	if (e.defaultPrevented) {
		// 		e.stopPropagation();
		// 		return true;
		// 	}
		// 	$("#container").trigger('click', [e]);
		// });

		// initializing XPUB functionalities
		var oXPUB = new XPUB(iframeElement);
		
		iframeElement.contentWindow.XPUB = oXPUB;
		iframeElement.contentWindow.xreader = xreader;

		// handle content links, forwarding them to the reader if the page is not being scrolled
		var links = Array.prototype.slice.call(
				iframeDocument.getElementsByTagName('a')
		);
		var count = links.length;
		for(var i = 0; i < count; i++) {
			links[i].addEventListener('click', function(e) {
				e.preventDefault();
				if (xreader.wasDraggingPage) {
					// console.log("canceled click");
					xreader.wasDraggingPage = false;
				} else {
					// console.log(this.href);
					oXPUB.openUrl(this.href, false);
				}
				return true;
			});
		}

		// click on read-aloud block seeks media overlay playback to that block
		if (xreader.ReaderSettings.EnableTapToSeekReadaloud) {
			$(iframeBody.getElementsByClassName("SCReadaloudBlock")).click(function (e) { 
				if (!xreader.MediaOverlay.IsPlaying) return;
				if (e.isDefaultPrevented()) {
					e.stopPropagation();
					return true;
				} else {
					e.preventDefault();
				}
				oXPUB.seekReadaloud(this.id);
			});
		}

		// avoid highlight color on clicks
		var injectedCss = "* { -webkit-tap-highlight-color: transparent; }";
		var injectedStyleNode = iframeDocument.createElement('style'); injectedStyleNode.innerHTML = injectedCss; iframeDocument.head.appendChild(injectedStyleNode);

		// define current orientation
		if (xreader.orientation != undefined) xreader.setOrientation(xreader.orientation);

		xreader.Hooks._beforePageLoadHooks.forEach((hook, hookIndex) => {
			if (typeof(hook) === "function") {
				try {
					// console.log("excuting BeforePageLoadHook #" + hookIndex)
					hook(src);
				} catch (error) {
					console.error(error);
				}
			}
		});

		// start content page interactivity
		var event = document.createEvent("Event");
		event.initEvent("SCEventPageLoad", false, true); 
		iframeElement.contentWindow.dispatchEvent(event);

		// console.log("ok");
	},


	/**
	 * Cancels a page switch initiated by user swipe, resetting the UI to current page(s) display.
	 * I.e. this is called when user raises its finger when the amount of swipe was not sufficient to change page, or
	 * when an invalid page switch was requested (go before the first page or after the last page)
	 * @memberof xreader
	 * @param {boolean} animated true to animate the page switch cancelation, false otherwise
	 */
	cancelPageSwitch : function (animated) {
		if (animated == true) {
			$('#container').transition({ x: 0 }, 400, 'snap');
		} else {
			document.getElementById('container').style.webkitTransform = "translate3d(0px, 0, 0)";
			document.getElementById('container').style.transform = "";
		}
	},


	/**
	 * Turns to page(s) at right of the current one(s) with an animation
	 * @memberof xreader
	 * @param {function} onCompletionFunction a custom function that will be executed when the page turn animation is completed, or null for the standard behavior, that is notifying native app that page(s) changed so that it can start to load the right pages
	 */
	turnPagesRightAnimated : function(onCompletionFunction) {
		// var curTransform = new   WebKitCSSMatrix(window.getComputedStyle($("#container")[0]).webkitTransform); console.log(curTransform.m41);
		if (xreader.isTurningPages && onCompletionFunction != null) {
			onCompletionFunction();
			return;
		}
		xreader.isTurningPages = true;
		if (onCompletionFunction == null) {
			onCompletionFunction = function() {
				xreader.callAppMethod("GoToPageAtRight", []);
			};
		} else {
			// if an onCompletion function is set, probably this call is not originating from a touch start, so thumbnails were not set correctly
			document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailOne').style.backgroundImage;
			document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage;
		}
		$('#container').transition({ x: -xreader.containerWidth }, 150, 'out', onCompletionFunction);
	},


	/**
	 * Turns to page(s) at left of the current one(s) with an animation
	 * @memberof xreader
	 * @param {function} onCompletionFunction a custom function that will be executed when the page turn animation is completed, or null for the standard behavior, that is notifying native app that page(s) changed so that it can start to load the right pages
	 */
	turnPagesLeftAnimated : function(onCompletionFunction) {
		// var curTransform = new   WebKitCSSMatrix(window.getComputedStyle($("#container")[0]).webkitTransform); console.log(curTransform.m41);
		if (xreader.isTurningPages && onCompletionFunction != null) {
			onCompletionFunction();
			return;
		}
		xreader.isTurningPages = true;
		if (onCompletionFunction == null) {
			onCompletionFunction = function() {
				xreader.callAppMethod("GoToPageAtLeft", []);
			};
		} else {
			document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage;
			document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage;
		}
		$('#container').transition({ x: xreader.containerWidth }, 150, 'out', onCompletionFunction);
	},


	/**
	 * Returns the iframe element currently displaying the given page, or null if no iframe is displaying the given page
	 * @memberof xreader
	 * @param {string} pageSrc URL of the page for which we want to get the iframe currently displaying it
	 * @returns {Element} the iframe element currently displaying the given page, or null
	 */
	getPageContentWindow : function (pageSrc) {
		var iframeOne = document.getElementById("ReaderPageOne");
		if (iframeOne.contentWindow.location.href == pageSrc) {
			return iframeOne.contentWindow;
		}
		var iframeTwo = document.getElementById("ReaderPageTwo");
		if (iframeTwo.contentWindow.location.href == pageSrc) {
			return iframeTwo.contentWindow;
		}
		return null;
	},


	/**
	 * Applies the current status of the media overlay, eventually highlighting the correct element
	 * @memberof xreader
	 * @param {boolean} enabled true if media overlays are currently enabled, false otherwise
	 * @param {string} pageSrc URL of the current page handling media overlay at the moment
	 * @param {string} elementId Id of the DOM element that should be highlighted, or null if no element should be highglighted
	 */
	applyMediaOverlay : function (enabled, pageSrc = null, elementId = null, isPlayingAudio = null) {
		if (isPlayingAudio == null) isPlayingAudio = enabled;

		xreader.MediaOverlay.IsPlaying = enabled;
		xreader.MediaOverlay.IsPlayingAudio = isPlayingAudio;
		xreader.MediaOverlay.CurrentElement = elementId;

		var iframeOne = document.getElementById("ReaderPageOne");
		var iframeTwo = document.getElementById("ReaderPageTwo");
		var eventToTrigger = enabled ? "SCEventReadAloudStarted" : "SCEventReadAloudStopped";

		[iframeOne,iframeTwo].forEach(function (iframe) {
			try {
				$(iframe.contentWindow.document.getElementsByClassName(xreader.MediaOverlay.ActiveElementClass)).removeClass(xreader.MediaOverlay.ActiveElementClass);
				iframe.contentWindow.XPUB.isReadAloudPlayingAudio = isPlayingAudio;
				if (iframe.contentWindow.XPUB.isReadAloudActive != enabled) {
					iframe.contentWindow.XPUB.isReadAloudActive = enabled;
					iframe.contentWindow.$(".SCPageObject").trigger(eventToTrigger);
				}
			} catch (err) {}
		});

		if (!enabled || elementId == null) return;

		var pageContentWindow = xreader.getPageContentWindow(pageSrc);
		if (pageContentWindow == null) return;

		$(pageContentWindow.document.getElementById(elementId)).addClass(xreader.MediaOverlay.ActiveElementClass);
	},


	/**
	 * Executes a given JavaScript function on the window of the iframe that is displaying the given content page
	 * @memberof xreader
	 * @param {string} pageSrc URL of the content page to execute the function on, or "*" to execute the function on all currently displayed pages
	 * @param {string} fn The code of the funcion to be excuted
	 */
	executeJavascript : function (pageSrc, fn) {
		if (pageSrc == "*") {
			var iframeOne = document.getElementById("ReaderPageOne");
			var iframeTwo = document.getElementById("ReaderPageTwo");

			try {
				if (iframeOne.contentWindow.location.href != "about:blank")
					xreader.executeJavascript(iframeOne.contentWindow.location.href, fn);
			} finally {
				if (iframeTwo.contentWindow.location.href != "about:blank")
					xreader.executeJavascript(iframeTwo.contentWindow.location.href, fn);
			}
		} else {
			var pageContentWindow = xreader.getPageContentWindow(pageSrc);
			if (pageContentWindow == null) return;
			
			pageContentWindow.tmpExecJsFn = fn;
			pageContentWindow.tmpExecJsFn(pageContentWindow.$, pageContentWindow, pageContentWindow.document);
		}
	},


	/**
	 * Calls a function on the application layer (e.g. XReader.Hybrid or XReader.JS) using a jsBridge object injected by the application layer itself
	 * @memberof xreader
	 * @param {string} methodName name of the method to be executed on the native app
	 * @param {Object} methodParameters parameter or array of parameters to be passed to the native method, or null if none applies
	 */
	callAppMethod: function (methodName, methodParameters, callbackFn, errorFn) {
		if (typeof(jsBridge) === "undefined") {
			setTimeout(function() { xreader.callAppMethod(methodName, methodParameters, callbackFn, errorFn); }, 200);
			return;
		}
		if (methodParameters == null) {
			methodParameters = [];
		} else if (!(Array.isArray(methodParameters))) {
			methodParameters = [methodParameters];
		}
		xreader.sentMsgID++;
		// var data = {"method" : methodName, "params" : methodParameters, "id" : xreader.sentMsgID};
		// jsBridge.invokeAction(JSON.stringify(data));
		if (typeof(callbackFn) === "undefined") callbackFn = null;
		if (typeof(errorFn) === "undefined") errorFn = null;
		if (callbackFn != null) {
			var msg = {
				"method" : methodName, "params" : methodParameters,
				"callbackFn": callbackFn, "errorFn": errorFn,
				"id" : xreader.sentMsgID
			};
			xreader.messagesAwaitingResponse.push(msg);
			jsBridge.invokeAction(JSON.stringify({
				"method" : methodName, "params" : methodParameters,
				"callbackFn": ""+callbackFn, "errorFn": ""+errorFn,
				"id" : xreader.sentMsgID
			}));
		} else {
			jsBridge.invokeAction(JSON.stringify({
				"method" : methodName, "params" : methodParameters,
				"callbackFn": null, "errorFn": null,
				"id" : xreader.sentMsgID
			}));
		}
	},

	invokeAppCallback: function(msgId, response, err) {
		var msg;
		for (var i = 0; i < xreader.messagesAwaitingResponse.length; i++) {
			msg = xreader.messagesAwaitingResponse[i];
			if (msg.id == msgId) {
				if (err != null) {
					if (msg.errorFn) msg.errorFn(err);
				} else {
					if (msg.callbackFn) msg.callbackFn(response);
				}
				xreader.messagesAwaitingResponse.splice(i, 1);
				break;
			}
		}
	},


	/**
	 * Asks the native app to save a backup of current localStorage and IndexedDB data, for later restoration
	 * @memberof xreader
	 */
	 backupUserData: function (indexedDBs) {
		var values = {},
			keys = Object.keys(localStorage),
			i = keys.length;
		while ( i-- ) {
			values[keys[i]] = localStorage.getItem(keys[i]);
		}
		var localStorageData = JSON.stringify(values);

		var nativeStorageData = JSON.stringify(xreader.NativeStorage.data);

		var idbData = [];
		var idbCount = indexedDBs != null ? indexedDBs.length : 0;
		var idbBackedUp = 0;
		var idbStoresCount = 0;
		var idbStoresBackedUp = 0;
		if (idbCount > 0 && xreader.Environment.Platform != xreader.Platform.Windows) {
			var checkCompleted = function() {
				console.log(idbBackedUp + " of " + idbCount + " databases; " + idbStoresBackedUp + " of " + idbStoresCount + " objectStores");
				if (idbBackedUp == idbCount && idbStoresCount == idbStoresBackedUp) {
					var indexedDbData = JSON.stringify(idbData);
					console.log(idbData);
					xreader.callAppMethod("BackupUserData", [localStorageData,indexedDbData,nativeStorageData]);
				}
			}
			indexedDBs.forEach(dbName => {
				try {
					var request = indexedDB.open(dbName);
					request.onsuccess = function(event) {
						// console.warn("database opened", dbName);
						try {
							var db = event.target.result;
							var dbBackup = {
								name: db.name,
								version: db.version,
								objectStores: []
							}
							idbStoresCount = idbStoresCount + db.objectStoreNames.length;
							for (let i = 0; i < db.objectStoreNames.length; i++) {
								try {
									const objectStoreName = db.objectStoreNames[i];
									var transaction = db.transaction(objectStoreName, 'readonly');
									var objectStore = transaction.objectStore(objectStoreName);
									req = objectStore.getAll();
									req.onsuccess = function(event) {
										try {
											var objectStoreBackup = {
												name: objectStoreName,
												autoIncrement: objectStore.autoIncrement,
												keyPath: objectStore.keyPath,
												items: event.target.result
											};
											dbBackup.objectStores.push(objectStoreBackup);
										} catch (error) {}
										idbStoresBackedUp++;
										checkCompleted();
									};
									req.onerror = function(event) {
										idbStoresBackedUp++;
										checkCompleted();
									}
								} catch (error) {
									idbStoresBackedUp++;
									checkCompleted();
								}
							}
							idbData.push(dbBackup);
							idbBackedUp++;
							checkCompleted();
						} catch (error) {
							idbBackedUp++;
							checkCompleted();
						}
					};
					request.onerror = function(event) {
						idbBackedUp++;
						checkCompleted();
					}
				} catch (error) {
					idbBackedUp++;
					checkCompleted()
				}
			});

		} else {
			var indexedDbData = JSON.stringify(idbData);
			xreader.callAppMethod("BackupUserData", [localStorageData,indexedDbData,nativeStorageData]);
		}
	},


	/**
	 * Restores a backup of previous localStorage and indexedDB data as returned by backupUserData.
	 * Works around http port randomization and random localStorage/indexedDB cleanup by the OS
	 * @memberof xreader
	 * @param {Object} localStorageBackup a key/pair backup of previous local storage to be restored to the current local storage
	 * @param {Object} indexedDbBackup a data structure with IndexedDB data to be restored to the current IndexedDB
	 */
	restoreUserData: function (localStorageBackup, indexedDbBackup, nativeStorageBackup) {
		// restore local storage
		if (localStorageBackup != null) {
			var keys = Object.keys(localStorageBackup),
				i = keys.length;
			localStorage.clear();
			while ( i-- ) {
				localStorage.setItem(keys[i], localStorageBackup[keys[i]]);
			}
		}
		// restore indexed db
		if (indexedDbBackup != null && xreader.Environment.Platform != xreader.Platform.Windows) {
			indexedDbBackup.forEach(dbBackup => {
				try {
					var restoreDatabase = function() {
						indexedDB.open(dbBackup.name, dbBackup.version).onupgradeneeded = function (event) {
							var db = event.target.result;
							dbBackup.objectStores.forEach(objectStoreBackup => {
								var objectStore = db.createObjectStore(objectStoreBackup.name, { keyPath: objectStoreBackup.keyPath, autoIncrement: objectStoreBackup.autoIncrement });
								objectStore.transaction.oncomplete = function(event) {
									var objectStore = db.transaction(objectStoreBackup.name, "readwrite").objectStore(objectStoreBackup.name);
									objectStoreBackup.items.forEach(item => {
										objectStore.add(item);
									});
								};
							});
						};
					};
					var request = indexedDB.deleteDatabase(dbBackup.name);
					request.onerror = restoreDatabase;
					request.onsuccess = restoreDatabase;	
				} catch (error) {
					console.error("error restoring database", dbBackup.name);
				}
			});
		}
		// restore nativeStorage
		if (nativeStorageBackup != null) {
			xreader.NativeStorage.data = nativeStorageBackup;
		}
	}

	
};






/**
 * Creates a new XPUB object, which is injected in the content page's window and used
 * as a bridge between content javascript and functionalities implemented by the reader
 * @constructor
 * @param {Element} iframeElement The DOM Element of the iframe where the object will be injected
 */
function XPUB(iframeElement) {
	this.iframeElement = iframeElement;
	this.xpubWindow = this.iframeElement.contentWindow;
	this.pageUrl = this.xpubWindow.location.href;
	this.readerUrl = window.location.href;
	this.parentDocument = document;
	this.readerPrefersToHandleAudio = xreader.Environment.Platform == xreader.Platform.iOS ||
		(xreader.Environment.Platform == xreader.Platform.Web && (typeof(window.AudioContext) !== "undefined") || typeof(window.webkitAudioContext) !== "undefined");
	this.currentUsername = xreader.Environment.CurrentUsername;
	this.currentDeviceId = xreader.Environment.CurrentDeviceId;
	this.productId = xreader.Environment.ProductId;
}


/**
 * Calls a function on the application layer of XReader (e.g. XReader.Hybrid or XReader.JS)
 * @memberof XPUB
 * @instance
 * @param {Element} iframeElement 
 */
XPUB.prototype.callAppMethod = function(methodName, methodParameters, callbackFn, errorFn) {
	methodName = "XPUB." + methodName;
	if (methodParameters == null) {
		methodParameters = [];
	} else if (!(Array.isArray(methodParameters))) {
		methodParameters = [methodParameters];
	}
	methodParameters.unshift(this.pageUrl);
	xreader.callAppMethod(methodName, methodParameters, callbackFn, errorFn);
};

/**
 * [DEPRECATED, use XPUB.callAppMethod instead] Calls a function on the application layer of XReader (e.g. XReader.Hybrid or XReader.JS)
 * @memberof XPUB
 * @instance
 * @deprecated
 * @param {Element} iframeElement 
 */
XPUB.prototype.callNative = XPUB.prototype.callAppMethod;

/**
 * This function is called by the content page when it is fully loaded.
 * It clears the loading thumbnail, thus revealing the real page content, and starts executing page
 * animations. Also forwards the "ready" status to the native reader
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.ready = function() {	
	var caller = this;
	setTimeout(function () {
		if (caller.iframeElement.contentWindow.location.href != caller.pageUrl) return; // frame loaded another page in the meantime
		caller.iframeElement.contentWindow.showAssetsParity("all");

		xreader.Hooks._beforePagePlayHooks.forEach((hook, hookIndex) => {
			if (typeof(hook) === "function") {
				try {
					// console.log("excuting BeforePagePlayHook #" + hookIndex)
					hook(caller.pageUrl);
				} catch (error) {
					console.error(error);
				}
			}
		});

		var event = caller.parentDocument.createEvent("Event");
		event.initEvent("SCEventPagePlay", false, true); 
		caller.xpubWindow.dispatchEvent(event);
		$(caller.iframeElement).css("opacity", "1");
		$(".SCLoader", $(caller.iframeElement.parentElement)).hide();

		caller.callAppMethod("Ready");
		if (!xreader.draggingPage) $("#overlay").hide();
		window.lastXpub = caller;
	}, 250);
};


/**
 * Asks the native reader to open an URL
 * @memberof XPUB
 * @instance
 * @param {string} url The URL to be opened
 * @param {boolean} openInBrowser True if URL should be opened in default system browser, false to open the url using in-app browser
 */
XPUB.prototype.openUrl = function (url, openInBrowser) {
	this.callAppMethod("OpenUrl", [url, openInBrowser]);
};


/**
 * Asks the native reader to open its menu
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.openMenu = function() {
	this.callAppMethod("OpenMenu");
};


/**
 * Asks the native reader to play an audio file natively
 * @memberof XPUB
 * @instance
 * @param {string} url URL of audio to be played
 * @param {boolean} playFromBeginning True if audio should be played from beginning even if it was previously paused
 * @param {string} objectIdInPage The id of the corresponding audio node on the page
 */
XPUB.prototype.playAudio = function (url, playFromBeginning, objectIdInPage) {
	this.callAppMethod("PlayAudio", [url, playFromBeginning, objectIdInPage]);
};


/**
 * Asks the native reader to init native device motion monitoring
 * @memberof XPUB
 * @instance
 */
 XPUB.prototype.initDeviceMotion = function () {
	this.callAppMethod("InitDeviceMotion", []);
};


/**
 * Pauses all playing audio/video media on the page
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.pauseAllMedia = function () {
	// console.log("pausing all audio/video media on page");
	var $ = this.xpubWindow.$;

	$("audio,video").each(function( index ) {
		var myMedia = $(this)[0];
		if (myMedia.duration > 0 && !myMedia.paused) {
			$(this).attr("data-mediaPausedByXPUB", "true");
			try {
				myMedia.pause();
			} catch (err) {
				// do nothing just continue with the next media
			}
		}
	});
};


/**
 * Resumes playback of all audio/video media on the page previously stopped by pauseAllMedia
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.resumeAllMedia = function () {
	// console.log("resuming all audio/video media on page");
	var $ = this.xpubWindow.$;
	var doc = this.xpubWindow.document;

	$(doc).find("[data-mediaPausedByXPUB='true']").each(function( index ) {
		$(this).attr("data-mediaPausedByXPUB", "false");
		var myMedia = $(this)[0];
		try {
			myMedia.play();
		} catch (err) {
			// do nothing just continue with the next media
		}
	});
};


/**
 * Asks the native reader to open its localizations menu
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.openLocalizationsMenu = function() {
	this.callAppMethod("OpenLocalizationsMenu");
};


/**
 * Asks the native reader to toggle read aloud (aka media overlay) playback status
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.startStopReadAloud = function(event) {
	this.callAppMethod("StartStopReadAloud");
	event.preventDefault();
};


/**
 * Asks the native reader to seek read aloud to a certain block
 * @memberof XPUB
 * @instance
 * @param {string} blockId The id of the block to seek read aloud to playback to
 */
XPUB.prototype.seekReadaloud = function (blockId) {
	this.callAppMethod("SeekReadaloud", [blockId]);
}


/**
 * Asks the native reader to toggle soundtrack playback status
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.toggleSoundtrack = function() {
	this.callAppMethod("ToggleSoundtrack");
};


/**
 * Asks the native reader to start soundtrack playback
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.startSoundtrack = function() {
	this.callAppMethod("StartSoundtrack");
};


/**
 * Asks the native reader to stop soundtrack playback
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.stopSoundtrack = function() {
	this.callAppMethod("StopSoundtrack");
};


/**
 * Asks the native reader to start annotation mode
 * @memberof XPUB
 * @instance
 */
 XPUB.prototype.startAnnotationMode = function() {
	this.callAppMethod("StartAnnotationMode");
};


/**
 * Asks the native reader to stop annotation mode
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.stopAnnotationMode = function() {
	this.callAppMethod("StopAnnotationMode");
};


/**
 * Asks the native reader to close itself
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.close = function() {
	this.callAppMethod("Close");
};


/**
 * Finds occurrences of a string in the content page and highlights them
 * @memberof XPUB
 * @instance
 * @param {string} keyword The keyword to search for
 */
XPUB.prototype.find = function (keyword) {
	this.clearSearchResults();
	this.findInElement(this.xpubWindow.document.body, keyword);
};


/**
 * Finds occurrences of a string in the given content page element and highlights them.
 * Recursevely searches in nested elements
 * @memberof XPUB
 * @instance
 * @param {Element} element The element whereby the search will take place
 * @param {string} keyword The keyword to search for
 */
XPUB.prototype.findInElement = function (element, keyword) {
	var doc = this.xpubWindow.document;
	if (element) {
		if (element.nodeType == 3) {        // Text node
			while (true) {
				var value = element.nodeValue;  // Search for keyword in text node
				var idx = value.toLowerCase().indexOf(keyword.toLowerCase());

				if (idx < 0) break;             // not found, abort

				var span = doc.createElement("span");
				var text = doc.createTextNode(value.substr(idx,keyword.length));
				span.appendChild(text);
				span.setAttribute("class","MyAppHighlight");
				span.style.backgroundColor="yellow";
				span.style.color="black";
				text = doc.createTextNode(value.substr(idx+keyword.length));
				element.deleteData(idx, value.length - idx);
				var next = element.nextSibling;
				element.parentNode.insertBefore(span, next);
				element.parentNode.insertBefore(text, next);
				element = text;
				// SearchResultCount++;	// update the counter
			}
		} else if (element.nodeType == 1) { // Element node
			if (element.style.display != "none" && element.nodeName.toLowerCase() != 'select') {
				for (var i=element.childNodes.length-1; i>=0; i--) {
					this.findInElement(element.childNodes[i],keyword);
				}
			}
		}
	}
};


/**
 * Clears any found occurrences in the content page, previously highlighted by XPUB.findInElement
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.clearSearchResults = function () {
	this.clearSearchResultsFromElement(this.xpubWindow.document.body);
};


/**
 * Clears any found occurrences in the given content page element, as previously highlighted by XPUB.findInElement
 * Recursevely clears also nested elements
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.clearSearchResultsFromElement = function (element) {
  if (element) {
    if (element.nodeType == 1) {
      if (element.getAttribute("class") == "MyAppHighlight") {
        var text = element.removeChild(element.firstChild);
        element.parentNode.insertBefore(text,element);
        element.parentNode.removeChild(element);
        return true;
      } else {
        var normalize = false;
        for (var i=element.childNodes.length-1; i>=0; i--) {
          if (this.clearSearchResultsFromElement(element.childNodes[i])) {
            normalize = true;
          }
        }
        if (normalize) {
          element.normalize();
        }
      }
    }
  }
  return false;
};


/**
 * Returns orientation from the main window, since iframes not always have a correct window.orientation value.
 * The value can be overridden by the native app by setting the xreader.overriddenOrientation value, which will be preferred when not null.
 * e.g. xreader.Droid sets it nativaley, since in Android 4.4 window.orientation does not change automatically when turning the device upside down
 * @memberof XPUB
 * @instance
 * @returns {number} orientation in degrees
 */
XPUB.prototype.getOrientation = function() {
	return (xreader.overriddenOrientation != null ? xreader.overriddenOrientation : window.orientation);
};


/**
 * Asks the native reader to send an email
 * @memberof XPUB
 * @instance
 * @param {string} recipient The email recipient
 * @param {string} subject The email subject
 * @param {string} content The email content
 */
XPUB.prototype.sendMail = function(recipient, subject, content) {
	this.callAppMethod("SendMail", [recipient, subject, content]);
};


/**
 * Asks the native reader to take a photo
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.takePhoto = function() {
	this.callAppMethod("TakePhoto");
};


/**
 * Asks the native reader to pick a photo from the library
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.pickPhoto = function() {
	this.callAppMethod("PickPhoto");
};


/**
 * Asks the native reader to scan a QR code
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.scanQr = function() {
	this.callAppMethod("ScanQr");
};


/**
 * Get the URL of the cover of another product in the current environment, if available (e.g. for use with Shelf)
 * @memberof XPUB
 * @instance
 * @param {*} itemId 
 * @param {*} callbackFn 
 * @param {*} errorFn 
 */
XPUB.prototype.getProductCover = function (itemId, callbackFn, errorFn) {
	this.callAppMethod("GetProductCover", itemId, callbackFn, errorFn );
}


/**
 * Open details screen of another product in the current environment, if available (e.g. for use with Shelf)
 * @memberof XPUB
 * @instance
 * @param {*} itemId 
 */
XPUB.prototype.openProductDetails = function (itemId) {
    this.callAppMethod("OpenProductDetails", itemId);
};


/**
 * True if Read Aloud is active (not necessarily playing audio), false otherwise
 * @type {boolean}
 * @memberof XPUB
 */
XPUB.prototype.isReadAloudActive = false;


/**
 * True if Read Aloud is playing audio, false otherwise
 * @type {boolean}
 * @memberof XPUB
 */
XPUB.prototype.isReadAloudPlayingAudio = false;


/**
 * True if reader prefers to handle audio on its own, false otherwise.
 * Some actions (e.g. playAudioFile) will look at this value to decide whether to call
 * XPUB.playAudio to use the reader implementation or use their own implementation
 * @type {boolean}
 * @memberof XPUB
 */
 XPUB.prototype.readerPrefersToHandleAudio;


/**
 * Injects an element in the page
 * @memberof XPUB
 * @instance
 * @param {string} elementType The element type, e.g. div, link or script
 * @param {Object} attributes an array of attributes for the element, in the form { name, value }
 * @param {string} dest the destination of the element, e.g. head or body
 */
XPUB.prototype.injectElement = function(elementType, attributes, dest) {
var doc = this.xpubWindow.document;
var myHeader = doc.createElement(elementType);
attributes.forEach(attr => {
	myHeader.setAttribute(attr.name, attr.value);
});
if (dest == "head") {
	doc.head.appendChild(myHeader);
} else {
	doc.body.appendChild(myHeader);
}
};


/**
 * Injects a stylesheet link element in the head of the page
 * @memberof XPUB
 * @instance
 * @param {string} src the url of the CSS file
 */
XPUB.prototype.injectStylesheet = function(src) {
	this.injectElement("link", [
		{ 'name' : 'rel', 'value' : 'stylesheet' },
		{ 'name' : 'type', 'value' : 'text/css' },
		{ 'name' : 'href', 'value' : src }
	], "head");
}


/**
 * Injects a javascript script element in the body of the page
 * @memberof XPUB
 * @instance
 * @param {string} src the url of the javascript file
 */
XPUB.prototype.injectScript = function(src) {
	this.injectElement("script", [
		{ 'name' : 'type', 'value' : 'text/javascript' },
		{ 'name' : 'src', 'value' : src }
	], "body");
}




// make sure legacy PubViewer object is updated
window.PubViewer = xreader;
 
// After all declarations, finally call initialization function (if not running locally or on IE)
if (document.location.protocol != "file:" && navigator.userAgent.indexOf("MSIE ") < 0 && navigator.userAgent.indexOf("Trident/") < 0) {
	xreader.init();
}