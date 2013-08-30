var DOM = window.DOM || {}

/* setup listener to respon to background page upon request */
chrome.runtime.onMessage.addListener(function(message, sender){
	alert('content script got a message');
	alert("in content script message recieved is " + JSON.stringify(message));
	//Send stuff to the background page
	chrome.runtime.sendMessage("My url is" + window.location.origin);
});

DOM.scrapedom = (function(config){

	/* 	Pass config object in from devtools.js */
	var config = {
		"rule01": "color"
	};
	
	var styleData = {};

	var iterateOverDom = function(){
	
		var elements = document.getElementsByTagName("*");
			
		for(var i = 0; i < elements.length; i++){
			var currentElement = elements[i],
				currentElementStyles = window.getComputedStyle(currentElement);
				
			/* Look for config items being set in object and grab it */
			for(var rule in currentElementStyles){
				//TODO - MAKE THIS DYNAMIC
				if(rule === config.rule01){
					var matchedStyleProperty = config.rule01, 
						matchedStyleRule = currentElementStyles[rule];
					//Function to push colour values into a data table;
					updateStyleModel(matchedStyleRule, matchedStyleProperty);
				};	
			};
				
		};
			
	};
	
	//Create an object that has all of the values in the config object. 
	var createStyleModel = function(){
		
		for(rule in config){
			var styleWatch = config[rule];
			styleData[styleWatch] = {};
		}
		
		iterateOverDom();
		
	}
	
	//Update style model with matches from iterate over dom
	var updateStyleModel = function(rule, property){
		
		
	};
	
	return{
		init: function(){
			//iterateOverDom();
			createStyleModel();	
		}
	}
	
})();

$('document').ready(function(){
	DOM.scrapedom.init();
});
