'use strict';

var _ = require('lodash');
	
module.exports = _.extend(
	require('./Actions/ContaCRUDServerAction'),
	require('./Actions/ContaCategorizationServerAction')
);