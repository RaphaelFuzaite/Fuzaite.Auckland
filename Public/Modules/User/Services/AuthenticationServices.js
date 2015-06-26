'use strict';

angular.module('User').factory('Authentication', ['$window', function($window) {

	var authentication = {};

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
			},
			nomeDeUsuario: {
				identifier: 'NomeDeUsuario',
				rules: [{
					type: 'empty',
					prompt: "Campo obrigatório"
				}]
			},			
			senha: {
				identifier: 'Senha',
				rules: [{
					type: 'empty',
					prompt: "Campo obrigatório"
				},
				{
					type: 'length[4]',
					prompt: "A senha deve conter ao menos 4 caracteres"
				}]
			},
			confirmacaoDeSenha: {
				identifier: 'ConfirmacaoDeSenha',
				rules: [{
					type: 'match[Senha]',
					prompt: "As senhas não combinam"
				}]
			}
		};
	})();

	authentication.User = { User: $window.user };
	authentication.Model = model;
	
	return { User: $window.User };
}]);