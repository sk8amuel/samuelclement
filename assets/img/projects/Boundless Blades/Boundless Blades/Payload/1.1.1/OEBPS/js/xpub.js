var XPUB = XPUB || {
	ready : function() {
		if (PubCoder.isQuickPreview) {
			$(window).trigger(PubCoder.Events.PagePlay);
		}
	},

	callAppMethod : function (methodName, methodParameters) {
		if (PubCoder.isQuickPreview) {
			PubCoder.call(methodName, methodParameters);
		}
	},
	
	callNative : function (methodName, methodParameters) { // deprecated, left here for legacy compatibility, use XPUB.callAppMethod instead
		XPUB.callAppMethod(methodName, methodParameters);
	},

	openUrl : function (url, openInBrowser) {
		if (PubCoder.isQuickPreview) {
			if (openInBrowser) {
				window.open(url);
			} else {
				window.location = url;
			}
		}
	},
	
	openMenu : function() {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('openIndex');
		}
	},

	playAudio : function(url, playFromBeginning, objectIdInPage) {
		if (PubCoder.isQuickPreview) {
			$("#"+objectIdInPage).trigger("ended");
		}
	},
	
	openLocalizationsMenu : function() {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('openLocalizations');
		}
	},

	startStopReadAloud : function(event) {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('toggleReadAloud');
		}
	},

	toggleSoundtrack : function(event) {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('toggleSoundtrack');
		}
	},
	
	startSoundtrack : function(event) {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('startSoundtrack');
		}
	},
	
	stopSoundtrack : function(event) {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('stopSoundtrack');
		}
	},
	
	close : function() {
		if (PubCoder.isQuickPreview) {
			XPUB.callNative('closeReader');
		}
	},

	startAnnotationMode : function(event) {
		if (PubCoder.isQuickPreview) {
			$(".SCAnnotationControl").css("display", "block");
			$(".SCAnnotationControl").trigger("SCEventShow");
		}
	},
	stopAnnotationMode : function(event) {
		if (PubCoder.isQuickPreview) {
			$(".SCAnnotationControl").css("display", "none");
		}
	},

	getOrientation : function () { return null; },

	initDeviceMotion : function () {},

	sendMail : function(recipient, subject, content) {},
	takePhoto : function() {},
	pickPhoto : function() {},
	scanQr : function() {},

	isReadAloudActive : false,
	isReadAloudPlayingAudio : false,
	readerPrefersToHandleAudio : false
};


$(window).load(function () {
	if (PubCoder.isQuickPreview) {
		$(window).trigger(PubCoder.Events.PageLoad);
	}
});