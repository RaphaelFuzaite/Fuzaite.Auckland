'use strict';

var base = require('../../App/Controllers/BaseController');
module.exports = function(app) {
	app.route('/').get(base.Index);	
};