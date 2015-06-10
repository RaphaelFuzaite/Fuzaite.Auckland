'use strict';

var _ 	 = require('lodash'),
	glob = require('glob');
	
module.exports = (function(_) {
	return _.extend(require('./Environment/All'), require('./Environment/'+ process.env.NODE_ENV) || {});
})(_);

module.exports.GetGlobbedFiles = function(globPatterns, removeRoot) {	
	var _this 		= this,
		urlRegex 	= new RegExp('^(?:[a-z]+:)?\/\/', 'i'),
		output 		= [];
		
	if (_.isArray(globPatterns)) {
		globPatterns.forEach(function(globPattern) {
			output = _.union(output, _this.GetGlobbedFiles(globPattern, removeRoot));
		});
	} else if (_.isString(globPatterns)) {
		if (urlRegex.test(globPatterns)) {
			output.push(globPatterns);
		} else {
			var files = glob.sync(globPatterns);
			if (removeRoot) {
			    files = files.map(function(file) {
			        return file.replace(removeRoot, '');
			    });
			}
			output = _.union(output, files);
		}
	}

	return output;
};

module.exports.GetJavaScriptAssets = function(includeTests) {
	var output = this.GetGlobbedFiles(this.Assets.Lib.Script.concat(this.Assets.Script), 'Public/');

	if (includeTests) {
		output = _.union(output, this.GetGlobbedFiles(this.Assets.Tests));
	}

	return output;
};

module.exports.GetCSSAssets = function() {
	var output = this.GetGlobbedFiles(this.Assets.Lib.Style.concat(this.Assets.Style), 'Public/');
	return output;
};