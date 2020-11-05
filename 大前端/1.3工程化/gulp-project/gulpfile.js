//src()读取目录文件 ，dest() 接受一个输出目录
const {
	series,
	src,
	dest
} = require('gulp');
var uglify = require('gulp-uglify'); //缩小JavaScript和UglifyJS3。
// var clean = require('gulp-clean');//删除文件和文件夹。
var del = require('del');
const cleanCSS = require('gulp-clean-css'); //gulp插件缩小CSS，使用清洁CSS
const htmlmin = require('gulp-htmlmin'); //缩小HTML的gulp插件
var htmlminify = require("gulp-html-minify");

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
	del('dist/')
	cb()
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
	// body omitted
	cb();
}

function js(cb) {
	src("./src/*.js")
		.pipe(uglify())
		.pipe(dest("./dist/"))
	cb()
}

function css(cb) {
	src('src/*.css')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(dest('./dist/'));
	cb()
}

function html(cb) {
	// var options = {
	// 	collapseWhitespace: true,
	// 	collapseBooleanAttributes: true,
	// 	removeComments: true,
	// 	removeEmptyAttributes: true,
	// 	removeScriptTypeAttributes: true,
	// 	removeStyleLinkTypeAttributes: true,
	// 	minifyJS: true,
	// 	minifyCSS: true
	// }
	// src('src/*.html')
	// 	.pipe(htmlmin(options))
	// 	.pipe(dest('./dist/'));
	src("./src/*.html")
	        .pipe(htmlminify())
	        .pipe(dest("./dist"))
	cb()
}
// exports.build = build;
// exports.default = series(clean, build);
exports.default = series(js);
exports.clean = clean;
exports.css = css;
exports.html = html;
