pubcoder.projectID = pubcoder.projectID || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.id = pubcoder.project.id || "381C0A4D705E425A93EB99054496CDC7";
pubcoder.project.title = pubcoder.project.title || "Spade";
pubcoder.page.id = pubcoder.page.id || 383;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj503_onDrag_activeActionGroupIndex = -1;
var obj503_onDrag_runningActionsCount = 0;
var obj503_onDrag_loopCount = 0;
var obj503_onAppear_activeActionGroupIndex = -1;
var obj503_onAppear_runningActionsCount = 0;
var obj503_onAppear_loopCount = 0;
var obj503_onTouchDown_activeActionGroupIndex = -1;
var obj503_onTouchDown_runningActionsCount = 0;
var obj503_onTouchDown_loopCount = 0;
var obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj503_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
var obj503_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj503_droppedInsideTargetActions_runningActionsCount = 0;
var obj503_droppedInsideTargetActions_loopCount = 0;
var obj504_onDrag_activeActionGroupIndex = -1;
var obj504_onDrag_runningActionsCount = 0;
var obj504_onDrag_loopCount = 0;
var obj504_onAppear_activeActionGroupIndex = -1;
var obj504_onAppear_runningActionsCount = 0;
var obj504_onAppear_loopCount = 0;
var obj504_onTouchDown_activeActionGroupIndex = -1;
var obj504_onTouchDown_runningActionsCount = 0;
var obj504_onTouchDown_loopCount = 0;
var obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj504_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
var obj504_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj504_droppedInsideTargetActions_runningActionsCount = 0;
var obj504_droppedInsideTargetActions_loopCount = 0;
var obj505_onDrag_activeActionGroupIndex = -1;
var obj505_onDrag_runningActionsCount = 0;
var obj505_onDrag_loopCount = 0;
var obj505_onAppear_activeActionGroupIndex = -1;
var obj505_onAppear_runningActionsCount = 0;
var obj505_onAppear_loopCount = 0;
var obj505_onTouchDown_activeActionGroupIndex = -1;
var obj505_onTouchDown_runningActionsCount = 0;
var obj505_onTouchDown_loopCount = 0;
var obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj505_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
var obj505_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj505_droppedInsideTargetActions_runningActionsCount = 0;
var obj505_droppedInsideTargetActions_loopCount = 0;
var obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj994_SCEventCounterReachedTargetValue_loopCount = 0;
var obj1448_onAppear_activeActionGroupIndex = -1;
var obj1448_onAppear_runningActionsCount = 0;
var obj1448_onAppear_loopCount = 0;
var obj802_onPageScroll_activeActionGroupIndex = -1;
var obj802_onPageScroll_runningActionsCount = 0;
var obj802_onPageScroll_loopCount = 0;
var obj2077_onTap_activeActionGroupIndex = -1;
var obj2077_onTap_runningActionsCount = 0;
var obj2077_onTap_loopCount = 0;
var obj2240_onTap_activeActionGroupIndex = -1;
var obj2240_onTap_runningActionsCount = 0;
var obj2240_onTap_loopCount = 0;
var obj869_onTap_activeActionGroupIndex = -1;
var obj869_onTap_runningActionsCount = 0;
var obj869_onTap_loopCount = 0;
var obj907_onTap_activeActionGroupIndex = -1;
var obj907_onTap_runningActionsCount = 0;
var obj907_onTap_loopCount = 0;
var obj2275_onTap_activeActionGroupIndex = -1;
var obj2275_onTap_runningActionsCount = 0;
var obj2275_onTap_loopCount = 0;
var obj2277_onTap_activeActionGroupIndex = -1;
var obj2277_onTap_runningActionsCount = 0;
var obj2277_onTap_loopCount = 0;
var obj2279_onTap_activeActionGroupIndex = -1;
var obj2279_onTap_runningActionsCount = 0;
var obj2279_onTap_loopCount = 0;
var obj2281_onTap_activeActionGroupIndex = -1;
var obj2281_onTap_runningActionsCount = 0;
var obj2281_onTap_loopCount = 0;
var obj2283_onTap_activeActionGroupIndex = -1;
var obj2283_onTap_runningActionsCount = 0;
var obj2283_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj994_counterValue = 0;
var obj994_counterTargetValue = 3;
var obj994_counterCanExceedTargetValue = false;
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
	 
initDrawImageInCanvas("obj1414", 40, $("#anchor111").attr("data-src"));
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
		
