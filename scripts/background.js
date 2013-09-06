//Handle the request from devtools
chrome.runtime.onConnect.addListener(function(port){
	port.onMessage.addListener(function(message){
		//Post back to devtools.
		//port.postMessage(message);
		
		//Request Tab for sending information
		chrome.tabs.query({
			"status": "complete",
			"currentWindow": true,
			"active": true
		}, function(tabs){
/* 			alert('background is sending a message to content script'); */
			chrome.tabs.sendMessage(tabs[0].id, {options: message}, function(response) {
/* 				alert(response); */
			});
		});
	});
	
	//Post back to devtools
	chrome.runtime.onMessage.addListener(function(message, sender){
		port.postMessage(message);
	});
});