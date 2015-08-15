'use strict';

angular.module('Usuario').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
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
		});
	}
]);