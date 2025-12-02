pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 1155;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj1625_onPageScroll_activeActionGroupIndex = -1;
var obj1625_onPageScroll_runningActionsCount = 0;
var obj1625_onPageScroll_loopCount = 0;
var obj1639_onPageScroll_activeActionGroupIndex = -1;
var obj1639_onPageScroll_runningActionsCount = 0;
var obj1639_onPageScroll_loopCount = 0;
var obj1642_onPageScroll_activeActionGroupIndex = -1;
var obj1642_onPageScroll_runningActionsCount = 0;
var obj1642_onPageScroll_loopCount = 0;
var obj2648_onSwipeRight_activeActionGroupIndex = -1;
var obj2648_onSwipeRight_runningActionsCount = 0;
var obj2648_onSwipeRight_loopCount = 0;
var obj2674_onTap_activeActionGroupIndex = -1;
var obj2674_onTap_runningActionsCount = 0;
var obj2674_onTap_loopCount = 0;
var obj2748_onTap_activeActionGroupIndex = -1;
var obj2748_onTap_runningActionsCount = 0;
var obj2748_onTap_loopCount = 0;
var obj2726_onTap_activeActionGroupIndex = -1;
var obj2726_onTap_runningActionsCount = 0;
var obj2726_onTap_loopCount = 0;
var obj2719_onTap_activeActionGroupIndex = -1;
var obj2719_onTap_runningActionsCount = 0;
var obj2719_onTap_loopCount = 0;
var obj2716_onTap_activeActionGroupIndex = -1;
var obj2716_onTap_runningActionsCount = 0;
var obj2716_onTap_loopCount = 0;
var obj2713_onTap_activeActionGroupIndex = -1;
var obj2713_onTap_runningActionsCount = 0;
var obj2713_onTap_loopCount = 0;
var obj2710_onTap_activeActionGroupIndex = -1;
var obj2710_onTap_runningActionsCount = 0;
var obj2710_onTap_loopCount = 0;
var obj2707_onTap_activeActionGroupIndex = -1;
var obj2707_onTap_runningActionsCount = 0;
var obj2707_onTap_loopCount = 0;
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
		
