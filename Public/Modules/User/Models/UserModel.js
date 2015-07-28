'use strict';

angular.module('User').factory('UserModel', ['Authentication', function(Authentication) {

	var User = function (data) {
		var self = this;
		
		self._Id = data._Id;
		self.PrimeiroNome = data.PrimeiroNome;
		self.UltimoNome = data.UltimoNome;
		self.Email = data.Email;
		self.NomeDeUsuario = data.NomeDeUsuario;
		self.Senha = data.Senha;
		self.ConfirmacaoDeSenha = data.ConfirmacaoDeSenha;
		
		return self;
	};
	
	User.prototype.GetRules = function () {
		return {
			primeiroNome: {
				identifier: 'PrimeiroNome',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				}]
			},
			ultimoNome: {
				identifier: 'UltimoNome',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				}]
			},
			email: {
				identifier: 'Email',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				},
				{
					type: 'email',
					prompt: 'Email inválido'
				}]
			},
			nomeDeUsuario: {
				identifier: 'NomeDeUsuario',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				}]
			},			
			senha: {
				identifier: 'Senha',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				},
				{
					type: 'length[4]',
					prompt: 'A senha deve conter ao menos 4 caracteres'
				}]
			},
			confirmacaoDeSenha: {
				identifier: 'ConfirmacaoDeSenha',
				rules: [{
					type: 'match[Senha]',
					prompt: 'As senhas não combinam'
				}]
			}
		};
	};
	
	User.prototype.Authentication = new Authentication(User);
	
	return User;
}]);