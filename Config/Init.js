'use strict';

var glob = require('glob'),
	_ 	=	require('lodash');

module.exports = function() {
	
	var environmentFiles = glob.sync('./Config/Environment/' + process.env.NODE_ENV + '.js');
	if (!environmentFiles.length) {
		if (process.env.NODE_ENV) {
			console.log('No configuration file found for "' + process.env.NODE_ENV + '" environment using development instead');
		} else {
			console.log('NODE_ENV is not defined! Using default development environment');
		}
		process.env.NODE_ENV = 'development';
	}
	_.capitalize(process.env.NODE_ENV);
};