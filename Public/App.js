'use strict';

angular.module(ApplicationConfiguration.ModuleName, ApplicationConfiguration.ModuleNameDependencies);

angular.module(ApplicationConfiguration.ModuleName).config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [ApplicationConfiguration.ModuleName]);
});