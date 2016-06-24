angular.module('myPort', ['ui.router'])
	
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
		.state('miniprojects', {
			url: '/otherprojects',
			templateUrl: '/app/partials/otherprojects/index.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: '/app/partials/contact/index.html'
		})
	 $urlRouterProvider.otherwise('/home');
}]);


