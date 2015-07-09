'use strict';

module.exports ={
	DB: {
		URI: 'mongodb://f.auck-w:RvUKjkDtdPgPRehgCvb6@ds036638.mongolab.com:36638/auckland-prod',
		Options: {
			User: 'f.auck-w',
			Pass: 'RvUKjkDtdPgPRehgCvb6'
		},
	},
	Assets: {
		Lib: {
			Style: [
				'Public/Lib/semantic-ui/dist/semantic.min.css'
			],
			Script: [
				'Public/Lib/jquery/dist/jquery.js',
				'Public/Lib/angular/angular.js',
				'Public/Lib/angular-ui-router/release/angular-ui-router.min.js',
				'Public/Lib/angular-animate/angular-animate.min.js',
				'Public/Lib/angular-bootstrap/ui-bootstrap.min.js',
				'Public/Lib/angular-local-storage/dist/angular-local-storage.min.js',
				'Public/Lib/semantic-ui/dist/semantic.min.js',
				'Public/Lib/Init.js'
			]
		},
		/*Style: 'Public/App.min.css',
		Script: 'Public/App.min.js',*/
		Style: [
			'Public/Style/*.css',
			'Public/Modules/*/*.css',
			'Public/Modules/*/*/*.css'
		],
		Script: [
			'Public/Config.js',
			'Public/App.js',
			'Public/Modules/*/*.js',
			'Public/Modules/*/*[!Tests]*/*.js',
		]
	}	
};