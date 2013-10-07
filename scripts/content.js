var DOM = window.DOM || {};

//setup listener to respond to background page upon request
chrome.runtime.onMessage.addListener(function(message, sender){
	
	//Send stuff to the background page
	var styleConfig = DOM.scrapedom.init();
	
	chrome.runtime.sendMessage(styleConfig);
	
});

DOM.scrapedom = (function(config){
	
	var rules = ['color', 'background-color', 'border-color'],
		declarations = {};
	
	//Iterate over the dom grabbing the rule styles from every element in the page.
	var iterateOverDom = function(){
	
		var elements = document.body.getElementsByTagName("*");
			
		for(var i = 0; i < elements.length; i++){
			
			var currentElement = elements[i];
				
			_.each(rules, function(rule){
				var declaration = $(currentElement).css(rule);
				
				if(_.has(declarations, declaration) === false){
					declarations[declaration] = 0;
				} else {
					declarations[declaration] = declarations[declaration] + 1;
				};
				
			});
			
		};
		
		console.log(declarations);
			
	};
	
	return{
		init: function(){
			
			iterateOverDom();
			
			return declarations;
			
		}
	}
	
})();