obj1625_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1625_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1625").trigger("obj1625_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1625) {
				console.warn("de-queueing event obj1625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1625_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1633();
function runjs_1633() {
	window.obj1625_onPageScroll_runningActionsCount = obj1625_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1625", { left: 93, top: 916 }, { left: 93, top: 842 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1625_onPageScroll_runningActionsCount = window.obj1625_onPageScroll_runningActionsCount - 1;
if (window.obj1625_onPageScroll_runningActionsCount < 0) {
	window.obj1625_onPageScroll_runningActionsCount = 0;
} else if (window.obj1625_onPageScroll_runningActionsCount == 0) {
	obj1625_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1625_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1625_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1625").trigger("obj1625_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1625) {
				console.warn("de-queueing event obj1625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1625_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj1639_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1639_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1639").trigger("obj1639_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1639) {
				console.warn("de-queueing event obj1639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1639_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1645();
function runjs_1645() {
	window.obj1639_onPageScroll_runningActionsCount = obj1639_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1639", { left: 48, top: 1255 }, { left: 48, top: 876 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1639_onPageScroll_runningActionsCount = window.obj1639_onPageScroll_runningActionsCount - 1;
if (window.obj1639_onPageScroll_runningActionsCount < 0) {
	window.obj1639_onPageScroll_runningActionsCount = 0;
} else if (window.obj1639_onPageScroll_runningActionsCount == 0) {
	obj1639_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1639_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1639_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1639").trigger("obj1639_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1639) {
				console.warn("de-queueing event obj1639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1639_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj1642_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1642_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1642").trigger("obj1642_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1642) {
				console.warn("de-queueing event obj1642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1642_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1647();
function runjs_1647() {
	window.obj1642_onPageScroll_runningActionsCount = obj1642_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1642", { left: 402, top: 1560 }, { left: 402, top: 1525 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1642_onPageScroll_runningActionsCount = window.obj1642_onPageScroll_runningActionsCount - 1;
if (window.obj1642_onPageScroll_runningActionsCount < 0) {
	window.obj1642_onPageScroll_runningActionsCount = 0;
} else if (window.obj1642_onPageScroll_runningActionsCount == 0) {
	obj1642_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1642_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1642_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1642").trigger("obj1642_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1642) {
				console.warn("de-queueing event obj1642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1642_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2648_onSwipeRight_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2694 
hide_2698();
function hide_2698() {
	var selector = "#obj2694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2698(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2696 
hide_2699();
function hide_2699() {
	var selector = "#obj2696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2699(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

//	action: move
//	target: obj1200 
move_2670();
function move_2670() {
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj1200");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1057";
	var moveY = "+=-572";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1199 
move_2672();
function move_2672() {
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj1199");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-957";
	var moveY = "+=219";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj1200 
rotate_2671();
function rotate_2671() {
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;
	
	var targetObjectId = "#obj1200";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1200';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-47.26097';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2671_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2671_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2671_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2671_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2671_completed() {
	setTimeout(function() {
		window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup1();
}
	}, 1);
}














};
obj2648_onSwipeRight_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1200 
move_2673();
function move_2673() {
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj1200");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1063";
	var moveY = "+=815";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}



















};
obj2648_onSwipeRight_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj2681
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2681";
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
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup3();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2648_onSwipeRight_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj2683
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2683";
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
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup4();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2648_onSwipeRight_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj2685
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2685";
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
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2688
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2688";
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
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2690
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2690";
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
	
		var animationType = "fadeInLeft";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2692
(function(){
	window.obj2648_onSwipeRight_runningActionsCount = obj2648_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj2692";
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
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
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
				window.obj2648_onSwipeRight_runningActionsCount = window.obj2648_onSwipeRight_runningActionsCount - 1;
if (window.obj2648_onSwipeRight_runningActionsCount < 0) {
	window.obj2648_onSwipeRight_runningActionsCount = 0;
} else if (window.obj2648_onSwipeRight_runningActionsCount == 0) {
	obj2648_onSwipeRight_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2648_onSwipeRight_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2648_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj2648").trigger("obj2648_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2648) {
				console.warn("de-queueing event obj2648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2648_onSwipeRight_activeActionGroupIndex = 5;
	





















};
obj2674_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2674_onTap_activeActionGroupIndex = -1;
		$("#obj2674").trigger("obj2674_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2674) {
				console.warn("de-queueing event obj2674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2674_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2676();
function goToPage_2676() {
	window.obj2674_onTap_runningActionsCount = obj2674_onTap_runningActionsCount + 1;
	$("#anchor136")[0].click();
	window.obj2674_onTap_runningActionsCount = window.obj2674_onTap_runningActionsCount - 1;
if (window.obj2674_onTap_runningActionsCount < 0) {
	window.obj2674_onTap_runningActionsCount = 0;
} else if (window.obj2674_onTap_runningActionsCount == 0) {
	obj2674_onTap_actionGroup1();
}
}





















};
obj2674_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2674_onTap_activeActionGroupIndex = -1;
		$("#obj2674").trigger("obj2674_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2674) {
				console.warn("de-queueing event obj2674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2674_onTap_activeActionGroupIndex = 1;
	





















};
obj2748_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2748_onTap_activeActionGroupIndex = -1;
		$("#obj2748").trigger("obj2748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2748) {
				console.warn("de-queueing event obj2748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2748_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2744 
hide_2753();
function hide_2753() {
	var selector = "#obj2744";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutRight";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2753(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2748 
hide_2762();
function hide_2762() {
	var selector = "#obj2748";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2762(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2726
(function(){
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

	var selector = "#obj2726";
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
					window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
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
				window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2742 
move_2752();
function move_2752() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2742");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2746 
move_2754();
function move_2754() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2746");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2724 
move_2755();
function move_2755() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2724");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2722 
move_2756();
function move_2756() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2722");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2719 
move_2757();
function move_2757() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2719");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2716 
move_2758();
function move_2758() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2716");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2713 
move_2759();
function move_2759() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2713");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2710 
move_2760();
function move_2760() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2710");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2707 
move_2761();
function move_2761() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2707");
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
			window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2742 
rotate_2750();
function rotate_2750() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2742";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2742';
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
	if (isInfinite) { rotate_2750_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2750_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2750_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2750_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2750_completed() {
	setTimeout(function() {
		window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2746 
rotate_2751();
function rotate_2751() {
	window.obj2748_onTap_runningActionsCount = obj2748_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2746";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2746';
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
	if (isInfinite) { rotate_2751_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2751_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2751_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2751_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2751_completed() {
	setTimeout(function() {
		window.obj2748_onTap_runningActionsCount = window.obj2748_onTap_runningActionsCount - 1;
if (window.obj2748_onTap_runningActionsCount < 0) {
	window.obj2748_onTap_runningActionsCount = 0;
} else if (window.obj2748_onTap_runningActionsCount == 0) {
	obj2748_onTap_actionGroup1();
}
	}, 1);
}














};
obj2748_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2748_onTap_activeActionGroupIndex = -1;
		$("#obj2748").trigger("obj2748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2748) {
				console.warn("de-queueing event obj2748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2748_onTap_activeActionGroupIndex = 1;
	





















};
obj2726_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2726_onTap_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2726) {
				console.warn("de-queueing event obj2726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2726_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2726 
hide_2735();
function hide_2735() {
	var selector = "#obj2726";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2735(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2748
(function(){
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

	var selector = "#obj2748";
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
					window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
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
				window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2744
(function(){
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

	var selector = "#obj2744";
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
					window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
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
				window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2724 
move_2728();
function move_2728() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2724");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2722 
move_2729();
function move_2729() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2722");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2719 
move_2730();
function move_2730() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2719");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2716 
move_2731();
function move_2731() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2716");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2713 
move_2732();
function move_2732() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2713");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2710 
move_2733();
function move_2733() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2710");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2707 
move_2734();
function move_2734() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2707");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2742 
move_2738();
function move_2738() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2742");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2746 
move_2739();
function move_2739() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2746");
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
			window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2742 
rotate_2737();
function rotate_2737() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2742";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2742';
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
	if (isInfinite) { rotate_2737_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2737_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2737_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2737_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2737_completed() {
	setTimeout(function() {
		window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2746 
rotate_2740();
function rotate_2740() {
	window.obj2726_onTap_runningActionsCount = obj2726_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2746";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2746';
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
	if (isInfinite) { rotate_2740_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2740_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2740_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2740_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2740_completed() {
	setTimeout(function() {
		window.obj2726_onTap_runningActionsCount = window.obj2726_onTap_runningActionsCount - 1;
if (window.obj2726_onTap_runningActionsCount < 0) {
	window.obj2726_onTap_runningActionsCount = 0;
} else if (window.obj2726_onTap_runningActionsCount == 0) {
	obj2726_onTap_actionGroup1();
}
	}, 1);
}














};
obj2726_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2726_onTap_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2726) {
				console.warn("de-queueing event obj2726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2726_onTap_activeActionGroupIndex = 1;
	





















};
obj2719_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2719_onTap_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2719) {
				console.warn("de-queueing event obj2719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2719_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2721();
function goToPage_2721() {
	window.obj2719_onTap_runningActionsCount = obj2719_onTap_runningActionsCount + 1;
	$("#anchor137")[0].click();
	window.obj2719_onTap_runningActionsCount = window.obj2719_onTap_runningActionsCount - 1;
if (window.obj2719_onTap_runningActionsCount < 0) {
	window.obj2719_onTap_runningActionsCount = 0;
} else if (window.obj2719_onTap_runningActionsCount == 0) {
	obj2719_onTap_actionGroup1();
}
}





















};
obj2719_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2719_onTap_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2719) {
				console.warn("de-queueing event obj2719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2719_onTap_activeActionGroupIndex = 1;
	





















};
obj2716_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2716_onTap_activeActionGroupIndex = -1;
		$("#obj2716").trigger("obj2716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2716) {
				console.warn("de-queueing event obj2716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2716_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2718();
function goToPage_2718() {
	window.obj2716_onTap_runningActionsCount = obj2716_onTap_runningActionsCount + 1;
	$("#anchor138")[0].click();
	window.obj2716_onTap_runningActionsCount = window.obj2716_onTap_runningActionsCount - 1;
if (window.obj2716_onTap_runningActionsCount < 0) {
	window.obj2716_onTap_runningActionsCount = 0;
} else if (window.obj2716_onTap_runningActionsCount == 0) {
	obj2716_onTap_actionGroup1();
}
}





















};
obj2716_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2716_onTap_activeActionGroupIndex = -1;
		$("#obj2716").trigger("obj2716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2716) {
				console.warn("de-queueing event obj2716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2716_onTap_activeActionGroupIndex = 1;
	





















};
obj2713_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2713_onTap_activeActionGroupIndex = -1;
		$("#obj2713").trigger("obj2713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2713) {
				console.warn("de-queueing event obj2713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2713_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2715();
function goToPage_2715() {
	window.obj2713_onTap_runningActionsCount = obj2713_onTap_runningActionsCount + 1;
	$("#anchor139")[0].click();
	window.obj2713_onTap_runningActionsCount = window.obj2713_onTap_runningActionsCount - 1;
if (window.obj2713_onTap_runningActionsCount < 0) {
	window.obj2713_onTap_runningActionsCount = 0;
} else if (window.obj2713_onTap_runningActionsCount == 0) {
	obj2713_onTap_actionGroup1();
}
}





















};
obj2713_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2713_onTap_activeActionGroupIndex = -1;
		$("#obj2713").trigger("obj2713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2713) {
				console.warn("de-queueing event obj2713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2713_onTap_activeActionGroupIndex = 1;
	





















};
obj2710_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2710_onTap_activeActionGroupIndex = -1;
		$("#obj2710").trigger("obj2710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2710) {
				console.warn("de-queueing event obj2710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2710_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2712();
function goToPage_2712() {
	window.obj2710_onTap_runningActionsCount = obj2710_onTap_runningActionsCount + 1;
	$("#anchor140")[0].click();
	window.obj2710_onTap_runningActionsCount = window.obj2710_onTap_runningActionsCount - 1;
if (window.obj2710_onTap_runningActionsCount < 0) {
	window.obj2710_onTap_runningActionsCount = 0;
} else if (window.obj2710_onTap_runningActionsCount == 0) {
	obj2710_onTap_actionGroup1();
}
}





















};
obj2710_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2710_onTap_activeActionGroupIndex = -1;
		$("#obj2710").trigger("obj2710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2710) {
				console.warn("de-queueing event obj2710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2710_onTap_activeActionGroupIndex = 1;
	





















};
obj2707_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2707_onTap_activeActionGroupIndex = -1;
		$("#obj2707").trigger("obj2707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2707) {
				console.warn("de-queueing event obj2707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2707_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2709();
function goToPage_2709() {
	window.obj2707_onTap_runningActionsCount = obj2707_onTap_runningActionsCount + 1;
	$("#anchor141")[0].click();
	window.obj2707_onTap_runningActionsCount = window.obj2707_onTap_runningActionsCount - 1;
if (window.obj2707_onTap_runningActionsCount < 0) {
	window.obj2707_onTap_runningActionsCount = 0;
} else if (window.obj2707_onTap_runningActionsCount == 0) {
	obj2707_onTap_actionGroup1();
}
}





















};
obj2707_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2707_onTap_activeActionGroupIndex = -1;
		$("#obj2707").trigger("obj2707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2707) {
				console.warn("de-queueing event obj2707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2707_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































/*
 *
 *   obj1625: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1625_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1625_onPageScroll is still running");
	return;
}
var obj1625_onPageScroll_runningActionsCount = 0;
var obj1625_onPageScroll_loopCount = 0;
obj1625_onPageScroll_actionGroup0();
});










/*
 *
 *   obj1639: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1639_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1639_onPageScroll is still running");
	return;
}
var obj1639_onPageScroll_runningActionsCount = 0;
var obj1639_onPageScroll_loopCount = 0;
obj1639_onPageScroll_actionGroup0();
});










/*
 *
 *   obj1642: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1642_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1642_onPageScroll is still running");
	return;
}
var obj1642_onPageScroll_runningActionsCount = 0;
var obj1642_onPageScroll_loopCount = 0;
obj1642_onPageScroll_actionGroup0();
});


























































































































/*
 *
 *   obj2648: Event SwipeRight
 *
 */
 if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2648");
$("#obj2648").bind("touchmove click touchstart touchend mousedown mouseup", function(event) {
	event.preventDefault();
})
$("#obj2648").bind("SCswiperight", function(event) {
	if (window.obj2648_onSwipeRight_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2648_onSwipeRight is still running");
	return;
}
var obj2648_onSwipeRight_runningActionsCount = 0;
var obj2648_onSwipeRight_loopCount = 0;
obj2648_onSwipeRight_actionGroup0();
});































/*
 *
 *   obj2674: Event Touch Down
 *
 */
$("#obj2674").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2674_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2674_onTap is still running");
	return;
}
var obj2674_onTap_runningActionsCount = 0;
var obj2674_onTap_loopCount = 0;
obj2674_onTap_actionGroup0();
});


























































































/*
 *
 *   obj2748: Event Touch Down
 *
 */
$("#obj2748").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2748_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2748_onTap is still running");
	return;
}
var obj2748_onTap_runningActionsCount = 0;
var obj2748_onTap_loopCount = 0;
obj2748_onTap_actionGroup0();
});








































/*
 *
 *   obj2726: Event Touch Down
 *
 */
$("#obj2726").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2726_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2726_onTap is still running");
	return;
}
var obj2726_onTap_runningActionsCount = 0;
var obj2726_onTap_loopCount = 0;
obj2726_onTap_actionGroup0();
});






























/*
 *
 *   obj2719: Event Touch Down
 *
 */
$("#obj2719").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2719_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2719_onTap is still running");
	return;
}
var obj2719_onTap_runningActionsCount = 0;
var obj2719_onTap_loopCount = 0;
obj2719_onTap_actionGroup0();
});










/*
 *
 *   obj2716: Event Touch Down
 *
 */
$("#obj2716").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2716_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2716_onTap is still running");
	return;
}
var obj2716_onTap_runningActionsCount = 0;
var obj2716_onTap_loopCount = 0;
obj2716_onTap_actionGroup0();
});










/*
 *
 *   obj2713: Event Touch Down
 *
 */
$("#obj2713").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2713_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2713_onTap is still running");
	return;
}
var obj2713_onTap_runningActionsCount = 0;
var obj2713_onTap_loopCount = 0;
obj2713_onTap_actionGroup0();
});










/*
 *
 *   obj2710: Event Touch Down
 *
 */
$("#obj2710").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2710_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2710_onTap is still running");
	return;
}
var obj2710_onTap_runningActionsCount = 0;
var obj2710_onTap_loopCount = 0;
obj2710_onTap_actionGroup0();
});










/*
 *
 *   obj2707: Event Touch Down
 *
 */
$("#obj2707").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2707_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2707_onTap is still running");
	return;
}
var obj2707_onTap_runningActionsCount = 0;
var obj2707_onTap_loopCount = 0;
obj2707_onTap_actionGroup0();
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
	
$("#obj1183").trigger('SCEventShow');
$("#obj1616").trigger('SCEventShow');
$("#obj1195").trigger('SCEventShow');
$("#obj1192").trigger('SCEventShow');
$("#obj1625").trigger('SCEventShow');
$("#obj1639").trigger('SCEventShow');
$("#obj1642").trigger('SCEventShow');
$("#obj2602").trigger('SCEventShow');
$("#obj1650").trigger('SCEventShow');
$("#obj1654").trigger('SCEventShow');
$("#obj2471").trigger('SCEventShow');
$("#obj2474").trigger('SCEventShow');
$("#obj1200").trigger('SCEventShow');
$("#obj1199").trigger('SCEventShow');
$("#obj2605").trigger('SCEventShow');
$("#obj2608").trigger('SCEventShow');
$("#obj2612").trigger('SCEventShow');
$("#obj2614").trigger('SCEventShow');
$("#obj2622").trigger('SCEventShow');
$("#obj2648").trigger('SCEventShow');
$("#obj2679").trigger('SCEventShow');
$("#obj2677").trigger('SCEventShow');
$("#obj2674").trigger('SCEventShow');
$("#obj2694").trigger('SCEventShow');
$("#obj2696").trigger('SCEventShow');
$("#obj2748").trigger('SCEventShow');
$("#obj2746").trigger('SCEventShow');
$("#obj2744").trigger('SCEventShow');
$("#obj2742").trigger('SCEventShow');
$("#obj2724").trigger('SCEventShow');
$("#obj2722").trigger('SCEventShow');
$("#obj2719").trigger('SCEventShow');
$("#obj2716").trigger('SCEventShow');
$("#obj2713").trigger('SCEventShow');
$("#obj2710").trigger('SCEventShow');
$("#obj2707").trigger('SCEventShow');
	
});