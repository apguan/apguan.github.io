angular.module('myPort', [
	'ui.router',
	])
	
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$stateProvider
	  	.state('home', {
			url: '/home',
		    templateUrl: '/app/partials/bio/index.html',
		    data: {
		    	css: 'app/partials/bio/stylesheet.css'
		    }
		  })
		.state('projects', {
			url: '/projects',
		    templateUrl: '/app/partials/projects/index.html'
		  })
		
	 $urlRouterProvider.otherwise('/home');
}]);


