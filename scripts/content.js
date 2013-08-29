chrome.runtime.onMessage.addListener(function(message, sender){
	alert('content script got a message');
	alert("in content script message recieved is " + JSON.stringify(message));
	//Send stuff to the background page
	chrome.runtime.sendMessage("My url is" + window.location.origin);
});