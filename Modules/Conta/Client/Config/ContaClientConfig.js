'use strict';
angular.module('Conta').config(['$stateProvider', function($stateProvider) {
				
		$stateProvider.
		state('Contas', {
			//abstract: true,
			url: '/Contas',
			templateUrl: 'Modules/Conta/Views/ListarContas.html',
			data: {
				Titulo: 'Contas',
				Subtitulo: 'Centralize suas receitas',
			},
			ncyBreadcrumb: {
				parent: 'Inicio',
				label: 'Contas'
  			}
		});
	}
]);