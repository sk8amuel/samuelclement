pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 317;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1864_onTap_activeActionGroupIndex = -1;
var obj1864_onTap_runningActionsCount = 0;
var obj1864_onTap_loopCount = 0;
var obj1868_onTap_activeActionGroupIndex = -1;
var obj1868_onTap_runningActionsCount = 0;
var obj1868_onTap_loopCount = 0;
var obj2165_onSwipeUp_activeActionGroupIndex = -1;
var obj2165_onSwipeUp_runningActionsCount = 0;
var obj2165_onSwipeUp_loopCount = 0;
var obj2427_onTap_activeActionGroupIndex = -1;
var obj2427_onTap_runningActionsCount = 0;
var obj2427_onTap_loopCount = 0;
var obj2598_onPageScroll_activeActionGroupIndex = -1;
var obj2598_onPageScroll_runningActionsCount = 0;
var obj2598_onPageScroll_loopCount = 0;
var obj2580_onTap_activeActionGroupIndex = -1;
var obj2580_onTap_runningActionsCount = 0;
var obj2580_onTap_loopCount = 0;
var obj2558_onTap_activeActionGroupIndex = -1;
var obj2558_onTap_runningActionsCount = 0;
var obj2558_onTap_loopCount = 0;
var obj2551_onTap_activeActionGroupIndex = -1;
var obj2551_onTap_runningActionsCount = 0;
var obj2551_onTap_loopCount = 0;
var obj2548_onTap_activeActionGroupIndex = -1;
var obj2548_onTap_runningActionsCount = 0;
var obj2548_onTap_loopCount = 0;
var obj2545_onTap_activeActionGroupIndex = -1;
var obj2545_onTap_runningActionsCount = 0;
var obj2545_onTap_loopCount = 0;
var obj2542_onTap_activeActionGroupIndex = -1;
var obj2542_onTap_runningActionsCount = 0;
var obj2542_onTap_loopCount = 0;
var obj2539_onTap_activeActionGroupIndex = -1;
var obj2539_onTap_runningActionsCount = 0;
var obj2539_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
$("#obj2463-wdgt").SCWidget().init();  
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj1864_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1864_onTap_activeActionGroupIndex = -1;
		$("#obj1864").trigger("obj1864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1864) {
				console.warn("de-queueing event obj1864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1864_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1856 
hide_1866();
function hide_1866() {
	var selector = "#obj1856";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1864_onTap_runningActionsCount = obj1864_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1866(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj1864 
hide_1867();
function hide_1867() {
	var selector = "#obj1864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1864_onTap_runningActionsCount = obj1864_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1867(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1868
(function(){
	window.obj1864_onTap_runningActionsCount = obj1864_onTap_runningActionsCount + 1;

	var selector = "#obj1868";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1864_onTap_runningActionsCount = window.obj1864_onTap_runningActionsCount - 1;
if (window.obj1864_onTap_runningActionsCount < 0) {
	window.obj1864_onTap_runningActionsCount = 0;
} else if (window.obj1864_onTap_runningActionsCount == 0) {
	obj1864_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1864_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1864_onTap_activeActionGroupIndex = -1;
		$("#obj1864").trigger("obj1864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1864) {
				console.warn("de-queueing event obj1864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1864_onTap_activeActionGroupIndex = 1;
	





















};
obj1868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1868_onTap_activeActionGroupIndex = -1;
		$("#obj1868").trigger("obj1868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1868) {
				console.warn("de-queueing event obj1868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1868_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1868 
hide_1872();
function hide_1872() {
	var selector = "#obj1868";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1868_onTap_runningActionsCount = obj1868_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1872(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1856
(function(){
	window.obj1868_onTap_runningActionsCount = obj1868_onTap_runningActionsCount + 1;

	var selector = "#obj1856";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1864
(function(){
	window.obj1868_onTap_runningActionsCount = obj1868_onTap_runningActionsCount + 1;

	var selector = "#obj1864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1868_onTap_runningActionsCount = window.obj1868_onTap_runningActionsCount - 1;
if (window.obj1868_onTap_runningActionsCount < 0) {
	window.obj1868_onTap_runningActionsCount = 0;
} else if (window.obj1868_onTap_runningActionsCount == 0) {
	obj1868_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1868_onTap_activeActionGroupIndex = -1;
		$("#obj1868").trigger("obj1868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1868) {
				console.warn("de-queueing event obj1868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1868_onTap_activeActionGroupIndex = 1;
	





















};
obj2165_onSwipeUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2165_onSwipeUp_activeActionGroupIndex = -1;
		$("#obj2165").trigger("obj2165_onSwipeUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2165) {
				console.warn("de-queueing event obj2165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2165_onSwipeUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2449 
hide_2446();
function hide_2446() {
	var selector = "#obj2449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2446(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2444 
hide_2447();
function hide_2447() {
	var selector = "#obj2444";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2447(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2165_onSwipeUp_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2165_onSwipeUp_activeActionGroupIndex = -1;
		$("#obj2165").trigger("obj2165_onSwipeUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2165) {
				console.warn("de-queueing event obj2165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2165_onSwipeUp_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj2171 
hide_2470();
function hide_2470() {
	var selector = "#obj2171";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2470(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2178
(function(){
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;

	var selector = "#obj2178";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeInUp";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2180
(function(){
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;

	var selector = "#obj2180";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1487 
move_2168();
function move_2168() {
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj1487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=529";
	var moveY = "+=-2652";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj2171 
move_2173();
function move_2173() {
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2171");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=988";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj1487 
rotate_2169();
function rotate_2169() {
	window.obj2165_onSwipeUp_runningActionsCount = obj2165_onSwipeUp_runningActionsCount + 1;
	
	var targetObjectId = "#obj1487";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1487';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '37.85009';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2169_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2169_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2169_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2169_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2169_completed() {
	setTimeout(function() {
		window.obj2165_onSwipeUp_runningActionsCount = window.obj2165_onSwipeUp_runningActionsCount - 1;
if (window.obj2165_onSwipeUp_runningActionsCount < 0) {
	window.obj2165_onSwipeUp_runningActionsCount = 0;
} else if (window.obj2165_onSwipeUp_runningActionsCount == 0) {
	obj2165_onSwipeUp_actionGroup2();
}
	}, 1);
}














};
obj2165_onSwipeUp_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2165_onSwipeUp_activeActionGroupIndex = -1;
		$("#obj2165").trigger("obj2165_onSwipeUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2165) {
				console.warn("de-queueing event obj2165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2165_onSwipeUp_activeActionGroupIndex = 2;
	





















};
obj2427_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2427_onTap_activeActionGroupIndex = -1;
		$("#obj2427").trigger("obj2427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2427) {
				console.warn("de-queueing event obj2427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2427_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2429();
function goToPage_2429() {
	window.obj2427_onTap_runningActionsCount = obj2427_onTap_runningActionsCount + 1;
	$("#anchor128")[0].click();
	window.obj2427_onTap_runningActionsCount = window.obj2427_onTap_runningActionsCount - 1;
if (window.obj2427_onTap_runningActionsCount < 0) {
	window.obj2427_onTap_runningActionsCount = 0;
} else if (window.obj2427_onTap_runningActionsCount == 0) {
	obj2427_onTap_actionGroup1();
}
}





















};
obj2427_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2427_onTap_activeActionGroupIndex = -1;
		$("#obj2427").trigger("obj2427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2427) {
				console.warn("de-queueing event obj2427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2427_onTap_activeActionGroupIndex = 1;
	





















};
obj2598_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2598_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2598").trigger("obj2598_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2598) {
				console.warn("de-queueing event obj2598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2598_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2601();
function runjs_2601() {
	window.obj2598_onPageScroll_runningActionsCount = obj2598_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj2598", { left: -715, top: 1146 }, { left: 1363, top: 1147 }, 0, 2000, "")
	
	setTimeout(function() {
		window.obj2598_onPageScroll_runningActionsCount = window.obj2598_onPageScroll_runningActionsCount - 1;
if (window.obj2598_onPageScroll_runningActionsCount < 0) {
	window.obj2598_onPageScroll_runningActionsCount = 0;
} else if (window.obj2598_onPageScroll_runningActionsCount == 0) {
	obj2598_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2598_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2598_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2598").trigger("obj2598_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2598) {
				console.warn("de-queueing event obj2598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2598_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2580_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2580_onTap_activeActionGroupIndex = -1;
		$("#obj2580").trigger("obj2580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2580) {
				console.warn("de-queueing event obj2580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2580_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2578 
hide_2585();
function hide_2585() {
	var selector = "#obj2578";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutRight";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2585(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2580 
hide_2594();
function hide_2594() {
	var selector = "#obj2580";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2594(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2558
(function(){
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var selector = "#obj2558";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 200;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2574 
move_2584();
function move_2584() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2574");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=4";
	var moveY = "+=-19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2576 
move_2586();
function move_2586() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2576");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=3";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2556 
move_2587();
function move_2587() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2554 
move_2588();
function move_2588() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2551 
move_2589();
function move_2589() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2551");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2548 
move_2590();
function move_2590() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2548");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2545 
move_2591();
function move_2591() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2545");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2542 
move_2592();
function move_2592() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2542");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2539 
move_2593();
function move_2593() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2539");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2574 
rotate_2582();
function rotate_2582() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2574";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2574';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '39.02883';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2582_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2582_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2582_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2582_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2582_completed() {
	setTimeout(function() {
		window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2576 
rotate_2583();
function rotate_2583() {
	window.obj2580_onTap_runningActionsCount = obj2580_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2576';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-34.18612';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2583_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2583_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2583_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2583_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2583_completed() {
	setTimeout(function() {
		window.obj2580_onTap_runningActionsCount = window.obj2580_onTap_runningActionsCount - 1;
if (window.obj2580_onTap_runningActionsCount < 0) {
	window.obj2580_onTap_runningActionsCount = 0;
} else if (window.obj2580_onTap_runningActionsCount == 0) {
	obj2580_onTap_actionGroup1();
}
	}, 1);
}














};
obj2580_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2580_onTap_activeActionGroupIndex = -1;
		$("#obj2580").trigger("obj2580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2580) {
				console.warn("de-queueing event obj2580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2580_onTap_activeActionGroupIndex = 1;
	





















};
obj2558_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_onTap_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2558 
hide_2567();
function hide_2567() {
	var selector = "#obj2558";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2567(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2580
(function(){
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var selector = "#obj2580";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2578
(function(){
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var selector = "#obj2578";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeInRight";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2556 
move_2560();
function move_2560() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2554 
move_2561();
function move_2561() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2551 
move_2562();
function move_2562() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2551");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2548 
move_2563();
function move_2563() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2548");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2545 
move_2564();
function move_2564() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2545");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2542 
move_2565();
function move_2565() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2542");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2539 
move_2566();
function move_2566() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2539");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=245";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2574 
move_2570();
function move_2570() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2574");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-4";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2576 
move_2571();
function move_2571() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2576");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-3";
	var moveY = "+=-19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2574 
rotate_2569();
function rotate_2569() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2574";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2574';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-39.029';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2569_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2569_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2569_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2569_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2569_completed() {
	setTimeout(function() {
		window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2576 
rotate_2572();
function rotate_2572() {
	window.obj2558_onTap_runningActionsCount = obj2558_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2576';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '34.186';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2572_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2572_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2572_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2572_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2572_completed() {
	setTimeout(function() {
		window.obj2558_onTap_runningActionsCount = window.obj2558_onTap_runningActionsCount - 1;
if (window.obj2558_onTap_runningActionsCount < 0) {
	window.obj2558_onTap_runningActionsCount = 0;
} else if (window.obj2558_onTap_runningActionsCount == 0) {
	obj2558_onTap_actionGroup1();
}
	}, 1);
}














};
obj2558_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_onTap_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_onTap_activeActionGroupIndex = 1;
	





















};
obj2551_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2551_onTap_activeActionGroupIndex = -1;
		$("#obj2551").trigger("obj2551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2551) {
				console.warn("de-queueing event obj2551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2551_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2553();
function goToPage_2553() {
	window.obj2551_onTap_runningActionsCount = obj2551_onTap_runningActionsCount + 1;
	$("#anchor130")[0].click();
	window.obj2551_onTap_runningActionsCount = window.obj2551_onTap_runningActionsCount - 1;
if (window.obj2551_onTap_runningActionsCount < 0) {
	window.obj2551_onTap_runningActionsCount = 0;
} else if (window.obj2551_onTap_runningActionsCount == 0) {
	obj2551_onTap_actionGroup1();
}
}





















};
obj2551_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2551_onTap_activeActionGroupIndex = -1;
		$("#obj2551").trigger("obj2551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2551) {
				console.warn("de-queueing event obj2551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2551_onTap_activeActionGroupIndex = 1;
	





















};
obj2548_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2548_onTap_activeActionGroupIndex = -1;
		$("#obj2548").trigger("obj2548_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2548) {
				console.warn("de-queueing event obj2548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2548_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2550();
function goToPage_2550() {
	window.obj2548_onTap_runningActionsCount = obj2548_onTap_runningActionsCount + 1;
	$("#anchor131")[0].click();
	window.obj2548_onTap_runningActionsCount = window.obj2548_onTap_runningActionsCount - 1;
if (window.obj2548_onTap_runningActionsCount < 0) {
	window.obj2548_onTap_runningActionsCount = 0;
} else if (window.obj2548_onTap_runningActionsCount == 0) {
	obj2548_onTap_actionGroup1();
}
}





















};
obj2548_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2548_onTap_activeActionGroupIndex = -1;
		$("#obj2548").trigger("obj2548_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2548) {
				console.warn("de-queueing event obj2548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2548_onTap_activeActionGroupIndex = 1;
	





















};
obj2545_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2545_onTap_activeActionGroupIndex = -1;
		$("#obj2545").trigger("obj2545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2545) {
				console.warn("de-queueing event obj2545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2545_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2547();
function goToPage_2547() {
	window.obj2545_onTap_runningActionsCount = obj2545_onTap_runningActionsCount + 1;
	$("#anchor132")[0].click();
	window.obj2545_onTap_runningActionsCount = window.obj2545_onTap_runningActionsCount - 1;
if (window.obj2545_onTap_runningActionsCount < 0) {
	window.obj2545_onTap_runningActionsCount = 0;
} else if (window.obj2545_onTap_runningActionsCount == 0) {
	obj2545_onTap_actionGroup1();
}
}





















};
obj2545_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2545_onTap_activeActionGroupIndex = -1;
		$("#obj2545").trigger("obj2545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2545) {
				console.warn("de-queueing event obj2545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2545_onTap_activeActionGroupIndex = 1;
	





















};
obj2542_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2542_onTap_activeActionGroupIndex = -1;
		$("#obj2542").trigger("obj2542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2542) {
				console.warn("de-queueing event obj2542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2542_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2544();
function goToPage_2544() {
	window.obj2542_onTap_runningActionsCount = obj2542_onTap_runningActionsCount + 1;
	$("#anchor133")[0].click();
	window.obj2542_onTap_runningActionsCount = window.obj2542_onTap_runningActionsCount - 1;
if (window.obj2542_onTap_runningActionsCount < 0) {
	window.obj2542_onTap_runningActionsCount = 0;
} else if (window.obj2542_onTap_runningActionsCount == 0) {
	obj2542_onTap_actionGroup1();
}
}





















};
obj2542_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2542_onTap_activeActionGroupIndex = -1;
		$("#obj2542").trigger("obj2542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2542) {
				console.warn("de-queueing event obj2542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2542_onTap_activeActionGroupIndex = 1;
	





















};
obj2539_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2539_onTap_activeActionGroupIndex = -1;
		$("#obj2539").trigger("obj2539_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2539) {
				console.warn("de-queueing event obj2539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2539_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2541();
function goToPage_2541() {
	window.obj2539_onTap_runningActionsCount = obj2539_onTap_runningActionsCount + 1;
	$("#anchor134")[0].click();
	window.obj2539_onTap_runningActionsCount = window.obj2539_onTap_runningActionsCount - 1;
if (window.obj2539_onTap_runningActionsCount < 0) {
	window.obj2539_onTap_runningActionsCount = 0;
} else if (window.obj2539_onTap_runningActionsCount == 0) {
	obj2539_onTap_actionGroup1();
}
}





















};
obj2539_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2539_onTap_activeActionGroupIndex = -1;
		$("#obj2539").trigger("obj2539_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2539) {
				console.warn("de-queueing event obj2539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2539_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































































/*
 *
 *   obj1864: Event Touch Down
 *
 */
$("#obj1864").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1864_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1864_onTap is still running");
	return;
}
var obj1864_onTap_runningActionsCount = 0;
var obj1864_onTap_loopCount = 0;
obj1864_onTap_actionGroup0();
});










/*
 *
 *   obj1868: Event Touch Down
 *
 */
$("#obj1868").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1868_onTap is still running");
	return;
}
var obj1868_onTap_runningActionsCount = 0;
var obj1868_onTap_loopCount = 0;
obj1868_onTap_actionGroup0();
});

















































/*
 *
 *   obj2165: Event SwipeUp
 *
 */
 if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2165");
$("#obj2165").bind("touchmove click touchstart touchend mousedown mouseup", function(event) {
	event.preventDefault();
})
$("#obj2165").bind("SCswipeup", function(event) {
	if (window.obj2165_onSwipeUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2165_onSwipeUp is still running");
	return;
}
var obj2165_onSwipeUp_runningActionsCount = 0;
var obj2165_onSwipeUp_loopCount = 0;
obj2165_onSwipeUp_actionGroup0();
});





























































/*
 *
 *   obj2427: Event Touch Down
 *
 */
$("#obj2427").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2427_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2427_onTap is still running");
	return;
}
var obj2427_onTap_runningActionsCount = 0;
var obj2427_onTap_loopCount = 0;
obj2427_onTap_actionGroup0();
});






















































































/*
 *
 *   obj2598: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2598_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2598_onPageScroll is still running");
	return;
}
var obj2598_onPageScroll_runningActionsCount = 0;
var obj2598_onPageScroll_loopCount = 0;
obj2598_onPageScroll_actionGroup0();
});




/*
 *
 *   obj2580: Event Touch Down
 *
 */
$("#obj2580").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2580_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2580_onTap is still running");
	return;
}
var obj2580_onTap_runningActionsCount = 0;
var obj2580_onTap_loopCount = 0;
obj2580_onTap_actionGroup0();
});








































/*
 *
 *   obj2558: Event Touch Down
 *
 */
$("#obj2558").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2558_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_onTap is still running");
	return;
}
var obj2558_onTap_runningActionsCount = 0;
var obj2558_onTap_loopCount = 0;
obj2558_onTap_actionGroup0();
});






























/*
 *
 *   obj2551: Event Touch Down
 *
 */
$("#obj2551").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2551_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2551_onTap is still running");
	return;
}
var obj2551_onTap_runningActionsCount = 0;
var obj2551_onTap_loopCount = 0;
obj2551_onTap_actionGroup0();
});










/*
 *
 *   obj2548: Event Touch Down
 *
 */
$("#obj2548").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2548_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2548_onTap is still running");
	return;
}
var obj2548_onTap_runningActionsCount = 0;
var obj2548_onTap_loopCount = 0;
obj2548_onTap_actionGroup0();
});










/*
 *
 *   obj2545: Event Touch Down
 *
 */
$("#obj2545").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2545_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2545_onTap is still running");
	return;
}
var obj2545_onTap_runningActionsCount = 0;
var obj2545_onTap_loopCount = 0;
obj2545_onTap_actionGroup0();
});










/*
 *
 *   obj2542: Event Touch Down
 *
 */
$("#obj2542").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2542_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2542_onTap is still running");
	return;
}
var obj2542_onTap_runningActionsCount = 0;
var obj2542_onTap_loopCount = 0;
obj2542_onTap_actionGroup0();
});










/*
 *
 *   obj2539: Event Touch Down
 *
 */
$("#obj2539").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2539_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2539_onTap is still running");
	return;
}
var obj2539_onTap_runningActionsCount = 0;
var obj2539_onTap_loopCount = 0;
obj2539_onTap_actionGroup0();
});







		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj939").trigger('SCEventShow');
$("#obj942").trigger('SCEventShow');
$("#obj1137").trigger('SCEventShow');
$("#obj1165").trigger('SCEventShow');
$("#obj1168").trigger('SCEventShow');
$("#obj1487").trigger('SCEventShow');
$("#obj1611").trigger('SCEventShow');
$("#obj1859").trigger('SCEventShow');
$("#obj1856").trigger('SCEventShow');
$("#obj1864").trigger('SCEventShow');
$("#obj1879").trigger('SCEventShow');
$("#obj1877").trigger('SCEventShow');
$("#obj2161").trigger('SCEventShow');
$("#obj2163").trigger('SCEventShow');
$("#obj2165").trigger('SCEventShow');
$("#obj2171").trigger('SCEventShow');
$("#obj2432").trigger('SCEventShow');
$("#obj2430").trigger('SCEventShow');
$("#obj2427").trigger('SCEventShow');
$("#obj2444").trigger('SCEventShow');
$("#obj2449").trigger('SCEventShow');
$("#obj2455").trigger('SCEventShow');
$("#obj2457").trigger('SCEventShow');
$("#obj2463").trigger('SCEventShow');
$("#obj2466").trigger('SCEventShow');
$("#obj2468").trigger('SCEventShow');
$("#obj2598").trigger('SCEventShow');
$("#obj2580").trigger('SCEventShow');
$("#obj2576").trigger('SCEventShow');
$("#obj2578").trigger('SCEventShow');
$("#obj2574").trigger('SCEventShow');
$("#obj2556").trigger('SCEventShow');
$("#obj2554").trigger('SCEventShow');
$("#obj2551").trigger('SCEventShow');
$("#obj2548").trigger('SCEventShow');
$("#obj2545").trigger('SCEventShow');
$("#obj2542").trigger('SCEventShow');
$("#obj2539").trigger('SCEventShow');
	
});