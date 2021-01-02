"use strict";

/*global require*/
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const buildDir = './build/';

function clean() {
    return del(buildDir);
}

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: buildDir
        },
        port: 3000
    });
    done();
}

function pugTask(done) {
    gulp
        .src('./src/pug/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(buildDir))
        .pipe(browsersync.stream());
    done();
}

function css(done) {
    gulp
        .src('./src/assets/styles/*.scss')
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(buildDir + 'css'))
        .pipe(browsersync.stream());
    done();
}

function js(done) {
    gulp
        .src('./src/js/*.js')
        .pipe(gulp.dest(buildDir + 'js'))
        .pipe(browsersync.stream());
    done();
}

function assets(done) {
    gulp
        .src('./src/sample/**')
        .pipe(gulp.dest(buildDir + 'sample'))
        .pipe(browsersync.stream());
    done();
}

function img(done) {
     gulp
        .src('./src/assets/images/**/*')
         .pipe(plumber())
         .pipe(gulp.dest(buildDir + 'images'));
    done();
}

function watchFiles() {
    gulp.watch('./src/assets/styles/**/*.scss', css);
    gulp.watch('./src/**/*.pug', pugTask);
    gulp.watch('./src/**/*.js', js);
    gulp.watch('./src/sample/**', assets);
    gulp.watch('./src/assets/images/**', img);
}

const devBuild = gulp.series(clean, gulp.parallel(pugTask, css, assets, js), img);

const dev = gulp.series(devBuild, gulp.parallel(watchFiles, browserSync));

exports.default = dev;