obj503_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_onAppear_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj503 
rotate_1049();
function rotate_1049() {
	window.obj503_onAppear_runningActionsCount = obj503_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj503";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj503';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1049_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1049_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1049_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1049_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1049_completed() {
	setTimeout(function() {
		window.obj503_onAppear_runningActionsCount = window.obj503_onAppear_runningActionsCount - 1;
if (window.obj503_onAppear_runningActionsCount < 0) {
	window.obj503_onAppear_runningActionsCount = 0;
} else if (window.obj503_onAppear_runningActionsCount == 0) {
	obj503_onAppear_actionGroup1();
}
	}, 1);
}














};
obj503_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_onAppear_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onAppear_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj503 
rotate_1050();
function rotate_1050() {
	window.obj503_onAppear_runningActionsCount = obj503_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj503";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj503';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '26';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1050_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1050_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1050_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1050_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1050_completed() {
	setTimeout(function() {
		window.obj503_onAppear_runningActionsCount = window.obj503_onAppear_runningActionsCount - 1;
if (window.obj503_onAppear_runningActionsCount < 0) {
	window.obj503_onAppear_runningActionsCount = 0;
} else if (window.obj503_onAppear_runningActionsCount == 0) {
	obj503_onAppear_actionGroup2();
}
	}, 1);
}














};
obj503_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_onAppear_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onAppear_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj503 
rotate_1051();
function rotate_1051() {
	window.obj503_onAppear_runningActionsCount = obj503_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj503";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj503';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1051_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1051_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1051_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1051_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1051_completed() {
	setTimeout(function() {
		window.obj503_onAppear_runningActionsCount = window.obj503_onAppear_runningActionsCount - 1;
if (window.obj503_onAppear_runningActionsCount < 0) {
	window.obj503_onAppear_runningActionsCount = 0;
} else if (window.obj503_onAppear_runningActionsCount == 0) {
	obj503_onAppear_actionGroup3();
}
	}, 1);
}














};
obj503_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj503_onAppear_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onAppear_activeActionGroupIndex = 3;
	





















};
obj503_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_onTouchDown_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj503");
//	action: dragDrop
//	target: obj503 
dragDrop_531();
function dragDrop_531() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj503_onTouchDown_runningActionsCount = obj503_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj503');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj398');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj503_onTouchDown_runningActionsCount = window.obj503_onTouchDown_runningActionsCount - 1;
if (window.obj503_onTouchDown_runningActionsCount < 0) {
	window.obj503_onTouchDown_runningActionsCount = 0;
} else if (window.obj503_onTouchDown_runningActionsCount == 0) {
	obj503_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj520");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_531 = false;
    	var dropped_id_531;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_531 = true;
					dropped_id_531 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_531) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj503").trigger('SCActionDragDrop531_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj503_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj503_onTouchDown_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj503_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj503 
