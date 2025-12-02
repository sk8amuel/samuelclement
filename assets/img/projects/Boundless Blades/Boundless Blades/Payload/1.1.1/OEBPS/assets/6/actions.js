pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 1493;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj2341_onTap_activeActionGroupIndex = -1;
var obj2341_onTap_runningActionsCount = 0;
var obj2341_onTap_loopCount = 0;
var obj2901_onTap_activeActionGroupIndex = -1;
var obj2901_onTap_runningActionsCount = 0;
var obj2901_onTap_loopCount = 0;
var obj2879_onTap_activeActionGroupIndex = -1;
var obj2879_onTap_runningActionsCount = 0;
var obj2879_onTap_loopCount = 0;
var obj2872_onTap_activeActionGroupIndex = -1;
var obj2872_onTap_runningActionsCount = 0;
var obj2872_onTap_loopCount = 0;
var obj2869_onTap_activeActionGroupIndex = -1;
var obj2869_onTap_runningActionsCount = 0;
var obj2869_onTap_loopCount = 0;
var obj2866_onTap_activeActionGroupIndex = -1;
var obj2866_onTap_runningActionsCount = 0;
var obj2866_onTap_loopCount = 0;
var obj2863_onTap_activeActionGroupIndex = -1;
var obj2863_onTap_runningActionsCount = 0;
var obj2863_onTap_loopCount = 0;
var obj2860_onTap_activeActionGroupIndex = -1;
var obj2860_onTap_runningActionsCount = 0;
var obj2860_onTap_loopCount = 0;
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
		
