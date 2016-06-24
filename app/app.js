(function(){
'use strict';

angular.module('myPortfolio', ['ui-route'])
	
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider

	.state('home', {
		url: '/home',
	    templateUrl: 'partials/bio.html',
	    //controller: 'HomeCtrl as home',
	  })

	.state('projects', {
		url: '/projects',
	    templateUrl: 'partials/projects.html',
	    //controller: 'SearchCtrl as search',
	  })

	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'partials/contact.html',
		//controller: 'DashboardCtrl as dash',
	})

	$urlRouterProvider.otherwise('/home');
});

})