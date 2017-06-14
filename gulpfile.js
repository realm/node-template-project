const gulp = require('gulp');
const tsc = require("gulp-typescript");
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const mocha = require('gulp-mocha');
const util = require('gulp-util');
const tslint = require('gulp-tslint');

var tsProject = tsc.createProject("tsconfig.json");

gulp.task('clean', function (cb) {
    return del('dist', cb)
})

gulp.task('tslint', () => {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            configuration: 'tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
})

gulp.task('build', ['clean'], function () {
    var tsResult = gulp.src(["src/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', {
            sourceRoot: function (file) { return file.cwd + '/src'; }
        }))
        .pipe(gulp.dest("dist"))

    // this copies the configuration yml into the dist directory
    const ymlResult = gulp.src(['src/**/*.yml'])
        .pipe(gulp.dest('dist'))

    return [
        ymlResult,
        tsResult
    ]
});

gulp.task('watch', ['build'], function () {
    gulp.watch('src/**/*', ['build'])
})

gulp.task('test', function () {
    return gulp.src(['dist/**/*.spec.js'], { read: false })
        .pipe(mocha({ reporter: 'spec', timeout: 10000 }))
        .on('error', util.log)
        .once('end', function () {
            process.exit();
        });
});

gulp.task('default', ['build']);