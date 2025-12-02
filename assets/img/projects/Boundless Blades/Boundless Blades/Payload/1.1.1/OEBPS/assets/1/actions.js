pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 2;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj2209_onPageScroll_activeActionGroupIndex = -1;
var obj2209_onPageScroll_runningActionsCount = 0;
var obj2209_onPageScroll_loopCount = 0;
var obj2220_onPageScroll_activeActionGroupIndex = -1;
var obj2220_onPageScroll_runningActionsCount = 0;
var obj2220_onPageScroll_loopCount = 0;
var obj2229_onPageScroll_activeActionGroupIndex = -1;
var obj2229_onPageScroll_runningActionsCount = 0;
var obj2229_onPageScroll_loopCount = 0;
var obj2215_onPageScroll_activeActionGroupIndex = -1;
var obj2215_onPageScroll_runningActionsCount = 0;
var obj2215_onPageScroll_loopCount = 0;
var obj2320_onPageScroll_activeActionGroupIndex = -1;
var obj2320_onPageScroll_runningActionsCount = 0;
var obj2320_onPageScroll_loopCount = 0;
var obj2770_onTap_activeActionGroupIndex = -1;
var obj2770_onTap_runningActionsCount = 0;
var obj2770_onTap_loopCount = 0;
var obj2773_onTap_activeActionGroupIndex = -1;
var obj2773_onTap_runningActionsCount = 0;
var obj2773_onTap_loopCount = 0;
var obj2776_onTap_activeActionGroupIndex = -1;
var obj2776_onTap_runningActionsCount = 0;
var obj2776_onTap_loopCount = 0;
var obj2779_onTap_activeActionGroupIndex = -1;
var obj2779_onTap_runningActionsCount = 0;
var obj2779_onTap_loopCount = 0;
var obj2782_onTap_activeActionGroupIndex = -1;
var obj2782_onTap_runningActionsCount = 0;
var obj2782_onTap_loopCount = 0;
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
		
