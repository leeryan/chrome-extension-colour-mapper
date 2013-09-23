/* global Handlebars */

var CM = window.CM || {};

var colourObj = {
	property : 'colour',
	declerations: [
		{rule: 'rgb(51, 51, 51)', count: 47},
		{rule: 'rgb(255, 255, 255)', count: 70},
		{rule: 'rgb(59, 59, 59)', count: 0},
		{rule: 'rgb(20, 20, 20)', count: 38},
		{rule: 'rgb(66, 139, 202)', count: 26}
	]
};
	
CM.createTables = (function(){
	
	var renderTable = function(){
		
		var source = $('#property-matrix').html(),
			template = Handlebars.compile(source);
			
			$('#colour-matrix').append(template(colourObj));
		
	};
	
	return {
		init: function(){
			renderTable();
		}
	};
	
})();

CM.colourValueSwitcher = (function(){
	// Need some pub/sub here to listen to changes in the model
	var bindSwitchEvents = function(){
		
		var trigger = '#colour-switcher a';
		
		$(trigger).on('click', function(){
			if($(this).hasClass('active')){
				return false;
			} else {
				$(trigger).removeClass('active');
				$(this).addClass('active');
				
			}
		});
		
	};
	
	return{
		init: function(){
			bindSwitchEvents();
		}
	};
})();

CM.persistanceSWitcher = (function(){
		
		var bindPersistanceEvents = function(){
		
			var trigger = '.toggle label';
			
			$(trigger).on('click', function(){
				//ADD-REMOVE ON or OFF
				//Update checkbox accordingly
			});
					
		};
	
	return{
		init: function(){
			bindPersistanceEvents();
		}
	};
	
})();

$(document).ready(function(){
	CM.createTables.init();
	CM.colourValueSwitcher.init();
	CM.persistanceSwitcher.init();
});





/*
function do_something(msg) {
    document.body.textContent += '\n' + msg; // Stupid example, PoC
}
document.documentElement.onclick = function() {
    // No need to check for the existence of `respond`, because
    // the panel can only be clicked when it's visible...
    respond('Another stupid example!');
};
*/
