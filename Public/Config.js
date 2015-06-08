'use strict';

var ApplicationConfiguration = (function(){
	
	var applicationModuleName = 'fuzaite.auckland';	
	var registerModule = function (moduleName, dependencies) {
		angular.module(moduleName, dependencies || []);
		angular.module(applicationModuleName).requires.push(moduleName);
	};
	
	return {
		applicationModuleName: 				applicationModuleName,
		applicationModuleNameDependencies: 	['ui.router'],
		registerModule: 					registerModule
	};
	
})();