'use strict';

angular.module('Conta').factory('ContaModel', function() {

	var Conta = function (data) {
		var self = this;
		
		self.Criacao = data.Criacao;
		self.Nome = data.Nome;
		self.Atualizacao = data.Atualizacao;
		self.Descricao = data.Descricao;
		self.Cor = data.Cor;
		self.Saldo = data.Saldo;
		self.CategoriaDeConta = data.CategoriaDeConta;
		
		return self;
	}
	
	Conta.prototype.GetRules = function () {
		return {
			nome: {
				identifier: 'Nome',
				rules: [{
					type: 'empty',
					prompt: 'Campo obrigatório'
				}]
			},
			descricao: {
				identifier: 'Descricao',
				optional: true,
				rules: [{
					type: "empty",
					prompt: 'Dados inválidos para este campo'
				}]
			},
			cor: {
				identifier: 'Cor',
				rules: [{
					type: "empty",
					prompt: 'Selecione uma opção'
				}]
			},
			saldo: {
				identifier: 'Saldo',
				rules: [{
					type: "regExp[/^[+-]?[0-9]{1,3}(?:\.?[0-9]{3})*(?:,[0-9]{2})?$/]",
					prompt: 'Valor inválido'
				}]
			},
			categoriaDeConta: {
				identifier: 'CategoriaDeConta',
				rules: [{
					type: 'empty',
					prompt: 'Selecione uma opção'
				}]
			},
		}
	}
	
	return Conta;
});