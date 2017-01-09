// gulpプラグインの読みこみ
var gulp = require("gulp");
// svgを圧縮するプラグインの読み込み
var svgmin = require("gulp-svgmin");
// pngを圧縮するプラグインの読み込み
var pngmin = require("gulp-imagemin");

var tasks = require("./config.js");

// SVG圧縮タスク
gulp.task("svgMinTask", function() {
  return gulp.src("src/**/*.svg")
    .pipe(svgmin(tasks.svg.plugins))
    .pipe(gulp.dest("dist/"));
});

// png圧縮タスク
gulp.task("pngMinTask", function() {
  return gulp.src("src/**/*.png")
    .pipe(pngmin()) // pngの圧縮処理を実行
    .pipe(gulp.dest("dist/"));
});

// watchタスク
gulp.task("default", function() {
  gulp.watch("src/**/*.svg", ['svgMinTask']),
  gulp.watch("src/**/*.png", ['pngMinTask'])
});
