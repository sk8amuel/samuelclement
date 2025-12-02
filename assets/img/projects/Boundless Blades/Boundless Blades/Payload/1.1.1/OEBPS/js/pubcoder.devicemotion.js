pubcoder.initDeviceMotion = function() {
	if (pubcoder.isDeviceMotionInited === true) {
		return;
	} else {
		pubcoder.isDeviceMotionInited = true;
	}
	window.XPUB.initDeviceMotion();

	// stabilire cosa fare: questo dovrebbe essere iniettato dal reader per una gestione web,
	// quindi solo da XReaderJS mentre XReader fa tutto nativo? anche android?

	// window.ondevicemotion = function(e) {
	// 	if (!PubCoder.Accelerometer.Enabled) return; // do nothing, ondevicemotion is disabled, probably by Pubcoder Quick Preview Motion Simulator
		
	// 	var orientation = window.orientation;
	// 	if (window.XPUB != undefined) orientation = window.XPUB.getOrientation();
	// 	var orientationName = "";
	// 	switch (orientation) {
	// 		case 0:
	// 			orientationName = 'portraitButtonBottom';
	// 			break; 
	// 		case 90:
	// 			orientationName = 'landscapeButtonRight';
	// 			break;
	// 		case -90: 
	// 			orientationName = 'landscapeButtonLeft';
	// 			break;
	// 		case 180:
	// 			orientationName = 'portraitButtonTop';
	// 			break;
	// 	}
		
	// 	var dx = 0;
	// 	var dy = 0;
	// 	switch (orientationName) {
	// 		case 'landscapeButtonLeft':
	// 			dx = e.accelerationIncludingGravity.x;
	// 			dy = e.accelerationIncludingGravity.y;
	// 			break;
	// 		case 'portraitButtonBottom':
	// 				dx = -e.accelerationIncludingGravity.y;  
	// 				dy = e.accelerationIncludingGravity.x;
	// 			break;
	// 		case 'landscapeButtonRight':
	// 			dx = -e.accelerationIncludingGravity.x;  
	// 			dy = -e.accelerationIncludingGravity.y;
	// 			break;
	// 		case 'portraitButtonTop':
	// 			dx = e.accelerationIncludingGravity.y;  
	// 			dy = -e.accelerationIncludingGravity.x;
	// 				break;
	// 	}
	// 	// console.log(orientation + " => " + orientationName);
	// 	if (PubCoder.isAndroid) {
	// 		dx = -dx;
	// 		dy = -dy;
	// 	}
	// 	PubCoder.Accelerometer.X = dx;
	// 	PubCoder.Accelerometer.Y = dy;
	// 	window.aigX = dx;  
	// 	window.aigY = dy;

	// 	if (PubCoder.isQuickPreview) {
	// 		XPUB.callNative('deviceMoved', [PubCoder.Accelerometer.X, PubCoder.Accelerometer.Y]);
	// 	}
	// }
};