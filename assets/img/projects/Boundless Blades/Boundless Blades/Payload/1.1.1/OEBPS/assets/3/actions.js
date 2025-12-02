pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj1228_onPageScroll_activeActionGroupIndex = -1;
var obj1228_onPageScroll_runningActionsCount = 0;
var obj1228_onPageScroll_loopCount = 0;
var obj163_onPageScroll_activeActionGroupIndex = -1;
var obj163_onPageScroll_runningActionsCount = 0;
var obj163_onPageScroll_loopCount = 0;
var obj1266_onPageScroll_activeActionGroupIndex = -1;
var obj1266_onPageScroll_runningActionsCount = 0;
var obj1266_onPageScroll_loopCount = 0;
var obj1269_onPageScroll_activeActionGroupIndex = -1;
var obj1269_onPageScroll_runningActionsCount = 0;
var obj1269_onPageScroll_loopCount = 0;
var obj1272_onPageScroll_activeActionGroupIndex = -1;
var obj1272_onPageScroll_runningActionsCount = 0;
var obj1272_onPageScroll_loopCount = 0;
var obj1275_onPageScroll_activeActionGroupIndex = -1;
var obj1275_onPageScroll_runningActionsCount = 0;
var obj1275_onPageScroll_loopCount = 0;
var obj231_onSwipeRight_activeActionGroupIndex = -1;
var obj231_onSwipeRight_runningActionsCount = 0;
var obj231_onSwipeRight_loopCount = 0;
var obj2243_onTap_activeActionGroupIndex = -1;
var obj2243_onTap_runningActionsCount = 0;
var obj2243_onTap_loopCount = 0;
var obj2521_onTap_activeActionGroupIndex = -1;
var obj2521_onTap_runningActionsCount = 0;
var obj2521_onTap_loopCount = 0;
var obj2499_onTap_activeActionGroupIndex = -1;
var obj2499_onTap_runningActionsCount = 0;
var obj2499_onTap_loopCount = 0;
var obj2492_onTap_activeActionGroupIndex = -1;
var obj2492_onTap_runningActionsCount = 0;
var obj2492_onTap_loopCount = 0;
var obj2489_onTap_activeActionGroupIndex = -1;
var obj2489_onTap_runningActionsCount = 0;
var obj2489_onTap_loopCount = 0;
var obj2486_onTap_activeActionGroupIndex = -1;
var obj2486_onTap_runningActionsCount = 0;
var obj2486_onTap_loopCount = 0;
var obj2483_onTap_activeActionGroupIndex = -1;
var obj2483_onTap_runningActionsCount = 0;
var obj2483_onTap_loopCount = 0;
var obj2480_onTap_activeActionGroupIndex = -1;
var obj2480_onTap_runningActionsCount = 0;
var obj2480_onTap_loopCount = 0;
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
		
