'use strict';

var ApplicationConfiguration = (function(){
	
	var applicationModuleName = 'fuzaite.auckland';
	var registerModule = function (moduleName, dependencies) {
		angular.module(moduleName, dependencies || []);
		angular.module(applicationModuleName).requires.push(moduleName);
	};
	
	return {
		ModuleName: 				applicationModuleName,
		ModuleNameDependencies: 	['ui.router', 'ui.bootstrap'],
		RegisterModule: 			registerModule,
		VendorsInitializer:			initVendors
	};
	
})();