//Uses the devtools.panels API to extend the dev tools GUI
//Instance is created for each developer tools opened.

//API modules are only available to the pages loaded within the developer tools window. 
//Other extension API's are not available to the developer tools page but they can be onvoked by sending a request to the background page of the extension 


var port = chrome.runtime.connect({name: 'devtools'});
var styleData; 
var styleDataStub = 
	{
	 "font-size":
		{"14px":124,
		 "56px":13,
		 "28px":7,
		 "32px":2,
		 "25px":6,
		 "53px":0,
		 "50px":0},
	"color":
		{"rgb(51, 51, 51)":47,
		 "rgb(255, 255, 255)":70,
		 "rgb(59, 59, 59)":0,
		 "rgb(90, 90, 90)":38},
	"position":
		{"static":134,
		 "relative":11,
		 "fixed":6,
		 "absolute":4}
	}
	
//Post message to the background page DO I EVEN NEED THIS???
port.postMessage({
	"rule01": "color"
});

//Handle response when received
port.onMessage.addListener(function(message){
	
	styleDataStub = message;

	//alert("data recieved is" + JSON.stringify(styleData));
	
	DEVTOOLS.createPanel();
	
});

var DEVTOOLS = window.DEVTOOLS || {};

DEVTOOLS.createPanel = function(){
	
	chrome.devtools.panels.create('Colourmapper', '../img/panel_icon.png', '../html/panel.html', function(extensionPanel){
		
		
		extensionPanel.onShown.addListener(function(panelWindow){
			
			//Make sure styleData is available globallyish.
			
			//$(panelWindow.document.body).append('<div id="color-mapper" />');
		
			var $app = $(panelWindow.document.body).find('#color-mapper'),
				properties = _.keys(styleDataStub);
			

			for (var i = 0; i < properties.length; i++){
				console.log(properties[i]);
				$app.append('<p>hello</p>');
				
				//INJECT A NEW VIEW. 
				
				
			}
					
		});
	
	});	
	
}


			
		
		
