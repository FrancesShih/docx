/**
*@file gulp md
*@author Frances 
*/
var gulp = require('gulp');
var fm = require('gulp-front-matter');
var md = require('gulp-markdown');
var layout = require('gulp-layout');
var connect = require('gulp-connect');
var git = require('gulp-git');


gulp.task('build', function () {
    gulp.src('./docs/content/**/*.md')
           .pipe(fm())
           .pipe(md())
           .pipe(gulp.dest('./web/content/'));

    gulp.src('./docs/content/**/*.*')
        .pipe(gulp.dest('./web/content/'));
});

gulp.task('frame', function () {
    // nav
    var nav = require('./frame/generatenav.js');
    // cp
    var cp  = require('./frame/cpfiles.js');
});

gulp.task('watchfile', function () {
    gulp.watch(['docs/**/*.*'], 'rebuild');
});

gulp.task('server', function () {
    connect.server({
        port: 8001,
        root: 'web',
        livereload: true
    });
});

gulp.task('autoupdate', function () {
    git.push('origin', 'master', function (err) {
        if (err) {
            throw err;
            console.log('更新失败');
        } else {
            var autoupdate  = require('./frame/updateserver.js');
        }
    });
});

gulp.task('default', ['build', 'frame', 'server', 'autoupdate']);
gulp.task('rebuild', ['build', 'frame']);
