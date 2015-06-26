'use strict';

var init 		= require('./Config/Init')(),
	config 		= require('./Config/Config'),
	mongoose 	= require('mongoose');
	
var db = mongoose.connect(config.DB.URI, config.DB.Options, function(err) {
	if (err) {
		console.log('Could not connect to MongoDB!');
	}
});

mongoose.connection.on('error', function(err) {
	console.log('MongoDB connection error: ' + err);
	process.exit(-1);
});

var app = require('./Config/Express')(db);

require('./Config/Passport')();

app.listen(config.Port);

exports = module.exports = app;

console.log('--');
console.log(config.App.Title + ' application started');
console.log('Environment:\t\t\t' + process.env.NODE_ENV);
console.log('Port:\t\t\t\t' + config.Port);
console.log('Database:\t\t\t' + config.DB.URI);
if (process.env.NODE_ENV === 'Secure') {
	console.log('HTTPs:\t\t\t\ton');
}
console.log('--');