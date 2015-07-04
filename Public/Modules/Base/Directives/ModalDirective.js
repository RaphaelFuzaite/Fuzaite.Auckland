'use strict';

angular.module('Base').directive('modal', ['Modal', function(Modal) {
		return {
			restrict: 'A',
			templateUrl: '/Modules/Base/Templates/Modal.html',
			controller: ['$scope', function ($scope) {			
				$scope.Modal = Modal;
			}]
		};
	}
]);