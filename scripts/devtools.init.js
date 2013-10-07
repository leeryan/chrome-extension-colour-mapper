//Uses the devtools.panels API to extend the dev tools GUI
//Instance is created for each developer tools opened.

//API modules are only available to the pages loaded within the developer tools window. 
//Other extension API's are not available to the developer tools page but they can be onvoked by sending a request to the background page of the extension 


var port = chrome.runtime.connect({name: 'devtools'}),
	styleData; 

//Post message to the background page
port.postMessage({
	rules: ["color"]
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


			
		
		