obj2209_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2209_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2209").trigger("obj2209_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2209) {
				console.warn("de-queueing event obj2209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2209_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2225();
function runjs_2225() {
	window.obj2209_onPageScroll_runningActionsCount = obj2209_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj2209", { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, 1000, 1500, "")
	
	setTimeout(function() {
		window.obj2209_onPageScroll_runningActionsCount = window.obj2209_onPageScroll_runningActionsCount - 1;
if (window.obj2209_onPageScroll_runningActionsCount < 0) {
	window.obj2209_onPageScroll_runningActionsCount = 0;
} else if (window.obj2209_onPageScroll_runningActionsCount == 0) {
	obj2209_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2209_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2209_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2209").trigger("obj2209_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2209) {
				console.warn("de-queueing event obj2209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2209_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2220_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2220_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2220").trigger("obj2220_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2220) {
				console.warn("de-queueing event obj2220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2220_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2223();
function runjs_2223() {
	window.obj2220_onPageScroll_runningActionsCount = obj2220_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj2220", { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, 500, 1000, "")
	
	setTimeout(function() {
		window.obj2220_onPageScroll_runningActionsCount = window.obj2220_onPageScroll_runningActionsCount - 1;
if (window.obj2220_onPageScroll_runningActionsCount < 0) {
	window.obj2220_onPageScroll_runningActionsCount = 0;
} else if (window.obj2220_onPageScroll_runningActionsCount == 0) {
	obj2220_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2220_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2220_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2220").trigger("obj2220_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2220) {
				console.warn("de-queueing event obj2220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2220_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2229_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2229_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2229").trigger("obj2229_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2229) {
				console.warn("de-queueing event obj2229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2229_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2232();
function runjs_2232() {
	window.obj2229_onPageScroll_runningActionsCount = obj2229_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj2229", { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, 2000, 2500, "")
	
	setTimeout(function() {
		window.obj2229_onPageScroll_runningActionsCount = window.obj2229_onPageScroll_runningActionsCount - 1;
if (window.obj2229_onPageScroll_runningActionsCount < 0) {
	window.obj2229_onPageScroll_runningActionsCount = 0;
} else if (window.obj2229_onPageScroll_runningActionsCount == 0) {
	obj2229_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2229_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2229_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2229").trigger("obj2229_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2229) {
				console.warn("de-queueing event obj2229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2229_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2215_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2234();
function runjs_2234() {
	window.obj2215_onPageScroll_runningActionsCount = obj2215_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj2215", { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, 1500, 2000, "")
	
	setTimeout(function() {
		window.obj2215_onPageScroll_runningActionsCount = window.obj2215_onPageScroll_runningActionsCount - 1;
if (window.obj2215_onPageScroll_runningActionsCount < 0) {
	window.obj2215_onPageScroll_runningActionsCount = 0;
} else if (window.obj2215_onPageScroll_runningActionsCount == 0) {
	obj2215_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2215_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2215_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2320_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2320_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2320").trigger("obj2320_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2320) {
				console.warn("de-queueing event obj2320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2320_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2323();
function runjs_2323() {
	window.obj2320_onPageScroll_runningActionsCount = obj2320_onPageScroll_runningActionsCount + 1;

	pubcoder.scaleObjectWhileScrolling("#obj2320", { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, 2500, 3000, "")
	
	setTimeout(function() {
		window.obj2320_onPageScroll_runningActionsCount = window.obj2320_onPageScroll_runningActionsCount - 1;
if (window.obj2320_onPageScroll_runningActionsCount < 0) {
	window.obj2320_onPageScroll_runningActionsCount = 0;
} else if (window.obj2320_onPageScroll_runningActionsCount == 0) {
	obj2320_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj2320_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2320_onPageScroll_activeActionGroupIndex = -1;
		$("#obj2320").trigger("obj2320_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2320) {
				console.warn("de-queueing event obj2320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2320_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2770_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2770_onTap_activeActionGroupIndex = -1;
		$("#obj2770").trigger("obj2770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2770) {
				console.warn("de-queueing event obj2770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2770_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2772();
function goToPage_2772() {
	window.obj2770_onTap_runningActionsCount = obj2770_onTap_runningActionsCount + 1;
	$("#anchor102")[0].click();
	window.obj2770_onTap_runningActionsCount = window.obj2770_onTap_runningActionsCount - 1;
if (window.obj2770_onTap_runningActionsCount < 0) {
	window.obj2770_onTap_runningActionsCount = 0;
} else if (window.obj2770_onTap_runningActionsCount == 0) {
	obj2770_onTap_actionGroup1();
}
}





















};
obj2770_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2770_onTap_activeActionGroupIndex = -1;
		$("#obj2770").trigger("obj2770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2770) {
				console.warn("de-queueing event obj2770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2770_onTap_activeActionGroupIndex = 1;
	





















};
obj2773_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2773_onTap_activeActionGroupIndex = -1;
		$("#obj2773").trigger("obj2773_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2773) {
				console.warn("de-queueing event obj2773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2773_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2775();
function goToPage_2775() {
	window.obj2773_onTap_runningActionsCount = obj2773_onTap_runningActionsCount + 1;
	$("#anchor103")[0].click();
	window.obj2773_onTap_runningActionsCount = window.obj2773_onTap_runningActionsCount - 1;
if (window.obj2773_onTap_runningActionsCount < 0) {
	window.obj2773_onTap_runningActionsCount = 0;
} else if (window.obj2773_onTap_runningActionsCount == 0) {
	obj2773_onTap_actionGroup1();
}
}





















};
obj2773_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2773_onTap_activeActionGroupIndex = -1;
		$("#obj2773").trigger("obj2773_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2773) {
				console.warn("de-queueing event obj2773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2773_onTap_activeActionGroupIndex = 1;
	





















};
obj2776_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2776_onTap_activeActionGroupIndex = -1;
		$("#obj2776").trigger("obj2776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2776) {
				console.warn("de-queueing event obj2776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2776_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2778();
function goToPage_2778() {
	window.obj2776_onTap_runningActionsCount = obj2776_onTap_runningActionsCount + 1;
	$("#anchor104")[0].click();
	window.obj2776_onTap_runningActionsCount = window.obj2776_onTap_runningActionsCount - 1;
if (window.obj2776_onTap_runningActionsCount < 0) {
	window.obj2776_onTap_runningActionsCount = 0;
} else if (window.obj2776_onTap_runningActionsCount == 0) {
	obj2776_onTap_actionGroup1();
}
}





















};
obj2776_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2776_onTap_activeActionGroupIndex = -1;
		$("#obj2776").trigger("obj2776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2776) {
				console.warn("de-queueing event obj2776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2776_onTap_activeActionGroupIndex = 1;
	





















};
obj2779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2779_onTap_activeActionGroupIndex = -1;
		$("#obj2779").trigger("obj2779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2779) {
				console.warn("de-queueing event obj2779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2779_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2781();
function goToPage_2781() {
	window.obj2779_onTap_runningActionsCount = obj2779_onTap_runningActionsCount + 1;
	$("#anchor105")[0].click();
	window.obj2779_onTap_runningActionsCount = window.obj2779_onTap_runningActionsCount - 1;
if (window.obj2779_onTap_runningActionsCount < 0) {
	window.obj2779_onTap_runningActionsCount = 0;
} else if (window.obj2779_onTap_runningActionsCount == 0) {
	obj2779_onTap_actionGroup1();
}
}





















};
obj2779_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2779_onTap_activeActionGroupIndex = -1;
		$("#obj2779").trigger("obj2779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2779) {
				console.warn("de-queueing event obj2779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2779_onTap_activeActionGroupIndex = 1;
	





















};
obj2782_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2782_onTap_activeActionGroupIndex = -1;
		$("#obj2782").trigger("obj2782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2782) {
				console.warn("de-queueing event obj2782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2782_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2784();
function goToPage_2784() {
	window.obj2782_onTap_runningActionsCount = obj2782_onTap_runningActionsCount + 1;
	$("#anchor106")[0].click();
	window.obj2782_onTap_runningActionsCount = window.obj2782_onTap_runningActionsCount - 1;
if (window.obj2782_onTap_runningActionsCount < 0) {
	window.obj2782_onTap_runningActionsCount = 0;
} else if (window.obj2782_onTap_runningActionsCount == 0) {
	obj2782_onTap_actionGroup1();
}
}





















};
obj2782_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2782_onTap_activeActionGroupIndex = -1;
		$("#obj2782").trigger("obj2782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2782) {
				console.warn("de-queueing event obj2782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2782_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























































































/*
 *
 *   obj2209: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2209_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2209_onPageScroll is still running");
	return;
}
var obj2209_onPageScroll_runningActionsCount = 0;
var obj2209_onPageScroll_loopCount = 0;
obj2209_onPageScroll_actionGroup0();
});










/*
 *
 *   obj2220: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2220_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2220_onPageScroll is still running");
	return;
}
var obj2220_onPageScroll_runningActionsCount = 0;
var obj2220_onPageScroll_loopCount = 0;
obj2220_onPageScroll_actionGroup0();
});










/*
 *
 *   obj2229: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2229_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2229_onPageScroll is still running");
	return;
}
var obj2229_onPageScroll_runningActionsCount = 0;
var obj2229_onPageScroll_loopCount = 0;
obj2229_onPageScroll_actionGroup0();
});










/*
 *
 *   obj2215: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2215_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2215_onPageScroll is still running");
	return;
}
var obj2215_onPageScroll_runningActionsCount = 0;
var obj2215_onPageScroll_loopCount = 0;
obj2215_onPageScroll_actionGroup0();
});










/*
 *
 *   obj2320: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj2320_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2320_onPageScroll is still running");
	return;
}
var obj2320_onPageScroll_runningActionsCount = 0;
var obj2320_onPageScroll_loopCount = 0;
obj2320_onPageScroll_actionGroup0();
});




/*
 *
 *   obj2770: Event Touch Down
 *
 */
$("#obj2770").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2770_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2770_onTap is still running");
	return;
}
var obj2770_onTap_runningActionsCount = 0;
var obj2770_onTap_loopCount = 0;
obj2770_onTap_actionGroup0();
});










/*
 *
 *   obj2773: Event Touch Down
 *
 */
$("#obj2773").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2773_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2773_onTap is still running");
	return;
}
var obj2773_onTap_runningActionsCount = 0;
var obj2773_onTap_loopCount = 0;
obj2773_onTap_actionGroup0();
});










/*
 *
 *   obj2776: Event Touch Down
 *
 */
$("#obj2776").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2776_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2776_onTap is still running");
	return;
}
var obj2776_onTap_runningActionsCount = 0;
var obj2776_onTap_loopCount = 0;
obj2776_onTap_actionGroup0();
});










/*
 *
 *   obj2779: Event Touch Down
 *
 */
$("#obj2779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2779_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2779_onTap is still running");
	return;
}
var obj2779_onTap_runningActionsCount = 0;
var obj2779_onTap_loopCount = 0;
obj2779_onTap_actionGroup0();
});










/*
 *
 *   obj2782: Event Touch Down
 *
 */
$("#obj2782").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2782_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2782_onTap is still running");
	return;
}
var obj2782_onTap_runningActionsCount = 0;
var obj2782_onTap_loopCount = 0;
obj2782_onTap_actionGroup0();
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
	
$("#obj793").trigger('SCEventShow');
$("#obj1593").trigger('SCEventShow');
$("#obj2235").trigger('SCEventShow');
$("#obj1584").trigger('SCEventShow');
$("#obj1682").trigger('SCEventShow');
$("#obj1685").trigger('SCEventShow');
$("#obj1687").trigger('SCEventShow');
$("#obj1691").trigger('SCEventShow');
$("#obj2209").trigger('SCEventShow');
$("#obj2220").trigger('SCEventShow');
$("#obj2229").trigger('SCEventShow');
$("#obj2215").trigger('SCEventShow');
$("#obj2320").trigger('SCEventShow');
$("#obj2770").trigger('SCEventShow');
$("#obj2773").trigger('SCEventShow');
$("#obj2776").trigger('SCEventShow');
$("#obj2779").trigger('SCEventShow');
$("#obj2782").trigger('SCEventShow');
	
});