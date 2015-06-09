'use strict';

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleNameDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', function($locationProvider){
	$locationProvider.hasPrefix('!');
}]);