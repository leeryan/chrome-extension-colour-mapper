//Uses the devtools.panels API to extend the dev tools GUI
//Instance is created for each developer tools opened.

//API modules are only available to the pages loaded within the developer tools window. 
//Other extension API's are not available to the developer tools page but they can be onvoked by sending a request to the background page of the extension 


var port = chrome.runtime.connect({name: 'devtools'});
var stuffToPutInPanel; 
//Post message to the background page
port.postMessage("request some data");

//Handle response when received
port.onMessage.addListener(function(msg){
	
	stuffToPutInPanel = msg;

	alert("data recieved is" + msg);
});

chrome.devtools.panels.create('Colourmapper', '../img/panel_icon.png', '../html/panel.html', function(extensionPanel){
	
	
	extensionPanel.onShown.addListener(function(panelWindow){
		
		
		panelWindow.document.body.appendChild(document.createTextNode('hello world'));
		
		panelWindow.document.body.appendChild(document.createTextNode(stuffToPutInPanel));
		
			
	});

});
			
		
		
