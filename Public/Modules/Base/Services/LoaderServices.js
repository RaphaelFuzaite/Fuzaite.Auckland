'use strict';

angular.module('Base').service('Loader', [function () {
		var _loader = {
			FormLoad: false,
			AlternateFormLoad: function() {
				_loader.FormLoad = !this.FormLoad;
			}
		};
		
		return _loader;
	}
]);