'use strict';

angular.module('Conta').controller('ContaController', ['$scope', 'Modal',
	function($scope, Modal) {
		$scope.Modal = Modal.SetModal({
			Title: "Adicione sua conta",
			Content: "<h3>NOME DA CONTA</h3>",
			Size: 'P',
		}, [{Chave:"positivo", Icone: "check", Texto: "Continuar", Click: function () { console.log("Modal click..."); }}]);
	}
]);