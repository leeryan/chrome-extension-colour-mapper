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
		{rule: 'rgb(51, 51, 51)', count: 10},
		{rule: 'rgb(51, 51, 51)', count: 10},
		{rule: 'rgb(97, 127, 16)', count: 10}
	]}, {
	property : 'border',
	declerations: [
		{rule: 'rgb(255, 255, 255)', count: 10},
		{rule: 'rgb(0, 0, 0)', count: 10},
		{rule: 'rgb(51, 51, 51)', count: 10},
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
			
			_.map(masterArr[i].declerations, function(decleration){
				
				if(_.contains(appPropertyObj.colours, decleration.rule)){
					console.log('increment');
				} else {
					console.log('add');
					appPropertyObj.colours.push(decleration.rule);
					appPropertyObj.declerations.push(decleration);
				}
				
				
				
				
			});
			
			_.each(appPropertyObj.declerations, function(decleration){
				
				
				
			})
			
		}
		
		console.log(appPropertyObj);
		
		// Find declerations in each array object. 
		
		//If the rule doesn;t exist add it.
		
		//Else just increment the couter.
		
		
	
	}

	
	
	$scope.changeColourValue = function(element){
		//Add active class to selected element
		$scope.selected = element;
		//Update the model
		_.map($scope.declerations, function(decleration){
			decleration.rule = $.rgbHex(decleration.rule);
		});
	};
	
	$scope.changePropertySet = function(property){
		console.log('changePropertySet');
		console.log(property);
		
		//Add property set to appPropertyObj
		function addProperty(property){
			
		}
		
		//Remove property set to appPropertyObj
		function removeProperty(property){
			
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