obj1228_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1231();
function runjs_1231() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj211", { x: 1, y: 1 }, { x: 0.2, y: 0.2 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1232();
function runjs_1232() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj865", { left: 580, top: 1218 }, { left: 581, top: 898 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup2();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1326();
function runjs_1326() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj1319", { x: 1, y: 1 }, { x: 18, y: 18 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup3();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_1341();
function runjs_1341() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1335", { left: 276, top: 2708 }, { left: 292, top: 2138 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup4();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_1359();
function runjs_1359() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1338", { left: 380, top: 2761 }, { left: 400, top: 2241 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup5();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_1348();
function runjs_1348() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1346", { left: 366, top: 2826 }, { left: 391, top: 2359 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup6();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_1349();
function runjs_1349() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj1309", { x: 1, y: 1 }, { x: 0.5, y: 0.5 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup7();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_1340();
function runjs_1340() {
	window.obj1228_onPageScroll_runningActionsCount = obj1228_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1319", { left: 529, top: 2668 }, { left: 557, top: 2441 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1228_onPageScroll_runningActionsCount = window.obj1228_onPageScroll_runningActionsCount - 1;
if (window.obj1228_onPageScroll_runningActionsCount < 0) {
	window.obj1228_onPageScroll_runningActionsCount = 0;
} else if (window.obj1228_onPageScroll_runningActionsCount == 0) {
	obj1228_onPageScroll_actionGroup8();
}
	}, 1);
}







};
obj1228_onPageScroll_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1228_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1228) {
				console.warn("de-queueing event obj1228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1228_onPageScroll_activeActionGroupIndex = 8;
	





















};
obj163_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj163_onPageScroll_activeActionGroupIndex = -1;
		$("#obj163").trigger("obj163_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 163) {
				console.warn("de-queueing event obj163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj163_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_832();
function runjs_832() {
	window.obj163_onPageScroll_runningActionsCount = obj163_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj211", { x: 1, y: 1 }, { x: 0.2, y: 0.2 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj163_onPageScroll_runningActionsCount = window.obj163_onPageScroll_runningActionsCount - 1;
if (window.obj163_onPageScroll_runningActionsCount < 0) {
	window.obj163_onPageScroll_runningActionsCount = 0;
} else if (window.obj163_onPageScroll_runningActionsCount == 0) {
	obj163_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj163_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj163_onPageScroll_activeActionGroupIndex = -1;
		$("#obj163").trigger("obj163_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 163) {
				console.warn("de-queueing event obj163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj163_onPageScroll_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_867();
function runjs_867() {
	window.obj163_onPageScroll_runningActionsCount = obj163_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj865", { left: 580, top: 1218 }, { left: 581, top: 303 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj163_onPageScroll_runningActionsCount = window.obj163_onPageScroll_runningActionsCount - 1;
if (window.obj163_onPageScroll_runningActionsCount < 0) {
	window.obj163_onPageScroll_runningActionsCount = 0;
} else if (window.obj163_onPageScroll_runningActionsCount == 0) {
	obj163_onPageScroll_actionGroup2();
}
	}, 1);
}







};
obj163_onPageScroll_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj163_onPageScroll_activeActionGroupIndex = -1;
		$("#obj163").trigger("obj163_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 163) {
				console.warn("de-queueing event obj163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj163_onPageScroll_activeActionGroupIndex = 2;
	





















};
obj1266_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1266_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1266").trigger("obj1266_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1266) {
				console.warn("de-queueing event obj1266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1266_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1283();
function runjs_1283() {
	window.obj1266_onPageScroll_runningActionsCount = obj1266_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1266", { left: 757, top: 939 }, { left: 319, top: 940 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1266_onPageScroll_runningActionsCount = window.obj1266_onPageScroll_runningActionsCount - 1;
if (window.obj1266_onPageScroll_runningActionsCount < 0) {
	window.obj1266_onPageScroll_runningActionsCount = 0;
} else if (window.obj1266_onPageScroll_runningActionsCount == 0) {
	obj1266_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1266_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1266_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1266").trigger("obj1266_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1266) {
				console.warn("de-queueing event obj1266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1266_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj1269_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1269_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1269").trigger("obj1269_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1269) {
				console.warn("de-queueing event obj1269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1269_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1280();
function runjs_1280() {
	window.obj1269_onPageScroll_runningActionsCount = obj1269_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1269", { left: 346, top: 945 }, { left: -92, top: 940 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1269_onPageScroll_runningActionsCount = window.obj1269_onPageScroll_runningActionsCount - 1;
if (window.obj1269_onPageScroll_runningActionsCount < 0) {
	window.obj1269_onPageScroll_runningActionsCount = 0;
} else if (window.obj1269_onPageScroll_runningActionsCount == 0) {
	obj1269_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1269_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1269_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1269").trigger("obj1269_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1269) {
				console.warn("de-queueing event obj1269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1269_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj1272_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1272_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1272").trigger("obj1272_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1272) {
				console.warn("de-queueing event obj1272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1272_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1278();
function runjs_1278() {
	window.obj1272_onPageScroll_runningActionsCount = obj1272_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1272", { left: 55, top: 942 }, { left: -388, top: 939 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1272_onPageScroll_runningActionsCount = window.obj1272_onPageScroll_runningActionsCount - 1;
if (window.obj1272_onPageScroll_runningActionsCount < 0) {
	window.obj1272_onPageScroll_runningActionsCount = 0;
} else if (window.obj1272_onPageScroll_runningActionsCount == 0) {
	obj1272_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1272_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1272_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1272").trigger("obj1272_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1272) {
				console.warn("de-queueing event obj1272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1272_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj1275_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1275_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1275").trigger("obj1275_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1275) {
				console.warn("de-queueing event obj1275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1275_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1285();
function runjs_1285() {
	window.obj1275_onPageScroll_runningActionsCount = obj1275_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj1275", { left: 1154, top: 944 }, { left: 716, top: 943 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj1275_onPageScroll_runningActionsCount = window.obj1275_onPageScroll_runningActionsCount - 1;
if (window.obj1275_onPageScroll_runningActionsCount < 0) {
	window.obj1275_onPageScroll_runningActionsCount = 0;
} else if (window.obj1275_onPageScroll_runningActionsCount == 0) {
	obj1275_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj1275_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1275_onPageScroll_activeActionGroupIndex = -1;
		$("#obj1275").trigger("obj1275_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1275) {
				console.warn("de-queueing event obj1275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1275_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj231_onSwipeRight_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 231) {
				console.warn("de-queueing event obj231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj231_onSwipeRight_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj184 
move_234();
function move_234() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj184");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1008";
	var moveY = "+=-169";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj183 
move_236();
function move_236() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj183");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-166";
	var moveY = "+=-90";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj184 
rotate_235();
function rotate_235() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var targetObjectId = "#obj184";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj184';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '97.13565';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_235_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_235_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_235_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_235_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_235_completed() {
	setTimeout(function() {
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj183 
rotate_250();
function rotate_250() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var targetObjectId = "#obj183";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj183';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '33.52717';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_250_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_250_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_250_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_250_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_250_completed() {
	setTimeout(function() {
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup1();
}
	}, 1);
}














};
obj231_onSwipeRight_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 231) {
				console.warn("de-queueing event obj231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj231_onSwipeRight_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj207 
hide_239();
function hide_239() {
	var selector = "#obj207";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_239(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj216 
hide_240();
function hide_240() {
	var selector = "#obj216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_240(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj321 
hide_241();
function hide_241() {
	var selector = "#obj321";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_241(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj211
(function(){
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj211";
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
					window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
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
				window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj247
(function(){
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj247";
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
					window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
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
				window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj865
(function(){
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

	var selector = "#obj865";
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
					window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
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
				window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj184 
move_237();
function move_237() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj184");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=9";
	var moveY = "+=523";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj211 
move_242();
function move_242() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj211");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-98";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj193 
move_243();
function move_243() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=149";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj196 
move_244();
function move_244() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj196");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=138";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj247 
move_249();
function move_249() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;

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
	var targetObject = $("#obj247");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-309";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
		}, 1);
	});
}







//	action: scale
//	target: obj193 
scale_246();
function scale_246() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var targetObjectId = "#obj193";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj193';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.7';
	var scaleYValue = '0.7';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_246_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_246_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_246_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_246_completed() {
	setTimeout(function() {
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj196 
scale_245();
function scale_245() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	
	var targetObjectId = "#obj196";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj196';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.7';
	var scaleYValue = '0.7';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_245_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_245_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_245_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_245_completed() {
	setTimeout(function() {
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup2();
}
	}, 1);
}












};
obj231_onSwipeRight_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 231) {
				console.warn("de-queueing event obj231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj231_onSwipeRight_activeActionGroupIndex = 2;
	




//	action: playMovie
//	target: obj321 
playMovie_392();
function playMovie_392() {
	window.obj231_onSwipeRight_runningActionsCount = obj231_onSwipeRight_runningActionsCount + 1;
	var myVideo = $("#obj321")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	var doFullscreen = false;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	try {
		if (doFullscreen) {
			function scheduleFullscreen(msec, tries) {
				if (typeof(tries) === "undefined") {
					tries = 1;
				} else if (tries > 5) return;
				var fn;
				if (myVideo.requestFullscreen) {
					console.warn("requestFullscreen;");
					fn = myVideo.requestFullscreen;
				} else if (myVideo.mozRequestFullScreen) {
					console.warn("mozRequestFullScreen;");
					fn = myVideo.mozRequestFullScreen;
				} else if (myVideo.webkitRequestFullscreen) {
					console.warn("webkitRequestFullscreen;");
					fn = myVideo.webkitRequestFullscreen;
				} else if (myVideo.msRequestFullscreen) {
					console.warn("msRequestFullscreen;");
					fn = myVideo.msRequestFullscreen;
				} else if (myVideo.webkitEnterFullscreen) {
					console.warn("webkitEnterFullscreen");
					fn = myVideo.webkitEnterFullscreen
				} else {
					console.warn("no fullscreen support");
					return;
				}
				if (fn == myVideo.webkitEnterFullscreen) {
					try {
						fn.call(myVideo);
					} catch (error) {
						scheduleFullscreen(1000, tries++);
					}
				} else {
					fn.call(myVideo).catch(function (err) { scheduleFullscreen(1000, tries++); });
				}
			}
			scheduleFullscreen(0);
		}
	} catch (error) {
		// do nothing, just don't go fullscreen
	}
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup3();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj231_onSwipeRight_runningActionsCount = window.obj231_onSwipeRight_runningActionsCount - 1;
if (window.obj231_onSwipeRight_runningActionsCount < 0) {
	window.obj231_onSwipeRight_runningActionsCount = 0;
} else if (window.obj231_onSwipeRight_runningActionsCount == 0) {
	obj231_onSwipeRight_actionGroup3();
}
	}
}

















};
obj231_onSwipeRight_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj231_onSwipeRight_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onSwipeRight_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 231) {
				console.warn("de-queueing event obj231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj231_onSwipeRight_activeActionGroupIndex = 3;
	





















};
obj2243_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2243_onTap_activeActionGroupIndex = -1;
		$("#obj2243").trigger("obj2243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2243) {
				console.warn("de-queueing event obj2243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2243_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2245();
function goToPage_2245() {
	window.obj2243_onTap_runningActionsCount = obj2243_onTap_runningActionsCount + 1;
	$("#anchor122")[0].click();
	window.obj2243_onTap_runningActionsCount = window.obj2243_onTap_runningActionsCount - 1;
if (window.obj2243_onTap_runningActionsCount < 0) {
	window.obj2243_onTap_runningActionsCount = 0;
} else if (window.obj2243_onTap_runningActionsCount == 0) {
	obj2243_onTap_actionGroup1();
}
}





















};
obj2243_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2243_onTap_activeActionGroupIndex = -1;
		$("#obj2243").trigger("obj2243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2243) {
				console.warn("de-queueing event obj2243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2243_onTap_activeActionGroupIndex = 1;
	





















};
obj2521_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2521_onTap_activeActionGroupIndex = -1;
		$("#obj2521").trigger("obj2521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2521) {
				console.warn("de-queueing event obj2521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2521_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2519 
hide_2526();
function hide_2526() {
	var selector = "#obj2519";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutRight";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2526(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2521 
hide_2535();
function hide_2535() {
	var selector = "#obj2521";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2535(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2499
(function(){
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

	var selector = "#obj2499";
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
					window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
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
				window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2515 
move_2525();
function move_2525() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2515");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2517 
move_2527();
function move_2527() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2517");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2497 
move_2528();
function move_2528() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2497");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2495 
move_2529();
function move_2529() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2495");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2492 
move_2530();
function move_2530() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2492");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2489 
move_2531();
function move_2531() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2489");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2486 
move_2532();
function move_2532() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2486");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2483 
move_2533();
function move_2533() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2483");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2480 
move_2534();
function move_2534() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2480");
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
			window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2515 
rotate_2523();
function rotate_2523() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2515";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2515';
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
	if (isInfinite) { rotate_2523_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2523_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2523_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2523_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2523_completed() {
	setTimeout(function() {
		window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2517 
rotate_2524();
function rotate_2524() {
	window.obj2521_onTap_runningActionsCount = obj2521_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2517";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2517';
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
	if (isInfinite) { rotate_2524_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2524_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2524_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2524_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2524_completed() {
	setTimeout(function() {
		window.obj2521_onTap_runningActionsCount = window.obj2521_onTap_runningActionsCount - 1;
if (window.obj2521_onTap_runningActionsCount < 0) {
	window.obj2521_onTap_runningActionsCount = 0;
} else if (window.obj2521_onTap_runningActionsCount == 0) {
	obj2521_onTap_actionGroup1();
}
	}, 1);
}














};
obj2521_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2521_onTap_activeActionGroupIndex = -1;
		$("#obj2521").trigger("obj2521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2521) {
				console.warn("de-queueing event obj2521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2521_onTap_activeActionGroupIndex = 1;
	





















};
obj2499_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2499_onTap_activeActionGroupIndex = -1;
		$("#obj2499").trigger("obj2499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2499) {
				console.warn("de-queueing event obj2499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2499_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2499 
hide_2508();
function hide_2508() {
	var selector = "#obj2499";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2508(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2521
(function(){
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

	var selector = "#obj2521";
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
					window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
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
				window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2519
(function(){
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

	var selector = "#obj2519";
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
					window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
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
				window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2497 
move_2501();
function move_2501() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2497");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2495 
move_2502();
function move_2502() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2495");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2492 
move_2503();
function move_2503() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2492");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2489 
move_2504();
function move_2504() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2489");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2486 
move_2505();
function move_2505() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2486");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2483 
move_2506();
function move_2506() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2483");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2480 
move_2507();
function move_2507() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2480");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2515 
move_2511();
function move_2511() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2515");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2517 
move_2512();
function move_2512() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2517");
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
			window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2515 
rotate_2510();
function rotate_2510() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2515";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2515';
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
	if (isInfinite) { rotate_2510_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2510_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2510_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2510_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2510_completed() {
	setTimeout(function() {
		window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj2517 
rotate_2513();
function rotate_2513() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2517";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2517';
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
	if (isInfinite) { rotate_2513_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2513_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2513_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2513_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2513_completed() {
	setTimeout(function() {
		window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
	}, 1);
}














};
obj2499_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2499_onTap_activeActionGroupIndex = -1;
		$("#obj2499").trigger("obj2499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2499) {
				console.warn("de-queueing event obj2499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2499_onTap_activeActionGroupIndex = 1;
	





















};
obj2492_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2492_onTap_activeActionGroupIndex = -1;
		$("#obj2492").trigger("obj2492_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2492) {
				console.warn("de-queueing event obj2492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2492_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2494();
function goToPage_2494() {
	window.obj2492_onTap_runningActionsCount = obj2492_onTap_runningActionsCount + 1;
	$("#anchor123")[0].click();
	window.obj2492_onTap_runningActionsCount = window.obj2492_onTap_runningActionsCount - 1;
if (window.obj2492_onTap_runningActionsCount < 0) {
	window.obj2492_onTap_runningActionsCount = 0;
} else if (window.obj2492_onTap_runningActionsCount == 0) {
	obj2492_onTap_actionGroup1();
}
}





















};
obj2492_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2492_onTap_activeActionGroupIndex = -1;
		$("#obj2492").trigger("obj2492_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2492) {
				console.warn("de-queueing event obj2492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2492_onTap_activeActionGroupIndex = 1;
	





















};
obj2489_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2489_onTap_activeActionGroupIndex = -1;
		$("#obj2489").trigger("obj2489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2489) {
				console.warn("de-queueing event obj2489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2489_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2491();
function goToPage_2491() {
	window.obj2489_onTap_runningActionsCount = obj2489_onTap_runningActionsCount + 1;
	$("#anchor124")[0].click();
	window.obj2489_onTap_runningActionsCount = window.obj2489_onTap_runningActionsCount - 1;
if (window.obj2489_onTap_runningActionsCount < 0) {
	window.obj2489_onTap_runningActionsCount = 0;
} else if (window.obj2489_onTap_runningActionsCount == 0) {
	obj2489_onTap_actionGroup1();
}
}





















};
obj2489_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2489_onTap_activeActionGroupIndex = -1;
		$("#obj2489").trigger("obj2489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2489) {
				console.warn("de-queueing event obj2489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2489_onTap_activeActionGroupIndex = 1;
	





















};
obj2486_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2486_onTap_activeActionGroupIndex = -1;
		$("#obj2486").trigger("obj2486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2486) {
				console.warn("de-queueing event obj2486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2486_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2488();
function goToPage_2488() {
	window.obj2486_onTap_runningActionsCount = obj2486_onTap_runningActionsCount + 1;
	$("#anchor125")[0].click();
	window.obj2486_onTap_runningActionsCount = window.obj2486_onTap_runningActionsCount - 1;
if (window.obj2486_onTap_runningActionsCount < 0) {
	window.obj2486_onTap_runningActionsCount = 0;
} else if (window.obj2486_onTap_runningActionsCount == 0) {
	obj2486_onTap_actionGroup1();
}
}





















};
obj2486_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2486_onTap_activeActionGroupIndex = -1;
		$("#obj2486").trigger("obj2486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2486) {
				console.warn("de-queueing event obj2486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2486_onTap_activeActionGroupIndex = 1;
	





















};
obj2483_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2483_onTap_activeActionGroupIndex = -1;
		$("#obj2483").trigger("obj2483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2483) {
				console.warn("de-queueing event obj2483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2483_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2485();
function goToPage_2485() {
	window.obj2483_onTap_runningActionsCount = obj2483_onTap_runningActionsCount + 1;
	$("#anchor126")[0].click();
	window.obj2483_onTap_runningActionsCount = window.obj2483_onTap_runningActionsCount - 1;
if (window.obj2483_onTap_runningActionsCount < 0) {
	window.obj2483_onTap_runningActionsCount = 0;
} else if (window.obj2483_onTap_runningActionsCount == 0) {
	obj2483_onTap_actionGroup1();
}
}





















};
obj2483_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2483_onTap_activeActionGroupIndex = -1;
		$("#obj2483").trigger("obj2483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2483) {
				console.warn("de-queueing event obj2483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2483_onTap_activeActionGroupIndex = 1;
	





















};
obj2480_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2480_onTap_activeActionGroupIndex = -1;
		$("#obj2480").trigger("obj2480_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2480) {
				console.warn("de-queueing event obj2480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2480_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2482();
function goToPage_2482() {
	window.obj2480_onTap_runningActionsCount = obj2480_onTap_runningActionsCount + 1;
	$("#anchor127")[0].click();
	window.obj2480_onTap_runningActionsCount = window.obj2480_onTap_runningActionsCount - 1;
if (window.obj2480_onTap_runningActionsCount < 0) {
	window.obj2480_onTap_runningActionsCount = 0;
} else if (window.obj2480_onTap_runningActionsCount == 0) {
	obj2480_onTap_actionGroup1();
}
}





















};
obj2480_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2480_onTap_activeActionGroupIndex = -1;
		$("#obj2480").trigger("obj2480_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2480) {
				console.warn("de-queueing event obj2480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2480_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj1228: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1228_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1228_onPageScroll is still running");
	return;
}
var obj1228_onPageScroll_runningActionsCount = 0;
var obj1228_onPageScroll_loopCount = 0;
obj1228_onPageScroll_actionGroup0();
});










/*
 *
 *   obj163: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj163_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj163_onPageScroll is still running");
	return;
}
var obj163_onPageScroll_runningActionsCount = 0;
var obj163_onPageScroll_loopCount = 0;
obj163_onPageScroll_actionGroup0();
});




























































/*
 *
 *   obj1266: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1266_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1266_onPageScroll is still running");
	return;
}
var obj1266_onPageScroll_runningActionsCount = 0;
var obj1266_onPageScroll_loopCount = 0;
obj1266_onPageScroll_actionGroup0();
});










/*
 *
 *   obj1269: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1269_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1269_onPageScroll is still running");
	return;
}
var obj1269_onPageScroll_runningActionsCount = 0;
var obj1269_onPageScroll_loopCount = 0;
obj1269_onPageScroll_actionGroup0();
});










/*
 *
 *   obj1272: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1272_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1272_onPageScroll is still running");
	return;
}
var obj1272_onPageScroll_runningActionsCount = 0;
var obj1272_onPageScroll_loopCount = 0;
obj1272_onPageScroll_actionGroup0();
});










/*
 *
 *   obj1275: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj1275_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1275_onPageScroll is still running");
	return;
}
var obj1275_onPageScroll_runningActionsCount = 0;
var obj1275_onPageScroll_loopCount = 0;
obj1275_onPageScroll_actionGroup0();
});










































/*
 *
 *   obj231: Event SwipeRight
 *
 */
 if (window.SCuaosIsWindows)
	SCPreventTouch("#obj231");
$("#obj231").bind("touchmove click touchstart touchend mousedown mouseup", function(event) {
	event.preventDefault();
})
$("#obj231").bind("SCswiperight", function(event) {
	if (window.obj231_onSwipeRight_activeActionGroupIndex != -1) {
	console.warn("action list window.obj231_onSwipeRight is still running");
	return;
}
var obj231_onSwipeRight_runningActionsCount = 0;
var obj231_onSwipeRight_loopCount = 0;
obj231_onSwipeRight_actionGroup0();
});











































































































































































/*
 *
 *   obj2243: Event Touch Down
 *
 */
$("#obj2243").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2243_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2243_onTap is still running");
	return;
}
var obj2243_onTap_runningActionsCount = 0;
var obj2243_onTap_loopCount = 0;
obj2243_onTap_actionGroup0();
});










/*
 *
 *   obj2521: Event Touch Down
 *
 */
$("#obj2521").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2521_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2521_onTap is still running");
	return;
}
var obj2521_onTap_runningActionsCount = 0;
var obj2521_onTap_loopCount = 0;
obj2521_onTap_actionGroup0();
});








































/*
 *
 *   obj2499: Event Touch Down
 *
 */
$("#obj2499").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2499_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2499_onTap is still running");
	return;
}
var obj2499_onTap_runningActionsCount = 0;
var obj2499_onTap_loopCount = 0;
obj2499_onTap_actionGroup0();
});






























/*
 *
 *   obj2492: Event Touch Down
 *
 */
$("#obj2492").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2492_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2492_onTap is still running");
	return;
}
var obj2492_onTap_runningActionsCount = 0;
var obj2492_onTap_loopCount = 0;
obj2492_onTap_actionGroup0();
});










/*
 *
 *   obj2489: Event Touch Down
 *
 */
$("#obj2489").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2489_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2489_onTap is still running");
	return;
}
var obj2489_onTap_runningActionsCount = 0;
var obj2489_onTap_loopCount = 0;
obj2489_onTap_actionGroup0();
});










/*
 *
 *   obj2486: Event Touch Down
 *
 */
$("#obj2486").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2486_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2486_onTap is still running");
	return;
}
var obj2486_onTap_runningActionsCount = 0;
var obj2486_onTap_loopCount = 0;
obj2486_onTap_actionGroup0();
});










/*
 *
 *   obj2483: Event Touch Down
 *
 */
$("#obj2483").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2483_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2483_onTap is still running");
	return;
}
var obj2483_onTap_runningActionsCount = 0;
var obj2483_onTap_loopCount = 0;
obj2483_onTap_actionGroup0();
});










/*
 *
 *   obj2480: Event Touch Down
 *
 */
$("#obj2480").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2480_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2480_onTap is still running");
	return;
}
var obj2480_onTap_runningActionsCount = 0;
var obj2480_onTap_loopCount = 0;
obj2480_onTap_actionGroup0();
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
	
$("#obj1360").trigger('SCEventShow');
$("#obj1228").trigger('SCEventShow');
$("#obj163").trigger('SCEventShow');
$("#obj193").trigger('SCEventShow');
$("#obj196").trigger('SCEventShow');
$("#obj207").trigger('SCEventShow');
$("#obj216").trigger('SCEventShow');
$("#obj1266").trigger('SCEventShow');
$("#obj1269").trigger('SCEventShow');
$("#obj1272").trigger('SCEventShow');
$("#obj1275").trigger('SCEventShow');
$("#obj184").trigger('SCEventShow');
$("#obj183").trigger('SCEventShow');
$("#obj321").trigger('SCEventShow');
$("#obj231").trigger('SCEventShow');
$("#obj1309").trigger('SCEventShow');
$("#obj1311").trigger('SCEventShow');
$("#obj1313").trigger('SCEventShow');
$("#obj1319").trigger('SCEventShow');
$("#obj1321").trigger('SCEventShow');
$("#obj1324").trigger('SCEventShow');
$("#obj1335").trigger('SCEventShow');
$("#obj1338").trigger('SCEventShow');
$("#obj1346").trigger('SCEventShow');
$("#obj1366").trigger('SCEventShow');
$("#obj1364").trigger('SCEventShow');
$("#obj1369").trigger('SCEventShow');
$("#obj1371").trigger('SCEventShow');
$("#obj1373").trigger('SCEventShow');
$("#obj1375").trigger('SCEventShow');
$("#obj2243").trigger('SCEventShow');
$("#obj2521").trigger('SCEventShow');
$("#obj2517").trigger('SCEventShow');
$("#obj2519").trigger('SCEventShow');
$("#obj2515").trigger('SCEventShow');
$("#obj2497").trigger('SCEventShow');
$("#obj2495").trigger('SCEventShow');
$("#obj2492").trigger('SCEventShow');
$("#obj2489").trigger('SCEventShow');
$("#obj2486").trigger('SCEventShow');
$("#obj2483").trigger('SCEventShow');
$("#obj2480").trigger('SCEventShow');
	
});