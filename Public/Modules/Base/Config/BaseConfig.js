'use strict';

angular.module('Base').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('Inicio', {
			url: '/',
			templateUrl: 'Modules/Base/Views/BaseHome.html'
		});
	}
]);