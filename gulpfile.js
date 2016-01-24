var gulp = require('gulp');
var install = require("gulp-install");
//var shell = require('gulp-shell');
var nodemon = require('nodemon');


gulp.task('default', ['build', 'run']);

gulp.task('build', function (callback) {
    return gulp.src(['./package.json'])
    .pipe(install());
    callback();
});

var exec = require('child_process').exec;

gulp.task('run', function (cb) {
    exec('node server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})