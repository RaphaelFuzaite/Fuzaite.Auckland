'use strict';
angular.module('Conta').config(['$stateProvider', function($stateProvider) {
			
		$stateProvider
			.state('Contas', {
				abstract: true,
				url: '/Contas',
				template: '<ui-view/>',
			})
			.state('Contas.Home', {
				url: '',
				templateUrl: 'Modules/Conta/Views/Contas.Client.View.html',
				data: {
					Titulo: 'Contas',
					Subtitulo: 'Centralize suas receitas',
				},
				ncyBreadcrumb: {
					parent: 'Inicio',
					label: 'Contas'
				}
			})
			.state('Contas.Listar', {
				url: '/Listar',
				templateUrl: 'Modules/Conta/Views/Listar-Contas.Client.View.html',
				data: {
					Titulo: 'Contas',
					Subtitulo: 'Gerencie suas contas',
				},
				ncyBreadcrumb: {
					parent: 'Contas.Home',
					label: 'Listagem de Contas cadastradas'
				}
			})
			.state('Contas.Cadastro', {
				url: '/Cadastro',
				templateUrl: 'Modules/Conta/Views/Cadastro-Contas.Client.View.html',
				data: {
					Titulo: 'Contas',
					Subtitulo: 'Cadastre suas contas',
				},
				ncyBreadcrumb: {
					parent: 'Contas.Home',
					label: 'Cadastro de Contas'
				}
			});
	}
]);