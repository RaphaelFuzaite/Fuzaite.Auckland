'use strict';
angular.module('Projeto').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('projeto', {
			url: '/Projetos',
			templateUrl: 'Modules/Projeto/Views/ProjetosListar.html'
		});
	}
]);