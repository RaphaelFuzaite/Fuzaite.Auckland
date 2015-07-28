'use strict';

angular.module('User').factory('Authentication', ['localStorageService', function(localStorageService) {

	var Authentication = function (data) {
		var self = this;
		
		self.User = data;
		self.Storage = {
			Prefix: 'fAuck',
			Definitions: {
				User: this.Storage.Prefix + 'User'
			}	
		};
		
		return self;
	};
	
	Authentication.prototype.Set = function (user) {
		localStorageService.set(this.Storage.Definitions.User, user);
	};	
	
	Authentication.prototype.Get = function () {
		this.User = localStorageService.get(this.Storage.Definitions.User);
	};
	
	Authentication.prototype.Fetch = function (user) {
		if (!angular.isUndefined(user)) {
			this.Set();
		}
		this.Get();
	};
	
	Authentication.prototype.Remove = function () {
		localStorageService.remove(this.Storage.Definitions.User);
		this.Get();
	};
	
	return Authentication;
}]);