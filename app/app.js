angular.module('myPort', [
	'ui.router',
	'Projects.app.js'
	])
	
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$stateProvider
	  	.state('home', {
			url: '/home',
		    templateUrl: '/app/partials/bio/index.html'
		  })
		.state('projects', {
			url: '/projects',
		    templateUrl: '/app/partials/projects/index.html',
		    controller: 'ProjectsCtrl'
		  })
		
	 $urlRouterProvider.otherwise('/home');
}]);


