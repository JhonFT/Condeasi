let gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync').create(),
	//autoprefixer = require('autoprefixer'),
	cssnext = require('postcss-cssnext'),
	mixins = require('postcss-mixins'),
	atImport = require('postcss-import'),
	lost = require('lost'),
	nested = require('postcss-nested'),
	rucksack = require('rucksack-css'),
	mqpacker = require('css-mqpacker'),
	cssWring = require('cssWring');


gulp.task('server', function(){
	browserSync.init({
		server: {

			baseDir: './public'
		}
	});
}); 

gulp.task('css', function(){
	let processors = [
		//autoprefixer({browsers: ['> 5%', 'ie 8']}),
		atImport,
		mixins(),
		lost(),
		rucksack(),
		nested,
		cssnext({browsers: ['> 5%', 'ie 8']}),
		mqpacker,
		//cssWring(),
	];
	return gulp.src('./app/css/app.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
});



gulp.task('watch', function(){
	gulp.watch('./app/css/*.css',['css']);
	gulp.watch('./public/statics/*.js').on('change', browserSync.reload);
	gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('default',['watch','server']);