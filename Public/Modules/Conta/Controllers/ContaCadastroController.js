'use strict';

angular.module('Conta').controller('ContaCadastroController', ['$scope', '$http', 'ContaModel', 'Loader',
	function($scope, $http, ContaModel, Loader) {

		$scope.Conta = new ContaModel({});

		$scope.Form = {
			Loading: Loader.FormLoad,
			IsInvalid: function () { 
				return !$(this.$parent.Popup.Element).form('validate form') 
			}
		};
		
		$http.get('/Account/Category').success(function (response) {
			$scope.CategoriasDeConta = response;
		});
		
		$scope.Enviar = function () {
			if (this.Form.IsInvalid.call(this)) {
				return false;
			}
			
			$scope.Form.Loading = true;
			//Loader.AlternateFormLoad();
		};
	}
]);