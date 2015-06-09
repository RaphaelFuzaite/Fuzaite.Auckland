'use strict';

module.exports ={
	DB: {
		URI: 'mongodb://localhost/auckland-prod',
		Options: {
			User: '',
			Pass: ''
		},
	},
	Assets: {
		Lib: {
			Style: [
				'Public/Lib/semantic-ui/dist/semantic.min.css'
			],
			Script: [
				'Public/Lib/angular/angular.min.js',
				'Public/Lib/angular-ui-router/release/angular-ui-router.min.js',
				'Public/Lib/semantic-ui/dist/semantic.min.js'
			]
		},
		Style: 'Public/App.min.css',
		Script: 'Public/App.min.js',
	}	
};