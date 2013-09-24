/* global Handlebars */
var myApp = angular.module('myApp', []);

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

function ColourMapper($scope){
	
	$scope.colourObj = colourObj;
	$scope.declerations = colourObj.declerations;
	$scope.colourTypes = ['RGB', 'HEX' ];
	$scope.selected = $scope.colourTypes[0];
	
	$scope.changeColourValue = function(element){
		//Add active class to selected element
		$scope.selected = element;
		//Update the model
		_.map($scope.declerations, function(decleration){
			decleration.rule = $.rgbHex(decleration.rule);
		});
	};
}

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
*/

$(document).ready(function(){
	//CM.createTables.init();
	//CM.colourValueSwitcher.init();
	//CM.persistanceSwitcher.init();
});

