'use strict';
angular.module('Conta').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('conta', {
			url: '/Contas',
			templateUrl: 'Modules/Conta/Views/ContasListar.html'
		});
	}
]);