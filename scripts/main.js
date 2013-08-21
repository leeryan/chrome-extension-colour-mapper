var CM = window.CM || {};

CM.processSelector = (function(){
	
	return{
		init: function(){
			
			var element = $('h2');
				console.log(element);
			
		}
	}
})();

$(document).ready(function(){
	CM.processSelector.init();	
});