move_536();
function move_536() {
	window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 68;
	var moveY = 322;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj503_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj503_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj503_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj503_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj503 
move_997();
function move_997() {
	window.obj503_droppedInsideTargetActions_runningActionsCount = obj503_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 292;
	var moveY = 532;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj503_droppedInsideTargetActions_runningActionsCount = window.obj503_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj503_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj503_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj503_droppedInsideTargetActions_runningActionsCount == 0) {
	obj503_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj503 
scale_534();
function scale_534() {
	window.obj503_droppedInsideTargetActions_runningActionsCount = obj503_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj503";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj503';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.2';
	var scaleYValue = '1.2';
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
		scale_534_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_534_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_534_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_534_completed() {
	setTimeout(function() {
		window.obj503_droppedInsideTargetActions_runningActionsCount = window.obj503_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj503_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj503_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj503_droppedInsideTargetActions_runningActionsCount == 0) {
	obj503_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







//	action: increment counter
//	target: obj994 
incrementCounter_998();
function incrementCounter_998() {
	window.obj503_droppedInsideTargetActions_runningActionsCount = obj503_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj994_counterValue;
	obj994_counterValue = obj994_counterValue + 1;
	if (! obj994_counterCanExceedTargetValue && obj994_counterValue > obj994_counterTargetValue) {
		obj994_counterValue = obj994_counterTargetValue;
	}
	if (oldValue != obj994_counterValue) {
		$("#obj994").trigger('SCEventCounterValueChange');
		$("#obj994").trigger('SCEventCounterIncrease');
		if (obj994_counterValue == obj994_counterTargetValue)
			$("#obj994").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj503_droppedInsideTargetActions_runningActionsCount = window.obj503_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj503_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj503_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj503_droppedInsideTargetActions_runningActionsCount == 0) {
	obj503_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj503_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj503_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj503").trigger("obj503_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 503) {
				console.warn("de-queueing event obj503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj503_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj504_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onAppear_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj504 
rotate_1019();
function rotate_1019() {
	window.obj504_onAppear_runningActionsCount = obj504_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj504";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj504';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1019_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1019_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1019_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1019_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1019_completed() {
	setTimeout(function() {
		window.obj504_onAppear_runningActionsCount = window.obj504_onAppear_runningActionsCount - 1;
if (window.obj504_onAppear_runningActionsCount < 0) {
	window.obj504_onAppear_runningActionsCount = 0;
} else if (window.obj504_onAppear_runningActionsCount == 0) {
	obj504_onAppear_actionGroup1();
}
	}, 1);
}














};
obj504_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onAppear_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onAppear_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj504 
rotate_1031();
function rotate_1031() {
	window.obj504_onAppear_runningActionsCount = obj504_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj504";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj504';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '26';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1031_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1031_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1031_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1031_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1031_completed() {
	setTimeout(function() {
		window.obj504_onAppear_runningActionsCount = window.obj504_onAppear_runningActionsCount - 1;
if (window.obj504_onAppear_runningActionsCount < 0) {
	window.obj504_onAppear_runningActionsCount = 0;
} else if (window.obj504_onAppear_runningActionsCount == 0) {
	obj504_onAppear_actionGroup2();
}
	}, 1);
}














};
obj504_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onAppear_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onAppear_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj504 
rotate_1032();
function rotate_1032() {
	window.obj504_onAppear_runningActionsCount = obj504_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj504";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj504';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1032_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1032_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1032_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1032_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1032_completed() {
	setTimeout(function() {
		window.obj504_onAppear_runningActionsCount = window.obj504_onAppear_runningActionsCount - 1;
if (window.obj504_onAppear_runningActionsCount < 0) {
	window.obj504_onAppear_runningActionsCount = 0;
} else if (window.obj504_onAppear_runningActionsCount == 0) {
	obj504_onAppear_actionGroup3();
}
	}, 1);
}














};
obj504_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj504_onAppear_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onAppear_activeActionGroupIndex = 3;
	





















};
obj504_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onTouchDown_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj504");
//	action: dragDrop
//	target: obj504 
dragDrop_560();
function dragDrop_560() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj504_onTouchDown_runningActionsCount = obj504_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj504');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj398');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj504_onTouchDown_runningActionsCount = window.obj504_onTouchDown_runningActionsCount - 1;
if (window.obj504_onTouchDown_runningActionsCount < 0) {
	window.obj504_onTouchDown_runningActionsCount = 0;
} else if (window.obj504_onTouchDown_runningActionsCount == 0) {
	obj504_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj522");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_560 = false;
    	var dropped_id_560;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_560 = true;
					dropped_id_560 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_560) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj504").trigger('SCActionDragDrop531_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj504_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj504_onTouchDown_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj504_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj504 
move_564();
function move_564() {
	window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj504");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1001;
	var moveY = 306;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj504_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj504_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj504_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj504 
move_975();
function move_975() {
	window.obj504_droppedInsideTargetActions_runningActionsCount = obj504_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj504");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 529;
	var moveY = 516;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj504_droppedInsideTargetActions_runningActionsCount = window.obj504_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj504_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj504_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj504_droppedInsideTargetActions_runningActionsCount == 0) {
	obj504_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj504 
scale_562();
function scale_562() {
	window.obj504_droppedInsideTargetActions_runningActionsCount = obj504_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj504";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj504';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.2';
	var scaleYValue = '1.2';
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
		scale_562_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_562_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_562_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_562_completed() {
	setTimeout(function() {
		window.obj504_droppedInsideTargetActions_runningActionsCount = window.obj504_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj504_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj504_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj504_droppedInsideTargetActions_runningActionsCount == 0) {
	obj504_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







//	action: increment counter
//	target: obj994 
incrementCounter_996();
function incrementCounter_996() {
	window.obj504_droppedInsideTargetActions_runningActionsCount = obj504_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj994_counterValue;
	obj994_counterValue = obj994_counterValue + 1;
	if (! obj994_counterCanExceedTargetValue && obj994_counterValue > obj994_counterTargetValue) {
		obj994_counterValue = obj994_counterTargetValue;
	}
	if (oldValue != obj994_counterValue) {
		$("#obj994").trigger('SCEventCounterValueChange');
		$("#obj994").trigger('SCEventCounterIncrease');
		if (obj994_counterValue == obj994_counterTargetValue)
			$("#obj994").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj504_droppedInsideTargetActions_runningActionsCount = window.obj504_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj504_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj504_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj504_droppedInsideTargetActions_runningActionsCount == 0) {
	obj504_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj504_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj504_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj505_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_onAppear_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj505 
rotate_1053();
function rotate_1053() {
	window.obj505_onAppear_runningActionsCount = obj505_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj505";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj505';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1053_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1053_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1053_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1053_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1053_completed() {
	setTimeout(function() {
		window.obj505_onAppear_runningActionsCount = window.obj505_onAppear_runningActionsCount - 1;
if (window.obj505_onAppear_runningActionsCount < 0) {
	window.obj505_onAppear_runningActionsCount = 0;
} else if (window.obj505_onAppear_runningActionsCount == 0) {
	obj505_onAppear_actionGroup1();
}
	}, 1);
}














};
obj505_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_onAppear_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onAppear_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj505 
rotate_1054();
function rotate_1054() {
	window.obj505_onAppear_runningActionsCount = obj505_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj505";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj505';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '26';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1054_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1054_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1054_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1054_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1054_completed() {
	setTimeout(function() {
		window.obj505_onAppear_runningActionsCount = window.obj505_onAppear_runningActionsCount - 1;
if (window.obj505_onAppear_runningActionsCount < 0) {
	window.obj505_onAppear_runningActionsCount = 0;
} else if (window.obj505_onAppear_runningActionsCount == 0) {
	obj505_onAppear_actionGroup2();
}
	}, 1);
}














};
obj505_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_onAppear_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onAppear_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj505 
rotate_1055();
function rotate_1055() {
	window.obj505_onAppear_runningActionsCount = obj505_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj505";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj505';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-13';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1055_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1055_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1055_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1055_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1055_completed() {
	setTimeout(function() {
		window.obj505_onAppear_runningActionsCount = window.obj505_onAppear_runningActionsCount - 1;
if (window.obj505_onAppear_runningActionsCount < 0) {
	window.obj505_onAppear_runningActionsCount = 0;
} else if (window.obj505_onAppear_runningActionsCount == 0) {
	obj505_onAppear_actionGroup3();
}
	}, 1);
}














};
obj505_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj505_onAppear_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onAppear_activeActionGroupIndex = 3;
	





















};
obj505_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_onTouchDown_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj505");
//	action: dragDrop
//	target: obj505 
dragDrop_567();
function dragDrop_567() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj505_onTouchDown_runningActionsCount = obj505_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj505');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj398');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj505_onTouchDown_runningActionsCount = window.obj505_onTouchDown_runningActionsCount - 1;
if (window.obj505_onTouchDown_runningActionsCount < 0) {
	window.obj505_onTouchDown_runningActionsCount = 0;
} else if (window.obj505_onTouchDown_runningActionsCount == 0) {
	obj505_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj524");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_567 = false;
    	var dropped_id_567;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_567 = true;
					dropped_id_567 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_567) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj505").trigger('SCActionDragDrop531_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj505_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj505_onTouchDown_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj505_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj505 
move_571();
function move_571() {
	window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj505");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 558;
	var moveY = 43;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj505_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj505_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_SCActionDragDrop531_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj505_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj505 
move_1001();
function move_1001() {
	window.obj505_droppedInsideTargetActions_runningActionsCount = obj505_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj505");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 786;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj505_droppedInsideTargetActions_runningActionsCount = window.obj505_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj505_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj505_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj505_droppedInsideTargetActions_runningActionsCount == 0) {
	obj505_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj505 
scale_569();
function scale_569() {
	window.obj505_droppedInsideTargetActions_runningActionsCount = obj505_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj505";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj505';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.2';
	var scaleYValue = '1.2';
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
		scale_569_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_569_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_569_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_569_completed() {
	setTimeout(function() {
		window.obj505_droppedInsideTargetActions_runningActionsCount = window.obj505_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj505_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj505_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj505_droppedInsideTargetActions_runningActionsCount == 0) {
	obj505_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







//	action: increment counter
//	target: obj994 
incrementCounter_1002();
function incrementCounter_1002() {
	window.obj505_droppedInsideTargetActions_runningActionsCount = obj505_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj994_counterValue;
	obj994_counterValue = obj994_counterValue + 1;
	if (! obj994_counterCanExceedTargetValue && obj994_counterValue > obj994_counterTargetValue) {
		obj994_counterValue = obj994_counterTargetValue;
	}
	if (oldValue != obj994_counterValue) {
		$("#obj994").trigger('SCEventCounterValueChange');
		$("#obj994").trigger('SCEventCounterIncrease');
		if (obj994_counterValue == obj994_counterTargetValue)
			$("#obj994").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj505_droppedInsideTargetActions_runningActionsCount = window.obj505_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj505_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj505_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj505_droppedInsideTargetActions_runningActionsCount == 0) {
	obj505_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj505_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj505_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj994_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj994").trigger("obj994_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 994) {
				console.warn("de-queueing event obj994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj414 
hide_1068();
function hide_1068() {
	var selector = "#obj414";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = obj994_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = window.obj994_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj994_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1068(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = window.obj994_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj994_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj488
(function(){
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = obj994_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj488";
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
					window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = window.obj994_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj994_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = window.obj994_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj994_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();





//	action: scrollContent
scrollContent_1000();
function scrollContent_1000() {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = obj994_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$(".SCContent").scrollTo({left: "0px", top: "450px"}, 1800, function() {
			window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = window.obj994_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj994_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj994_SCEventCounterReachedTargetValue_actionGroup1();
}
		}
	);
}














};
obj994_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj994").trigger("obj994_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 994) {
				console.warn("de-queueing event obj994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















};
obj1448_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1448_onAppear_activeActionGroupIndex = -1;
		$("#obj1448").trigger("obj1448_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1448) {
				console.warn("de-queueing event obj1448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1448_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1448 
rotate_1460();
function rotate_1460() {
	window.obj1448_onAppear_runningActionsCount = obj1448_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1448';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-7';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1460_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1460_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1460_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1460_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1460_completed() {
	setTimeout(function() {
		window.obj1448_onAppear_runningActionsCount = window.obj1448_onAppear_runningActionsCount - 1;
if (window.obj1448_onAppear_runningActionsCount < 0) {
	window.obj1448_onAppear_runningActionsCount = 0;
} else if (window.obj1448_onAppear_runningActionsCount == 0) {
	obj1448_onAppear_actionGroup1();
}
	}, 1);
}














};
obj1448_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1448_onAppear_activeActionGroupIndex = -1;
		$("#obj1448").trigger("obj1448_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1448) {
				console.warn("de-queueing event obj1448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1448_onAppear_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1448 
rotate_1462();
function rotate_1462() {
	window.obj1448_onAppear_runningActionsCount = obj1448_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1448';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1462_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1462_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1462_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1462_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1462_completed() {
	setTimeout(function() {
		window.obj1448_onAppear_runningActionsCount = window.obj1448_onAppear_runningActionsCount - 1;
if (window.obj1448_onAppear_runningActionsCount < 0) {
	window.obj1448_onAppear_runningActionsCount = 0;
} else if (window.obj1448_onAppear_runningActionsCount == 0) {
	obj1448_onAppear_actionGroup2();
}
	}, 1);
}














};
obj1448_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1448_onAppear_activeActionGroupIndex = -1;
		$("#obj1448").trigger("obj1448_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1448) {
				console.warn("de-queueing event obj1448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1448_onAppear_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj1448 
rotate_1461();
function rotate_1461() {
	window.obj1448_onAppear_runningActionsCount = obj1448_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1448';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-7';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1461_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1461_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1461_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1461_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1461_completed() {
	setTimeout(function() {
		window.obj1448_onAppear_runningActionsCount = window.obj1448_onAppear_runningActionsCount - 1;
if (window.obj1448_onAppear_runningActionsCount < 0) {
	window.obj1448_onAppear_runningActionsCount = 0;
} else if (window.obj1448_onAppear_runningActionsCount == 0) {
	obj1448_onAppear_actionGroup3();
}
	}, 1);
}














};
obj1448_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1448_onAppear_activeActionGroupIndex = -1;
		$("#obj1448").trigger("obj1448_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1448) {
				console.warn("de-queueing event obj1448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1448_onAppear_activeActionGroupIndex = 3;
	





















};
obj802_onPageScroll_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_onPageScroll_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onPageScroll_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_807();
function runjs_807() {
	window.obj802_onPageScroll_runningActionsCount = obj802_onPageScroll_runningActionsCount + 1;

	pubcoder.moveObjectWhileScrolling("#obj802", { left: 112, top: 2309 }, { left: 849, top: 1846 }, 0, 0, "")
	
	setTimeout(function() {
		window.obj802_onPageScroll_runningActionsCount = window.obj802_onPageScroll_runningActionsCount - 1;
if (window.obj802_onPageScroll_runningActionsCount < 0) {
	window.obj802_onPageScroll_runningActionsCount = 0;
} else if (window.obj802_onPageScroll_runningActionsCount == 0) {
	obj802_onPageScroll_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_812();
function runjs_812() {
	window.obj802_onPageScroll_runningActionsCount = obj802_onPageScroll_runningActionsCount + 1;

	pubcoder.rotateObjectWhileScrolling("#obj802", 0, 193.712, 0, 0, "")
	
	setTimeout(function() {
		window.obj802_onPageScroll_runningActionsCount = window.obj802_onPageScroll_runningActionsCount - 1;
if (window.obj802_onPageScroll_runningActionsCount < 0) {
	window.obj802_onPageScroll_runningActionsCount = 0;
} else if (window.obj802_onPageScroll_runningActionsCount == 0) {
	obj802_onPageScroll_actionGroup1();
}
	}, 1);
}







};
obj802_onPageScroll_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj802_onPageScroll_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onPageScroll_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onPageScroll_activeActionGroupIndex = 1;
	





















};
obj2077_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2077_onTap_activeActionGroupIndex = -1;
		$("#obj2077").trigger("obj2077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2077) {
				console.warn("de-queueing event obj2077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2077_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2077 
hide_2099();
function hide_2099() {
	var selector = "#obj2077";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2099(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2097 
hide_2100();
function hide_2100() {
	var selector = "#obj2097";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2100(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2032 
hide_2101();
function hide_2101() {
	var selector = "#obj2032";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2101(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2077_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2077_onTap_activeActionGroupIndex = -1;
		$("#obj2077").trigger("obj2077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2077) {
				console.warn("de-queueing event obj2077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2077_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2110
(function(){
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;

	var selector = "#obj2110";
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
					window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
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
				window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2108
(function(){
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;

	var selector = "#obj2108";
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
					window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
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
				window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2106
(function(){
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;

	var selector = "#obj2106";
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
					window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
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
				window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2077_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2077_onTap_activeActionGroupIndex = -1;
		$("#obj2077").trigger("obj2077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2077) {
				console.warn("de-queueing event obj2077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2077_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2056 
hide_2410();
function hide_2410() {
	var selector = "#obj2056";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2410(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2047 
hide_2411();
function hide_2411() {
	var selector = "#obj2047";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2077_onTap_runningActionsCount = obj2077_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2411(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2077_onTap_runningActionsCount = window.obj2077_onTap_runningActionsCount - 1;
if (window.obj2077_onTap_runningActionsCount < 0) {
	window.obj2077_onTap_runningActionsCount = 0;
} else if (window.obj2077_onTap_runningActionsCount == 0) {
	obj2077_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2077_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2077_onTap_activeActionGroupIndex = -1;
		$("#obj2077").trigger("obj2077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2077) {
				console.warn("de-queueing event obj2077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2077_onTap_activeActionGroupIndex = 3;
	





















};
obj2240_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2240_onTap_activeActionGroupIndex = -1;
		$("#obj2240").trigger("obj2240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2240) {
				console.warn("de-queueing event obj2240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2240_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2242();
function goToPage_2242() {
	window.obj2240_onTap_runningActionsCount = obj2240_onTap_runningActionsCount + 1;
	$("#anchor112")[0].click();
	window.obj2240_onTap_runningActionsCount = window.obj2240_onTap_runningActionsCount - 1;
if (window.obj2240_onTap_runningActionsCount < 0) {
	window.obj2240_onTap_runningActionsCount = 0;
} else if (window.obj2240_onTap_runningActionsCount == 0) {
	obj2240_onTap_actionGroup1();
}
}





















};
obj2240_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2240_onTap_activeActionGroupIndex = -1;
		$("#obj2240").trigger("obj2240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2240) {
				console.warn("de-queueing event obj2240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2240_onTap_activeActionGroupIndex = 1;
	





















};
obj869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onTap_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj885 
hide_904();
function hide_904() {
	var selector = "#obj885";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutRight";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_904(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj869 
hide_872();
function hide_872() {
	var selector = "#obj869";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_872(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj907
(function(){
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

	var selector = "#obj907";
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
					window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
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
				window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj888 
move_905();
function move_905() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj888");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj882 
move_906();
function move_906() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj882");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2249 
move_871();
function move_871() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2249");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2261 
move_2266();
function move_2266() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2261");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2275 
move_2294();
function move_2294() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2275");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2277 
move_2295();
function move_2295() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2277");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2279 
move_2296();
function move_2296() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2279");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2281 
move_2297();
function move_2297() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2281");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2283 
move_2298();
function move_2298() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2283");
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
			window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj888 
rotate_902();
function rotate_902() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj888";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj888';
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
	if (isInfinite) { rotate_902_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_902_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_902_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_902_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_902_completed() {
	setTimeout(function() {
		window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj882 
rotate_903();
function rotate_903() {
	window.obj869_onTap_runningActionsCount = obj869_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj882";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj882';
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
	if (isInfinite) { rotate_903_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_903_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_903_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_903_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_903_completed() {
	setTimeout(function() {
		window.obj869_onTap_runningActionsCount = window.obj869_onTap_runningActionsCount - 1;
if (window.obj869_onTap_runningActionsCount < 0) {
	window.obj869_onTap_runningActionsCount = 0;
} else if (window.obj869_onTap_runningActionsCount == 0) {
	obj869_onTap_actionGroup1();
}
	}, 1);
}














};
obj869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj869_onTap_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onTap_activeActionGroupIndex = 1;
	





















};
obj907_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj907_onTap_activeActionGroupIndex = -1;
		$("#obj907").trigger("obj907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 907) {
				console.warn("de-queueing event obj907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj907_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj907 
hide_912();
function hide_912() {
	var selector = "#obj907";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_912(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj869
(function(){
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

	var selector = "#obj869";
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
					window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
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
				window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj885
(function(){
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

	var selector = "#obj885";
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
					window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
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
				window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2249 
move_909();
function move_909() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2249");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2261 
move_2270();
function move_2270() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2261");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2275 
move_2299();
function move_2299() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2275");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2277 
move_2300();
function move_2300() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2277");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2279 
move_2301();
function move_2301() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2279");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2281 
move_2302();
function move_2302() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2281");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2283 
move_2303();
function move_2303() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2283");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj888 
move_914();
function move_914() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj888");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj882 
move_915();
function move_915() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj882");
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
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj888 
rotate_913();
function rotate_913() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj888";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj888';
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
	if (isInfinite) { rotate_913_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_913_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_913_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_913_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_913_completed() {
	setTimeout(function() {
		window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj882 
rotate_916();
function rotate_916() {
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj882";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj882';
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
	if (isInfinite) { rotate_916_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_916_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_916_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_916_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_916_completed() {
	setTimeout(function() {
		window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount < 0) {
	window.obj907_onTap_runningActionsCount = 0;
} else if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
	}, 1);
}














};
obj907_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj907_onTap_activeActionGroupIndex = -1;
		$("#obj907").trigger("obj907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 907) {
				console.warn("de-queueing event obj907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj907_onTap_activeActionGroupIndex = 1;
	





















};
obj2275_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_onTap_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2307();
function goToPage_2307() {
	window.obj2275_onTap_runningActionsCount = obj2275_onTap_runningActionsCount + 1;
	$("#anchor113")[0].click();
	window.obj2275_onTap_runningActionsCount = window.obj2275_onTap_runningActionsCount - 1;
if (window.obj2275_onTap_runningActionsCount < 0) {
	window.obj2275_onTap_runningActionsCount = 0;
} else if (window.obj2275_onTap_runningActionsCount == 0) {
	obj2275_onTap_actionGroup1();
}
}





















};
obj2275_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_onTap_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_onTap_activeActionGroupIndex = 1;
	





















};
obj2277_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2277_onTap_activeActionGroupIndex = -1;
		$("#obj2277").trigger("obj2277_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2277) {
				console.warn("de-queueing event obj2277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2277_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2308();
function goToPage_2308() {
	window.obj2277_onTap_runningActionsCount = obj2277_onTap_runningActionsCount + 1;
	$("#anchor114")[0].click();
	window.obj2277_onTap_runningActionsCount = window.obj2277_onTap_runningActionsCount - 1;
if (window.obj2277_onTap_runningActionsCount < 0) {
	window.obj2277_onTap_runningActionsCount = 0;
} else if (window.obj2277_onTap_runningActionsCount == 0) {
	obj2277_onTap_actionGroup1();
}
}





















};
obj2277_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2277_onTap_activeActionGroupIndex = -1;
		$("#obj2277").trigger("obj2277_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2277) {
				console.warn("de-queueing event obj2277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2277_onTap_activeActionGroupIndex = 1;
	





















};
obj2279_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2279_onTap_activeActionGroupIndex = -1;
		$("#obj2279").trigger("obj2279_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2279) {
				console.warn("de-queueing event obj2279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2279_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2309();
function goToPage_2309() {
	window.obj2279_onTap_runningActionsCount = obj2279_onTap_runningActionsCount + 1;
	$("#anchor115")[0].click();
	window.obj2279_onTap_runningActionsCount = window.obj2279_onTap_runningActionsCount - 1;
if (window.obj2279_onTap_runningActionsCount < 0) {
	window.obj2279_onTap_runningActionsCount = 0;
} else if (window.obj2279_onTap_runningActionsCount == 0) {
	obj2279_onTap_actionGroup1();
}
}





















};
obj2279_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2279_onTap_activeActionGroupIndex = -1;
		$("#obj2279").trigger("obj2279_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2279) {
				console.warn("de-queueing event obj2279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2279_onTap_activeActionGroupIndex = 1;
	





















};
obj2281_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2281_onTap_activeActionGroupIndex = -1;
		$("#obj2281").trigger("obj2281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2281) {
				console.warn("de-queueing event obj2281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2281_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2349();
function goToPage_2349() {
	window.obj2281_onTap_runningActionsCount = obj2281_onTap_runningActionsCount + 1;
	$("#anchor116")[0].click();
	window.obj2281_onTap_runningActionsCount = window.obj2281_onTap_runningActionsCount - 1;
if (window.obj2281_onTap_runningActionsCount < 0) {
	window.obj2281_onTap_runningActionsCount = 0;
} else if (window.obj2281_onTap_runningActionsCount == 0) {
	obj2281_onTap_actionGroup1();
}
}





















};
obj2281_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2281_onTap_activeActionGroupIndex = -1;
		$("#obj2281").trigger("obj2281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2281) {
				console.warn("de-queueing event obj2281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2281_onTap_activeActionGroupIndex = 1;
	





















};
obj2283_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2283_onTap_activeActionGroupIndex = -1;
		$("#obj2283").trigger("obj2283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2283) {
				console.warn("de-queueing event obj2283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2283_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2350();
function goToPage_2350() {
	window.obj2283_onTap_runningActionsCount = obj2283_onTap_runningActionsCount + 1;
	$("#anchor117")[0].click();
	window.obj2283_onTap_runningActionsCount = window.obj2283_onTap_runningActionsCount - 1;
if (window.obj2283_onTap_runningActionsCount < 0) {
	window.obj2283_onTap_runningActionsCount = 0;
} else if (window.obj2283_onTap_runningActionsCount == 0) {
	obj2283_onTap_actionGroup1();
}
}





















};
obj2283_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2283_onTap_activeActionGroupIndex = -1;
		$("#obj2283").trigger("obj2283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2283) {
				console.warn("de-queueing event obj2283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2283_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


































































































































































































/*
 *
 *   obj503: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj503");
	var winTarget = document.getElementById("obj503");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj503").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj503_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj503_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj503_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj503_onTouchDown is still running");
	return;
}
var obj503_onTouchDown_runningActionsCount = 0;
var obj503_onTouchDown_loopCount = 0;
obj503_onTouchDown_actionGroup0();
});



/*
 *
 *   obj503: Event SCActionDragDrop531_droppedOutsideTargetActions
 *
 */
$("#obj503").bind("SCActionDragDrop531_droppedOutsideTargetActions", function(event) {
	if (window.obj503_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj503_SCActionDragDrop531_droppedOutsideTargetActions is still running");
	return;
}
var obj503_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj503_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
obj503_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj503: Event droppedInsideTargetActions
 *
 */
$("#obj503").bind("droppedInsideTargetActions", function(event) {
	if (window.obj503_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj503_droppedInsideTargetActions is still running");
	return;
}
var obj503_droppedInsideTargetActions_runningActionsCount = 0;
var obj503_droppedInsideTargetActions_loopCount = 0;
obj503_droppedInsideTargetActions_actionGroup0();
});


/*
 *
 *   obj503: Event Appear
 *
 */
$("#obj503").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(503, "onDisappear") || 
		pubcoder.isActionListRunning(503, "onAppear")) {
		console.warn("queueing event obj503." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 503, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj503_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj503_onAppear is still running");
	return;
}
var obj503_onAppear_runningActionsCount = 0;
var obj503_onAppear_loopCount = 0;
obj503_onAppear_actionGroup0();
});




/*
 *
 *   obj504: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj504");
	var winTarget = document.getElementById("obj504");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj504").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj504_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj504_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj504_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj504_onTouchDown is still running");
	return;
}
var obj504_onTouchDown_runningActionsCount = 0;
var obj504_onTouchDown_loopCount = 0;
obj504_onTouchDown_actionGroup0();
});



/*
 *
 *   obj504: Event SCActionDragDrop531_droppedOutsideTargetActions
 *
 */
$("#obj504").bind("SCActionDragDrop531_droppedOutsideTargetActions", function(event) {
	if (window.obj504_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj504_SCActionDragDrop531_droppedOutsideTargetActions is still running");
	return;
}
var obj504_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj504_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
obj504_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj504: Event droppedInsideTargetActions
 *
 */
$("#obj504").bind("droppedInsideTargetActions", function(event) {
	if (window.obj504_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj504_droppedInsideTargetActions is still running");
	return;
}
var obj504_droppedInsideTargetActions_runningActionsCount = 0;
var obj504_droppedInsideTargetActions_loopCount = 0;
obj504_droppedInsideTargetActions_actionGroup0();
});


/*
 *
 *   obj504: Event Appear
 *
 */
$("#obj504").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(504, "onDisappear") || 
		pubcoder.isActionListRunning(504, "onAppear")) {
		console.warn("queueing event obj504." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 504, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj504_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj504_onAppear is still running");
	return;
}
var obj504_onAppear_runningActionsCount = 0;
var obj504_onAppear_loopCount = 0;
obj504_onAppear_actionGroup0();
});




/*
 *
 *   obj505: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj505");
	var winTarget = document.getElementById("obj505");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj505").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj505_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj505_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj505_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj505_onTouchDown is still running");
	return;
}
var obj505_onTouchDown_runningActionsCount = 0;
var obj505_onTouchDown_loopCount = 0;
obj505_onTouchDown_actionGroup0();
});



/*
 *
 *   obj505: Event SCActionDragDrop531_droppedOutsideTargetActions
 *
 */
$("#obj505").bind("SCActionDragDrop531_droppedOutsideTargetActions", function(event) {
	if (window.obj505_SCActionDragDrop531_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj505_SCActionDragDrop531_droppedOutsideTargetActions is still running");
	return;
}
var obj505_SCActionDragDrop531_droppedOutsideTargetActions_runningActionsCount = 0;
var obj505_SCActionDragDrop531_droppedOutsideTargetActions_loopCount = 0;
obj505_SCActionDragDrop531_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj505: Event droppedInsideTargetActions
 *
 */
$("#obj505").bind("droppedInsideTargetActions", function(event) {
	if (window.obj505_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj505_droppedInsideTargetActions is still running");
	return;
}
var obj505_droppedInsideTargetActions_runningActionsCount = 0;
var obj505_droppedInsideTargetActions_loopCount = 0;
obj505_droppedInsideTargetActions_actionGroup0();
});


/*
 *
 *   obj505: Event Appear
 *
 */
$("#obj505").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(505, "onDisappear") || 
		pubcoder.isActionListRunning(505, "onAppear")) {
		console.warn("queueing event obj505." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 505, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj505_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj505_onAppear is still running");
	return;
}
var obj505_onAppear_runningActionsCount = 0;
var obj505_onAppear_loopCount = 0;
obj505_onAppear_actionGroup0();
});








/*
 *
 *   obj994: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj994").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj994_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj994_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj994_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj994_SCEventCounterReachedTargetValue_loopCount = 0;
obj994_SCEventCounterReachedTargetValue_actionGroup0();
});










































/*
 *
 *   obj1448: Event Appear
 *
 */
$("#obj1448").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(1448, "onDisappear") || 
		pubcoder.isActionListRunning(1448, "onAppear")) {
		console.warn("queueing event obj1448." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 1448, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj1448_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1448_onAppear is still running");
	return;
}
var obj1448_onAppear_runningActionsCount = 0;
var obj1448_onAppear_loopCount = 0;
obj1448_onAppear_actionGroup0();
});









/*
 *
 *   obj802: Event Page Scroll
 *
 */
$(".SCContent").bind("scroll", function(event) {
	if (window.obj802_onPageScroll_activeActionGroupIndex != -1) {
	console.warn("action list window.obj802_onPageScroll is still running");
	return;
}
var obj802_onPageScroll_runningActionsCount = 0;
var obj802_onPageScroll_loopCount = 0;
obj802_onPageScroll_actionGroup0();
});








































































































/*
 *
 *   obj2077: Event Touch Down
 *
 */
$("#obj2077").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2077_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2077_onTap is still running");
	return;
}
var obj2077_onTap_runningActionsCount = 0;
var obj2077_onTap_loopCount = 0;
obj2077_onTap_actionGroup0();
});






























/*
 *
 *   obj2240: Event Touch Down
 *
 */
$("#obj2240").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2240_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2240_onTap is still running");
	return;
}
var obj2240_onTap_runningActionsCount = 0;
var obj2240_onTap_loopCount = 0;
obj2240_onTap_actionGroup0();
});






























/*
 *
 *   obj869: Event Touch Down
 *
 */
$("#obj869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj869_onTap is still running");
	return;
}
var obj869_onTap_runningActionsCount = 0;
var obj869_onTap_loopCount = 0;
obj869_onTap_actionGroup0();
});








































/*
 *
 *   obj907: Event Touch Down
 *
 */
$("#obj907").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj907_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj907_onTap is still running");
	return;
}
var obj907_onTap_runningActionsCount = 0;
var obj907_onTap_loopCount = 0;
obj907_onTap_actionGroup0();
});






























/*
 *
 *   obj2275: Event Touch Down
 *
 */
$("#obj2275").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2275_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_onTap is still running");
	return;
}
var obj2275_onTap_runningActionsCount = 0;
var obj2275_onTap_loopCount = 0;
obj2275_onTap_actionGroup0();
});










/*
 *
 *   obj2277: Event Touch Down
 *
 */
$("#obj2277").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2277_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2277_onTap is still running");
	return;
}
var obj2277_onTap_runningActionsCount = 0;
var obj2277_onTap_loopCount = 0;
obj2277_onTap_actionGroup0();
});










/*
 *
 *   obj2279: Event Touch Down
 *
 */
$("#obj2279").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2279_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2279_onTap is still running");
	return;
}
var obj2279_onTap_runningActionsCount = 0;
var obj2279_onTap_loopCount = 0;
obj2279_onTap_actionGroup0();
});










/*
 *
 *   obj2281: Event Touch Down
 *
 */
$("#obj2281").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2281_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2281_onTap is still running");
	return;
}
var obj2281_onTap_runningActionsCount = 0;
var obj2281_onTap_loopCount = 0;
obj2281_onTap_actionGroup0();
});










/*
 *
 *   obj2283: Event Touch Down
 *
 */
$("#obj2283").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2283_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2283_onTap is still running");
	return;
}
var obj2283_onTap_runningActionsCount = 0;
var obj2283_onTap_loopCount = 0;
obj2283_onTap_actionGroup0();
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
	
$("#obj398").trigger('SCEventShow');
$("#obj1510").trigger('SCEventShow');
$("#obj1518").trigger('SCEventShow');
$("#obj1796").trigger('SCEventShow');
$("#obj1496").trigger('SCEventShow');
$("#obj2130").trigger('SCEventShow');
$("#obj396").trigger('SCEventShow');
$("#obj404").trigger('SCEventShow');
$("#obj407").trigger('SCEventShow');
$("#obj414").trigger('SCEventShow');
$("#obj449").trigger('SCEventShow');
$("#obj451").trigger('SCEventShow');
$("#obj497").trigger('SCEventShow');
$("#obj498").trigger('SCEventShow');
$("#obj499").trigger('SCEventShow');
$("#obj520").trigger('SCEventShow');
$("#obj522").trigger('SCEventShow');
$("#obj524").trigger('SCEventShow');
$("#obj503").trigger('SCEventShow');
$("#obj504").trigger('SCEventShow');
$("#obj505").trigger('SCEventShow');
$("#obj1208").trigger('SCEventShow');
$("#obj1210").trigger('SCEventShow');
$("#obj1414").trigger('SCEventShow');
$("#obj1448").trigger('SCEventShow');
$("#obj802").trigger('SCEventShow');
$("#obj1782").trigger('SCEventShow');
$("#obj1785").trigger('SCEventShow');
$("#obj2097").trigger('SCEventShow');
$("#obj2029").trigger('SCEventShow');
$("#obj2032").trigger('SCEventShow');
$("#obj2047").trigger('SCEventShow');
$("#obj2056").trigger('SCEventShow');
$("#obj2077").trigger('SCEventShow');
$("#obj2146").trigger('SCEventShow');
$("#obj2144").trigger('SCEventShow');
$("#obj2240").trigger('SCEventShow');
$("#obj2372").trigger('SCEventShow');
$("#obj879").trigger('SCEventShow');
$("#obj869").trigger('SCEventShow');
$("#obj882").trigger('SCEventShow');
$("#obj885").trigger('SCEventShow');
$("#obj888").trigger('SCEventShow');
$("#obj2249").trigger('SCEventShow');
$("#obj2261").trigger('SCEventShow');
$("#obj2275").trigger('SCEventShow');
$("#obj2277").trigger('SCEventShow');
$("#obj2279").trigger('SCEventShow');
$("#obj2281").trigger('SCEventShow');
$("#obj2283").trigger('SCEventShow');
	
});