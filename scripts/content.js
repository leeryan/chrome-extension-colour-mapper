chrome.runtime.onMessage.addListener(function(message, sender){
	alert('content script got a message');
	console.log("in content script message recieved is " + message);
	//Send stuff to the background page
	chrome.runtime.sendMessage("My url is" + window.location.origin);
});