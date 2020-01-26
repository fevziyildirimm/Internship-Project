const gulp = require('gulp');
const minify = require('gulp-minify');
const minifyCSS=require("gulp-minify-css")
const rename =require("gulp-rename");

gulp.task("styles",()=>{
    gulp.src("source/css/**/*.css")
    .pipe(minifyCSS())
    .pipe(rename({
        suffix:".min" }))
    .pipe(gulp.dest("dist/css"))
});

gulp.task("scripts",()=>{
    gulp.src(["source/js/**/*.js"])
    .pipe(minify({
        ext:{
            min:".min.js"
        },
        noSource:true
    }))
    .pipe(gulp.dest("dist/js"))
});
gulp.task("watch",()=>{
    gulp.watch("source/js/**/*.js",["scripts"]);
});
gulp.task("default",["styles","scripts","watch"]);