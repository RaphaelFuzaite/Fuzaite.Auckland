'use strict';
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('Dashboard', {
			url: '/Dashboard',
			templateUrl: 'Modules/Dashboard/Views/Home.html',
			data: {
				Titulo: 'Dashboard',
				Subtitulo: 'Resumo de desempenho',
			},
			ncyBreadcrumb: {
				parent: 'Inicio',
				label: 'Dashboard'
  			}
		});
	}
]);