var DOM = window.DOM || {};

//setup listener to respond to background page upon request
chrome.runtime.onMessage.addListener(function(message, sender){
	
	//Send stuff to the background page
	var styleConfig = DOM.scrapedom.init(message.options);
	
	chrome.runtime.sendMessage(styleConfig);
	
});

DOM.scrapedom = (function(config){
	
	var styleData = [];
	
	//Create an object that has all of the values in the config object. 
	var createStyleModel = function(config){
		
		function ruleSet(rule){
			this.rule = rule;
			this.declerations = [];
		};

		_.each(config.rules, function(rule){
			styleData.push(new ruleSet(rule));
		});
		
		iterateOverDom();

	}
	
	//Iterate over the dom grabbing the syles from every element in the page. 
	//TODO if a type of element already has a matched colour associated with it skip over it so results are not skewed by content
	var iterateOverDom = function(){
	
		var elements = document.body.getElementsByTagName("*");
			
		for(var i = 0; i < elements.length; i++){
			
			var currentElement = elements[i],
				properties = _.each(styleData[i].rule),
				elementStyles;
				
			//Get styles specified in styleData for current element
			stylePairs = $(currentElement).css(properties);
			
			console.log(stylePairs);
			
			for(var key in stylePairs){
				
				//If that value doesn't already exist then create it
				var valueCounter = {},
					value = stylePairs[key];

				//If a counter for this value does not exist create it
				if(_.has(styleData[key], value) === false){
					
					var counter = 0;
					
					valueCounter[value] = counter;
					_.extend(styleData[key], valueCounter);
					
				} else{
					styleData[key][value] = styleData[key][value] + 1;
				}
			}
		};
			
	};
	
	return{
		init: function(config){
			
			createStyleModel(config);
			
			//console.log(styleData);
			
			return styleData;
			
		}
	}
	
})();
