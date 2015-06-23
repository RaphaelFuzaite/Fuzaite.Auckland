'use strict';

angular.module('User').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('Perfil', {
			url: '/Configuracoes/Perfil',
			templateUrl: 'Modules/User/Views/Configuracoes/Perfil.html'
		}).
		state('Preferencias', {
			url: '/Configuracoes/Preferencias',
			templateUrl: 'Modules/User/Views/Configuracoes/Preferencias.html'
		}).
		/*state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).*/
		state('Cadastrar', {
			url: '/Cadastrar',
			templateUrl: 'Modules/User/Views/Autenticacao/Cadastrar.html'
		}).
		state('Acessar', {
			url: '/Acessar',
			templateUrl: 'Modules/User/Views/Autenticacao/Acessar.html'
		})/*.
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		})*/;
	}
]);