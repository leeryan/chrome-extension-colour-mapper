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

	var bindSwitchEvents = function(){
		
		var trigger = '#colour-switcher a',
			matrix = '#property-matrix';
		
		$(trigger).on('click', function(){
			if($(this).hasClass('active')){
				return false;
			} else {
				$(trigger).removeClass('active');
				$(this).addClass('active');
				_.map(colourObj.declerations, function(decleration){
					decleration.rule = $.rgbHex(decleration.rule);
				});
				$(matrix).children().remove();
				CM.createTables.init();
				
			}
		})
		
	};
	
	return{
		init: function(){
			bindSwitchEvents();
		}
	};
})();

CM.persistanceSwitcher = (function(){
		
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

