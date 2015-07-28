'use strict';

angular.module('Conta').controller('ContaCadastroController', ['$scope', '$http', 'ContaModel', 'Loader',
	function($scope, $http, ContaModel, Loader) {

		$scope.Conta = new ContaModel({});

		$scope.Form = {
			Loading: Loader.FormLoad,
			IsInvalid: function () { 
				return !$(this.$parent.Popup.Element).form('validate form');
			}
		};
		
		$http.get('/Account/Category').success(function (response) {
			$scope.CategoriasDeConta = response;
		});
		
		$scope.Cores = [
			{ Valor: 'red', 	Nome: 'Vermelho' },
			{ Valor: 'orange', 	Nome: 'Laranja' },
			{ Valor: 'yellow', 	Nome: 'Amarelo' },
			{ Valor: 'green', 	Nome: 'Verde' },
			{ Valor: 'teal', 	Nome: 'Teal' },
			{ Valor: 'blue', 	Nome: 'Azul' },
			{ Valor: 'purple', 	Nome: 'Roxo' }
		];
		
		$scope.Enviar = function () {
			
			if (this.Form.IsInvalid.call(this)) {
				return false;
			}
			
			$scope.Form.Loading = true;
			
			$http.post('/Account/Create', $scope.Conta).success(function(response) {
				console.log('Sucesso', response);
			}).error(function(response) {
				console.log('Erro', response);
			}).finally(function() {
				$scope.Form.Loading = false;
			});
		};
	}
]);