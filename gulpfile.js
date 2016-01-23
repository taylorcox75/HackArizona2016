var gulp = require('gulp');
var install = require("gulp-install");
var shell = require('gulp-shell');
var nodemon = require('nodemon');


gulp.task('default', ['build', 'run']);

gulp.task('build', function (callback) {
    return gulp.src(['./package.json'])
    .pipe(install());
    callback();
});

gulp.task('run', ['build'], function () {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('createDocs', shell.task([
    'rm -rf out',
    './node_modules/.bin/jsdoc server/ -t ./node_modules/ink-docstrap/template -c ./conf.json'
]));