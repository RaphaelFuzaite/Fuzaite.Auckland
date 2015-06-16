'use strict';
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('dashboard', {
			url: '/Dashboard',
			templateUrl: 'Modules/Dashboard/Views/Home.html'
		});
	}
]);