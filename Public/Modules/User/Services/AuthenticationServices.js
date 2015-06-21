'use strict';

angular.module('User').factory('Authentication', ['$window', function($window) {

	var authentication = {};

	var auth = {
		User: $window.user
	};

	var model = (function() {
		return {
			primeiroNome: {
				identifier: 'PrimeiroNome',
				rules: [{
					type: 'empty',
					prompt: "Campo obrigatório"
				}]
			},
			ultimoNome: {
				identifier: 'UltimoNome',
				rules: [{
					type: 'empty',
					prompt: "Campo obrigatório"
				}]
			},
			email: {
				identifier: 'Email',
				rules: [{
					type: 'empty',
					prompt: "Campo obrigatório"
				},
				{
					type: 'email',
					prompt: "Email inválido"
				}]
			}
		};
	})();

	authentication.Auth = auth;
	authentication.Model = model;
	
	return authentication;
}]);