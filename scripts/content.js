var DOM = window.DOM || {}

//setup listener to respon to background page upon request
//TODO put this somewhere moere sensible
chrome.runtime.onMessage.addListener(function(message, sender){
	alert('content script got a message');
	alert("in content script message recieved is " + JSON.stringify(message));
	//Send stuff to the background page
	chrome.runtime.sendMessage("My url is" + window.location.origin);
});

DOM.scrapedom = (function(config){

	//Pass config object in from devtools.js
	var config = {
		"rule01": "color",
		"rule02": "font-size"
	};
	
	var styleData = {};
	
	//Create an object that has all of the values in the config object. 
	var createStyleModel = function(){
		for(rule in config){
			var styleRule = config[rule];
			styleData[styleRule] = {};
		}
		
		iterateOverDom();
	}
	
	//Iterate over the dome grabbing the syles from every element in the page. 
	//TODO if a type of element already has a matched colour associated with it skip over it so results are not skewed by content
	var iterateOverDom = function(){
	
		var elements = document.body.getElementsByTagName("*");
			
		for(var i = 0; i < elements.length; i++){
			var currentElement = elements[i],
				properties = _.keys(styleData),
				elementStyles;
				
			//Get styles specified in styleData for current element
			stylePairs = $(currentElement).css(properties);
			
			for(var key in stylePairs){
			
				//If that value doesn't already exist then create it
				
				var styleCounter = {},
					value = stylePairs[key];
				
				styleCounter[value] = 0;
				
				
				console.log(styleCounter);
				
				//Otherwise find it and update the counter
			
			
		
			
			//console.log(styleData);
			//console.log(stylePairs); // Object {color: "rgb(51, 51, 51)", font-size: "14px"} 
			//console.log(stylePairs[key]); // rgb(90, 90, 90)
			//console.log(properties); //["color", "font-size"] 
			//console.log(key); //color || font-size
			//console.log(key)
			
			}
			
			
			
			//styleData[properties[0]] =  
			//console.log(stylePairs[properties]);
			//console.log(stylePairs[properties[1]]);
			
			
			
			
			//updateStyleModel(propertyRule);
			
			//Loop through each of the applied styles
			/*
for(var property in currentElementStyles){
				//If it matches the rule value in the styleData object add it to the styleModel
				//TODO is this if necessary?
				if(_.has(styleData, property)){
				
				//Grab the rules key value pair. 
				var declaration = _.pick(currentElementStyles, property),
					value = declaration[property],
					colorObj = styleData[property];
					
					colorObj[value] = 0;
					
					//extend object
					console.log(currentElement);
					console.log(currentElementStyles);
					console.log(colorObj);
					
					
					//updateStyleModel(propertyRule);
				}
				
			};
*/
				
		};
			
	};
	
	
	
	//Update style model with matches from iterate over dom
	var updateStyleModel = function(propertyRule){
	
		//Find rule in object
		for(var index in styleData){
			if(index === property){
				
			}
		}
		
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
