'use strict';

angular.module('Conta').controller('CadastrarContaClientController', ['$scope', '$http', 'Form',
	function($scope, $http, Form) {
		
		$scope.Form = new Form({
			Model: 'ContaClientModel',
			Url: '/api/Account/Create',
			Method: 'post'
		});
		
		$scope.Conta = $scope.Form.Model;
		
		/*$scope.Conta = new ContaModel({});

		$scope.Form = {
			Loading: Loader.FormLoad,
			IsInvalid: function () { 
				return !$(this.$parent.Popup.Element).form('validate form');
			}
		};*/
		
		$http.get('/api/Account/Category').success(function (response) {
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
		
		// $scope.Enviar = function () {
		// 	
		// 	if (this.Form.IsInvalid.call(this)) {
		// 		return false;
		// 	}
		// 	
		// 	$scope.Form.Loading = true;
		// 	
		// 	$http.post('/api/Account/Create', $scope.Conta).success(function(response) {
		// 		console.log('Sucesso', response);
		// 	}).error(function(response) {
		// 		console.log('Erro', response);
		// 	}).finally(function() {
		// 		$scope.Form.Loading = false;
		// 	});
		// };
	}
]);