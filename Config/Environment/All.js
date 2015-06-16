'use strict';

module.exports = {
	App: {
		Title: 'Fuzaite.Auckland | Gerenciador Financeiro de Projetos',
		Description: 'Gerenciamento de finanças de projetos pessoais para a conquista de metas pré-estabelecidas',
		Keywords: 'gerenciamento de finanças, fuzaite',
	},
	Port: process.env.PORT || 3000,
	TemplateEngine: 'swig',
	SessionSecret: 'Auckland',
	SessionColection: 'sessions',
	SessionCookie: {
		path: '/',
		httpOnly: true,
		secure: false,
		maxAge: null,
	},
	SessionName: 'connect.sid',
	Assets: {
		Lib: {
			Style: [
				'Public/Lib/semantic-ui/dist/semantic.css'
			],
			Script: [
				'Public/Lib/jquery/dist/jquery.js',
				'Public/Lib/angular/angular.js',
				'Public/Lib/angular-ui-router/release/angular-ui-router.js',
				'Public/Lib/angular-bootstrap/ui-bootstrap.js',
				'Public/Lib/semantic-ui/dist/semantic.js',
				'Public/Lib/Init.js'
			]
		},
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