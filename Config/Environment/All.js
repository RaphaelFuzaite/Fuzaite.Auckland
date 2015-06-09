'use strict';

module.exports = {
	App: {
		Title: 'Fuzaite.Auckland | Gerenciador Financeiro de Projetos',
		Description: 'Gerenciamento de finanças de projetos pessoais para a conquista de metas pré-estabelecidas',
		Keywords: 'gerenciamento de finanças, fuzaite',
	},
	Port: process.env.PORT || 3000,
	//templateEngine: 'swig',
	Assets: {
		Lib: {
			Style: [
				'Public/Lib/semantic-ui/dist/semantic.css'
			],
			Script: [
				'Public/Lib/angular/angular.js',
				'Public/Lib/angular-ui-router/release/angular-ui-router.js',
				'Public/Lib/semantic-ui/dist/semantic.js'
			]
		},
		Style: [
			'Public/Style/main.css'
		],
		Script: [
			'Public/Config.js',
			'Public/App.js',
			'Public/Modules/*/*.js',
			'Public/Modules/*/*[!Tests]*/*.js',
		]
	}
};