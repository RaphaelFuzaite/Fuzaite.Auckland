'use strict';

angular.module('Base').directive('componentModal', ['Modal', function(Modal) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/Modules/Base/Templates/Modal.html',
			controller: ['$scope', function ($scope) {				
				$scope.Modal = Modal;
			}]
		};
	}
])
.directive('componentModalContent', ['Modal', '$compile', function(Modal, $compile) {
		return {
			restrict: 'A',
			replace: true,
			link: function ($scope, element, attrs) {
				$scope.$watch('Modal.Conteudo', function (value) {
					element.append($compile(value)($scope));
				});	
			}
		};
	}
]).directive('componentPopup', ['Popup', function(Popup) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/Modules/Base/Templates/Popup.html',
			controller: ['$scope', function ($scope) {				
				$scope.Popup = Popup;
			}]
		};
	}
])
.directive('componentPopupContent', ['Popup', '$compile', function(Popup, $compile) {
		return {
			restrict: 'A',
			replace: true,
			link: {
				post: function ($scope, element, attrs) {
					$scope.$watch('Popup.Conteudo', function (value) {
						element.append($compile(value)($scope));
						if (value) {
							Popup.Then();
						}
					});	
				}
			}
		};
	}
]);