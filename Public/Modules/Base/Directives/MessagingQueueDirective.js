'use strict';

angular.module('Base').directive('messagingQueue', ['Messaging', function(Messaging) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/Modules/Base/Templates/MessagingQueue.html',
			controller: ['$scope', function ($scope) {
				
				$scope.MessagingService = Messaging;
				
				$scope.$watchCollection('MessagingService.GetDisclaimer()', function (value) {
					$scope.Mensagens = value;
				});

			}]
		};
	}
]);