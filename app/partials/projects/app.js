angular.module('Projects.app.js', [])

.controller('ProjectsCtrl',['$scope', function($scope){

	$scope.pictures = [
	{
	name:"jQuery Calculator", 
	link:"http://codepen.io/apguan/pen/zBvMdJ", 
	url:"/app/assets/jquerycalc.png"
	},
	{
	name:"WikiSearch", 
	link:"http://codepen.io/apguan/pen/YqRyqN", 
	url:"/app/assets/wikisearch.png"
	},
	{
	name:"WikiQuotes", 
	link:"http://codepen.io/apguan/pen/bpxqMB", 
	url:"/app/assets/wikiquotes.png"
	},
	{
	name:"Clock.js", 
	link:"http://codepen.io/apguan/pen/beeQzd", 
	url:"/app/assets/clock.png"
	}
	];


	$scope.hoverIn = function(){
		this.edit = true;
	};

	$scope.hoverOut = function(){
		this.edit = false;
	}
}]);

