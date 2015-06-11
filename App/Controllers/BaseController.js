'use strict';

exports.Index = function(req, res) {
	res.render('Index', {
		user: req.user || null,
		request: req
	});
};