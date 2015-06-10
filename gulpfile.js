'use strict';

var gulp = require('gulp');

var watchFiles = {
		serverViews: ['App/Views/**/*.*'],
		serverJS: ['gulpfile.js', 'server.js', 'Config/**/*.js', 'App/**/*.js', '!App/tests/']
	};

var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('loadConfig', function() {
	var init = require('./Config/Init')();
	var config = require('./Config/Config');
});

gulp.task('lint', function () {
  gulp.src(watchFiles.serverViews.concat(watchFiles.serverJS))
    .pipe(plugins.jshint())
})

gulp.task('start', function () {
  plugins.nodemon({
	script: 'server.js',
	ext: 'js html',
  }).on('change', ['lint']);
});

gulp.task('default', ['loadConfig', 'start'], function() {
	
});