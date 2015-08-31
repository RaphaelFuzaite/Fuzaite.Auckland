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
		})/*.
		state('Contas.Lista', {
			//abstract: true,
			url: '/Lista',
			templateUrl: 'Modules/Conta/Views/ListarContas.html',
			ncyBreadcrumb: {
				parent: 'Contas',
				label: 'Registros cadastrados'
  			}
		}).
		state('Contas.Lista.Criar', {
			url: '/Criar',
			templateUrl: 'Modules/Conta/Views/CadastrarConta.html',
			ncyBreadcrumb: {
				parent: 'Contas.Lista',
				label: 'Criar nova conta'
  			}
		})*/;
		
		
		/*$stateProvider.
		state('Perfil', {
			url: '/Configuracoes/Perfil',
			templateUrl: 'Modules/Usuario/Views/Configuracoes/PerfilUsuario.html'
		}).
		state('Preferencias', {
			url: '/Configuracoes/Preferencias',
			templateUrl: 'Modules/Usuario/Views/Configuracoes/PreferenciasUsuario.html'
		}).
		state('Cadastrar', {
			url: '/Cadastrar',
			templateUrl: 'Modules/Usuario/Views/Autenticacao/CadastrarUsuario.html'
		}).
		state('Acessar', {
			url: '/Acessar',
			templateUrl: 'Modules/Usuario/Views/Autenticacao/AcessarUsuario.html'
		});*/
	}
]);