'use strict';

angular.module('Base').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('Inicio', {
			url: '/',
			templateUrl: 'Modules/Base/Views/BaseHome.html'
		});
	}
]).config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication', 'Messaging',
			function($q, $location, Authentication, Messaging) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.RemoveUser();

								// Redirect to signin page
								$location.path('Acessar');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}
						
						Messaging.CompleteDisclaimer(rejection.status, rejection.data);

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]).run(['Authentication', function (Authentication) {
    Authentication.FetchUser();
}]);