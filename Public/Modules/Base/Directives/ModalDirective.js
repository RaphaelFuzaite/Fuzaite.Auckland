'use strict';

angular.module('Base').directive('modal', ['Modal', function(Modal) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/Modules/Base/Templates/Modal.html',
			controller: ['$scope', function ($scope) {				
				$scope.Modal = Modal;
			}]
		};
	}
]).directive('modalContent', ['Modal', '$compile', function(Modal, $compile) {
		return {
			restrict: 'A',
			replace: true,
			link: function ($scope, element, attrs) {
				$scope.$watch("Modal.Conteudo", function (value) {
					element.append($compile(value)($scope));
				});	
			}
		};
	}
]);