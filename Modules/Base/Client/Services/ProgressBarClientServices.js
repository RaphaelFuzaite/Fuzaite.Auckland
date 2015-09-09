'use strict';

angular.module('Base').service('ProgressBar', [function () {
	
	this.Enable = false;
	this.Percent = 80;
	
	this.IsEnable = function () {
		if (this.Percent === 0 || this.Percent === 100) {
			this.Enable = true;	
		} else {
			this.Enable = false;
		}
	};
	
	this.UpdateProgress = function (value) {
		if (this.IsEnable()) {
			this.Percent = value;
		}
	};
	
	this.GetPercent = function () {
		return this.Percent;
	};
	
}]);