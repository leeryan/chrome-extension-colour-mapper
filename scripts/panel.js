//Object returned from the background script.
var styleData = [{
	property: 'color',
	declerations: [
		{rule: 'rgb(51, 51, 51)', count: 10},
		{rule: 'rgb(255, 255, 255)', count: 10},
		{rule: 'rgb(59, 59, 59)', count: 10},
		{rule: 'rgb(20, 20, 20)', count: 10},
		{rule: 'rgb(66, 139, 202)', count: 10},
		{rule: 'rgb(97, 127, 16)', count: 10},
		{rule: 'rgb(0, 0, 0)', count: 10},
		{rule: 'rgb(189, 63, 66)', count: 10}
	]
}];

//Define the angular module
var colourMapper = angular.module('colourMapper', []);

//Controller

colourMapper.controller('mapperCtrl', ['$scope', function($scope){
	
	var appStyleData = {
		declerations: [
			{rule: 'rgb(51, 51, 51)', count: 10},
			{rule: 'rgb(255, 255, 255)', count: 10},
			{rule: 'rgb(59, 59, 59)', count: 10},
			{rule: 'rgb(20, 20, 20)', count: 10},
			{rule: 'rgb(66, 139, 202)', count: 10},
			{rule: 'rgb(97, 127, 16)', count: 10},
			{rule: 'rgb(0, 0, 0)', count: 10},
			{rule: 'rgb(189, 63, 66)', count: 10}
		],
		colourTypes: ['RGB', 'HEX' ]
	};
	
	//Run intialization taska befire the template is compiled. 
	$scope.init = function(){
		
		$scope.appPropertyObj = appStyleData;
		$scope.declerations = appStyleData.declerations;
		$scope.colourTypes = appStyleData.colourTypes;
		$scope.includes = appStyleData.includes;
		$scope.selected = $scope.colourTypes[0];	
		
	};
	
	//Toggle the values between hex/rgba.
	$scope.changeColourValue = function(element){
		//Add active class to selected element
		$scope.selected = element;
		
		//If already selected do nothing else run function DO THIS IN ANGULAR - not working
		if($(element).hasClass('active')){
			return false;
		} else {
			//Update the model
			_.map($scope.declerations, function(decleration){
				decleration.rule = $.rgbHex(decleration.rule);
			});	
		}
		
	};
	
	//Toggle journey persistance on and off.
	$scope.toggleJourneyPersistance = function(){
		
	};
	
}]);

//Colour value switcher. 



//Application count functionality 