obj2341_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2341_onTap_activeActionGroupIndex = -1;
		$("#obj2341").trigger("obj2341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2341) {
				console.warn("de-queueing event obj2341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2341_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2339 
hide_2345();
function hide_2345() {
	var selector = "#obj2339";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2341_onTap_runningActionsCount = obj2341_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2345(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2337 
hide_2346();
function hide_2346() {
	var selector = "#obj2337";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2341_onTap_runningActionsCount = obj2341_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2346(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2341_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2341_onTap_activeActionGroupIndex = -1;
		$("#obj2341").trigger("obj2341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2341) {
				console.warn("de-queueing event obj2341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2341_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1698 
move_2343();
function move_2343() {
	window.obj2341_onTap_runningActionsCount = obj2341_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1698");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-585";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj2341_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2341_onTap_activeActionGroupIndex = -1;
		$("#obj2341").trigger("obj2341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2341) {
				console.warn("de-queueing event obj2341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2341_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj2325
(function(){
	window.obj2341_onTap_runningActionsCount = obj2341_onTap_runningActionsCount + 1;

	var selector = "#obj2325";
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
	
		var animationType = "fadeInDown";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup3();
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
				window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2330 
move_2344();
function move_2344() {
	window.obj2341_onTap_runningActionsCount = obj2341_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-228";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2341_onTap_runningActionsCount = window.obj2341_onTap_runningActionsCount - 1;
if (window.obj2341_onTap_runningActionsCount < 0) {
	window.obj2341_onTap_runningActionsCount = 0;
} else if (window.obj2341_onTap_runningActionsCount == 0) {
	obj2341_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj2341_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2341_onTap_activeActionGroupIndex = -1;
		$("#obj2341").trigger("obj2341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2341) {
				console.warn("de-queueing event obj2341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2341_onTap_activeActionGroupIndex = 3;
	





















};
obj2901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2901_onTap_activeActionGroupIndex = -1;
		$("#obj2901").trigger("obj2901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2901) {
				console.warn("de-queueing event obj2901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2901_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2899 
hide_2906();
function hide_2906() {
	var selector = "#obj2899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutRight";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2906(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2901 
hide_2915();
function hide_2915() {
	var selector = "#obj2901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2915(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2879
(function(){
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

	var selector = "#obj2879";
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
					window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
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
				window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2895 
move_2905();
function move_2905() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2895");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2897 
move_2907();
function move_2907() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2897");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2877 
move_2908();
function move_2908() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2877");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2875 
move_2909();
function move_2909() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2875");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2872 
move_2910();
function move_2910() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2872");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2869 
move_2911();
function move_2911() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2869");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2866 
move_2912();
function move_2912() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2866");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2863 
move_2913();
function move_2913() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2863");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2860 
move_2914();
function move_2914() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2860");
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
			window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2895 
rotate_2903();
function rotate_2903() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2895";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2895';
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
	if (isInfinite) { rotate_2903_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2903_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2903_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2903_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2903_completed() {
	setTimeout(function() {
		window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2897 
rotate_2904();
function rotate_2904() {
	window.obj2901_onTap_runningActionsCount = obj2901_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2897";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2897';
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
	if (isInfinite) { rotate_2904_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2904_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2904_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2904_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2904_completed() {
	setTimeout(function() {
		window.obj2901_onTap_runningActionsCount = window.obj2901_onTap_runningActionsCount - 1;
if (window.obj2901_onTap_runningActionsCount < 0) {
	window.obj2901_onTap_runningActionsCount = 0;
} else if (window.obj2901_onTap_runningActionsCount == 0) {
	obj2901_onTap_actionGroup1();
}
	}, 1);
}














};
obj2901_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2901_onTap_activeActionGroupIndex = -1;
		$("#obj2901").trigger("obj2901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2901) {
				console.warn("de-queueing event obj2901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2901_onTap_activeActionGroupIndex = 1;
	





















};
obj2879_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2879_onTap_activeActionGroupIndex = -1;
		$("#obj2879").trigger("obj2879_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2879) {
				console.warn("de-queueing event obj2879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2879_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2879 
hide_2888();
function hide_2888() {
	var selector = "#obj2879";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2888(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2901
(function(){
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

	var selector = "#obj2901";
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
					window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
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
				window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2899
(function(){
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

	var selector = "#obj2899";
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
					window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
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
				window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2877 
move_2881();
function move_2881() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2877");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2875 
move_2882();
function move_2882() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2875");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2872 
move_2883();
function move_2883() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2872");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2869 
move_2884();
function move_2884() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2869");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2866 
move_2885();
function move_2885() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2866");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2863 
move_2886();
function move_2886() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2863");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2860 
move_2887();
function move_2887() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2860");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2895 
move_2891();
function move_2891() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2895");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2897 
move_2892();
function move_2892() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2897");
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
			window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2895 
rotate_2890();
function rotate_2890() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2895";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2895';
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
	if (isInfinite) { rotate_2890_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2890_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2890_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2890_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2890_completed() {
	setTimeout(function() {
		window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2897 
rotate_2893();
function rotate_2893() {
	window.obj2879_onTap_runningActionsCount = obj2879_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2897";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2897';
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
	if (isInfinite) { rotate_2893_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2893_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2893_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2893_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2893_completed() {
	setTimeout(function() {
		window.obj2879_onTap_runningActionsCount = window.obj2879_onTap_runningActionsCount - 1;
if (window.obj2879_onTap_runningActionsCount < 0) {
	window.obj2879_onTap_runningActionsCount = 0;
} else if (window.obj2879_onTap_runningActionsCount == 0) {
	obj2879_onTap_actionGroup1();
}
	}, 1);
}














};
obj2879_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2879_onTap_activeActionGroupIndex = -1;
		$("#obj2879").trigger("obj2879_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2879) {
				console.warn("de-queueing event obj2879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2879_onTap_activeActionGroupIndex = 1;
	





















};
obj2872_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2872_onTap_activeActionGroupIndex = -1;
		$("#obj2872").trigger("obj2872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2872) {
				console.warn("de-queueing event obj2872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2872_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2874();
function goToPage_2874() {
	window.obj2872_onTap_runningActionsCount = obj2872_onTap_runningActionsCount + 1;
	$("#anchor142")[0].click();
	window.obj2872_onTap_runningActionsCount = window.obj2872_onTap_runningActionsCount - 1;
if (window.obj2872_onTap_runningActionsCount < 0) {
	window.obj2872_onTap_runningActionsCount = 0;
} else if (window.obj2872_onTap_runningActionsCount == 0) {
	obj2872_onTap_actionGroup1();
}
}





















};
obj2872_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2872_onTap_activeActionGroupIndex = -1;
		$("#obj2872").trigger("obj2872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2872) {
				console.warn("de-queueing event obj2872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2872_onTap_activeActionGroupIndex = 1;
	





















};
obj2869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2869_onTap_activeActionGroupIndex = -1;
		$("#obj2869").trigger("obj2869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2869) {
				console.warn("de-queueing event obj2869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2869_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2871();
function goToPage_2871() {
	window.obj2869_onTap_runningActionsCount = obj2869_onTap_runningActionsCount + 1;
	$("#anchor143")[0].click();
	window.obj2869_onTap_runningActionsCount = window.obj2869_onTap_runningActionsCount - 1;
if (window.obj2869_onTap_runningActionsCount < 0) {
	window.obj2869_onTap_runningActionsCount = 0;
} else if (window.obj2869_onTap_runningActionsCount == 0) {
	obj2869_onTap_actionGroup1();
}
}





















};
obj2869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2869_onTap_activeActionGroupIndex = -1;
		$("#obj2869").trigger("obj2869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2869) {
				console.warn("de-queueing event obj2869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2869_onTap_activeActionGroupIndex = 1;
	





















};
obj2866_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2866_onTap_activeActionGroupIndex = -1;
		$("#obj2866").trigger("obj2866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2866) {
				console.warn("de-queueing event obj2866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2866_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2868();
function goToPage_2868() {
	window.obj2866_onTap_runningActionsCount = obj2866_onTap_runningActionsCount + 1;
	$("#anchor144")[0].click();
	window.obj2866_onTap_runningActionsCount = window.obj2866_onTap_runningActionsCount - 1;
if (window.obj2866_onTap_runningActionsCount < 0) {
	window.obj2866_onTap_runningActionsCount = 0;
} else if (window.obj2866_onTap_runningActionsCount == 0) {
	obj2866_onTap_actionGroup1();
}
}





















};
obj2866_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2866_onTap_activeActionGroupIndex = -1;
		$("#obj2866").trigger("obj2866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2866) {
				console.warn("de-queueing event obj2866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2866_onTap_activeActionGroupIndex = 1;
	





















};
obj2863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2863_onTap_activeActionGroupIndex = -1;
		$("#obj2863").trigger("obj2863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2863) {
				console.warn("de-queueing event obj2863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2863_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2865();
function goToPage_2865() {
	window.obj2863_onTap_runningActionsCount = obj2863_onTap_runningActionsCount + 1;
	$("#anchor145")[0].click();
	window.obj2863_onTap_runningActionsCount = window.obj2863_onTap_runningActionsCount - 1;
if (window.obj2863_onTap_runningActionsCount < 0) {
	window.obj2863_onTap_runningActionsCount = 0;
} else if (window.obj2863_onTap_runningActionsCount == 0) {
	obj2863_onTap_actionGroup1();
}
}





















};
obj2863_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2863_onTap_activeActionGroupIndex = -1;
		$("#obj2863").trigger("obj2863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2863) {
				console.warn("de-queueing event obj2863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2863_onTap_activeActionGroupIndex = 1;
	





















};
obj2860_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2860_onTap_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2862();
function goToPage_2862() {
	window.obj2860_onTap_runningActionsCount = obj2860_onTap_runningActionsCount + 1;
	$("#anchor146")[0].click();
	window.obj2860_onTap_runningActionsCount = window.obj2860_onTap_runningActionsCount - 1;
if (window.obj2860_onTap_runningActionsCount < 0) {
	window.obj2860_onTap_runningActionsCount = 0;
} else if (window.obj2860_onTap_runningActionsCount == 0) {
	obj2860_onTap_actionGroup1();
}
}





















};
obj2860_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2860_onTap_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































































/*
 *
 *   obj2341: Event Touch Down
 *
 */
$("#obj2341").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2341_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2341_onTap is still running");
	return;
}
var obj2341_onTap_runningActionsCount = 0;
var obj2341_onTap_loopCount = 0;
obj2341_onTap_actionGroup0();
});










/*
 *
 *   obj2901: Event Touch Down
 *
 */
$("#obj2901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2901_onTap is still running");
	return;
}
var obj2901_onTap_runningActionsCount = 0;
var obj2901_onTap_loopCount = 0;
obj2901_onTap_actionGroup0();
});








































/*
 *
 *   obj2879: Event Touch Down
 *
 */
$("#obj2879").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2879_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2879_onTap is still running");
	return;
}
var obj2879_onTap_runningActionsCount = 0;
var obj2879_onTap_loopCount = 0;
obj2879_onTap_actionGroup0();
});






























/*
 *
 *   obj2872: Event Touch Down
 *
 */
$("#obj2872").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2872_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2872_onTap is still running");
	return;
}
var obj2872_onTap_runningActionsCount = 0;
var obj2872_onTap_loopCount = 0;
obj2872_onTap_actionGroup0();
});










/*
 *
 *   obj2869: Event Touch Down
 *
 */
$("#obj2869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2869_onTap is still running");
	return;
}
var obj2869_onTap_runningActionsCount = 0;
var obj2869_onTap_loopCount = 0;
obj2869_onTap_actionGroup0();
});










/*
 *
 *   obj2866: Event Touch Down
 *
 */
$("#obj2866").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2866_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2866_onTap is still running");
	return;
}
var obj2866_onTap_runningActionsCount = 0;
var obj2866_onTap_loopCount = 0;
obj2866_onTap_actionGroup0();
});










/*
 *
 *   obj2863: Event Touch Down
 *
 */
$("#obj2863").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2863_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2863_onTap is still running");
	return;
}
var obj2863_onTap_runningActionsCount = 0;
var obj2863_onTap_loopCount = 0;
obj2863_onTap_actionGroup0();
});










/*
 *
 *   obj2860: Event Touch Down
 *
 */
$("#obj2860").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2860_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2860_onTap is still running");
	return;
}
var obj2860_onTap_runningActionsCount = 0;
var obj2860_onTap_loopCount = 0;
obj2860_onTap_actionGroup0();
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
	
$("#obj1700").trigger('SCEventShow');
$("#obj1698").trigger('SCEventShow');
$("#obj2330").trigger('SCEventShow');
$("#obj2339").trigger('SCEventShow');
$("#obj2337").trigger('SCEventShow');
$("#obj2341").trigger('SCEventShow');
$("#obj2901").trigger('SCEventShow');
$("#obj2897").trigger('SCEventShow');
$("#obj2899").trigger('SCEventShow');
$("#obj2895").trigger('SCEventShow');
$("#obj2877").trigger('SCEventShow');
$("#obj2875").trigger('SCEventShow');
$("#obj2872").trigger('SCEventShow');
$("#obj2869").trigger('SCEventShow');
$("#obj2866").trigger('SCEventShow');
$("#obj2863").trigger('SCEventShow');
$("#obj2860").trigger('SCEventShow');
	
});