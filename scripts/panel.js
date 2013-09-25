/* global Handlebars */
var colourMapper = angular.module('colourMapper', []);

//Model returned from background script.
var masterArr = [{
	property : 'color',
	declerations: [
		{rule: 'rgb(51, 51, 51)', count: 10},
		{rule: 'rgb(255, 255, 255)', count: 10},
		{rule: 'rgb(59, 59, 59)', count: 10},
		{rule: 'rgb(20, 20, 20)', count: 10},
		{rule: 'rgb(66, 139, 202)', count: 10}
	]}, {
	property : 'background',
	declerations: [
		{rule: 'rgb(51, 51, 51)', count: 11},
		{rule: 'rgb(51, 51, 51)', count: 11},
		{rule: 'rgb(97, 127, 16)', count: 10},
		{rule: 'rgb(0, 0, 0)', count: 10},
	]}, {
	property : 'border',
	declerations: [
		{rule: 'rgb(255, 255, 255)', count: 11},
		{rule: 'rgb(0, 0, 0)', count: 10},
		{rule: 'rgb(51, 51, 51)', count: 12},
		{rule: 'rgb(189, 63, 66)', count: 10}
	]
}];


//Controllers
colourMapper.controller('mapperCtrl', ['$scope', function($scope){

	var appPropertyObj = {};
	
	$scope.init = function(){
	
		//Create app model from master model
		appPropertyObj = {
			property : 'master',
			properties : ['color', 'background', 'border'],
			colourTypes: ['RGB', 'HEX' ],
			declerations: [],
			colours: []
		};		
	
		//Setup variables to usin win controllers
		$scope.appPropertyObj = appPropertyObj;
		$scope.declerations = appPropertyObj.declerations;
		$scope.colourTypes = appPropertyObj.colourTypes;
		$scope.properties = appPropertyObj.properties;
		$scope.selected = $scope.colourTypes[0];
	
		
		for(var i = 0; i < masterArr.length; i++){
			
			_.each(masterArr[i].declerations, function(masterDecleration){
				//If the rule is already in the colours array
				if(_.contains(appPropertyObj.colours, masterDecleration.rule)){
					
					var colourToIncrement = masterDecleration.rule;
					
					_.each(appPropertyObj.declerations, function(appDecleration){
						
						if(appDecleration.rule === colourToIncrement){
							appDecleration.count = appDecleration.count + masterDecleration.count;
						}
						
					});
					
				} else {
					
					//Pop the value into the colur array
					appPropertyObj.colours.push(masterDecleration.rule);
					//Add decleration to master object
					appPropertyObj.declerations.push(masterDecleration);
				}
				
			});
			
		}
	
	}
	
	
	
	//Get a set of declerations from the masterArr.
	$scope.getPropertySet = function(property){
		_.each(masterArr, function(value, key, list){
			if(value.property === property){
				return value.declerations;
			}
		});
	};

	$scope.changeColourValue = function(element){
		//Add active class to selected element
		$scope.selected = element;
		//Update the model
		_.map($scope.declerations, function(decleration){
			decleration.rule = $.rgbHex(decleration.rule);
		});
	};
	
	$scope.changePropertySet = function(property){
		
		//if checked remove else call add
		
		//Add property set to appPropertyObj
		function addProperty(property){
			
		}
		
		//Remove property set to appPropertyObj
		function removeProperty(){
			
			//Grab the declerations from the deselected property in the masterArr.
			var declerations = $scope.getPropertySet(property);
			
			console.log(declerations);
			
			//loop through the appPropertyObj declerations.
			
			//remove total from the count.
			
		}
		
	}
	
}]);

//Directives
colourMapper.directive('eatClick', function(){
	return function(scope, element, attrs){
		$(element).click(function(event){
			event.preventDefault();
		});
	}
});

