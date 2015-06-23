'use strict';

angular.module('Base').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('Inicio', {
			url: '/',
			templateUrl: 'Modules/Base/Views/BaseHome.html'
		});
	}
]).config(['$httpProvider', 'Errors',
	function($httpProvider) {
		
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.User = null;

								// Redirect to signin page
								$location.path('Acessar');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}
						
						Errors.CompleteDisclaimer(rejection.status, rejection.data);

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);