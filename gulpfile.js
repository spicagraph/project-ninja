// gulpプラグインの読みこみ
var gulp = require("gulp");
// svgを圧縮するプラグインの読み込み
var svgmin = require("gulp-svgmin");
// pngを圧縮するプラグインの読み込み
var pngmin = require("gulp-imagemin");
// 「svgMinTask」という名前のタスクを登録
gulp.task("minTask", function() {
  // srcフォルダー以下のpng画像を取得
  gulp.watch("src/**", function() {
	  gulp.src("src/**/*.svg") 
        .pipe(svgmin({
            plugins: [{
                removeEmptyAttrs:  true
            }, {
                removeEmptyText:  true
            }, {
                removeEmptyContainers:  true
            }, {
                cleanupAttrs:  false
            }, {
                removeDoctype:  false
            }, {
                 removeXMLProcInst:  false
            }, {
                removeComments:  false
            }, {
                removeMetadata:  false
            }, {
                removeTitle :  false
            }, {
                removeDesc:  false
            }, {
                removeUselessDefs:  false
            }, {
                removeXMLNS:  false
            }, {
                removeEditorsNSData :  false
            }, {
                 removeHiddenElems:  false
            }, {
                removeViewBox:  false
            }, {
                cleanupEnableBackground:  false
            }, {
                minifyStyles:  false
            }, {
                convertStyleToAttrs:  false
            }, {
                convertColors:  false
            }, {
                convertPathData:  false
            }, {
                 convertTransform:  false
            }, {
                removeUnknownsAndDefaults:  false
            }, {
                removeNonInheritableGroupAttrs:  false
            }, {
                removeUselessStrokeAndFill:  false
            }, {
                removeUnusedNS:  false
            }, {
                cleanupIDs:  false
            }, {
                cleanupNumericValues:  false
            }, {
                cleanupListOfValues:  false
            }, {
                moveElemsAttrsToGroup:  false
            }, {
                moveGroupAttrsToElems:  false
            }, {
                collapseGroups:  false
            }, {
                removeRasterImages:  false
            }, {
                mergePaths:  false
            }, {
                convertShapeToPath:  false
            }, {                }]
        })) // svgの圧縮処理を実行
	    .pipe(gulp.dest("dist/")); //distフォルダー以下に保存
	  gulp.src("src/**/*.png")   
	    .pipe(pngmin()) // pngの圧縮処理を実行
	    .pipe(gulp.dest("dist/")); //distフォルダー以下に保存
	});
});