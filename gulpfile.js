/**
 * Module Dependencies
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

/**
 * Gulp Tasks
 */

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync({
        browser: "google chrome",
        proxy: 'localhost:3000',  // local node app address
        port: 3080,  // use *different* port than above
        notify: true,
        watchOptions: {
            usePolling: true
        },
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'init.js',
        ext: 'js html',
        ignore: [
            'gulpfile.js',
            'node_modules/',
            // 'jspm_packages/',
            'dist'
        ],
        // tasks: ['build'],
        watch: [
            // 'public/**/*.html',
            'server',
            'app.js',
            'Gulpfile.js'
        ]
    })
    .on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    })
    .on('restart', function () {
        setTimeout(function () {
            reload({ stream: false });
        }, 2000);
    });
});

gulp.task('serve', ['browser-sync'], function () {
    // gulp.watch([
    //     'public/**/*.styl'
    // ], ['styles']);
});
