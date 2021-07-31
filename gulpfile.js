const gulp 		= require('gulp' ),
sass 			= require('gulp-ruby-sass' ),
cssmin          = require('gulp-cssmin'),
rename          = require('gulp-rename'),
concat 			= require('gulp-concat'),
terser          = require('gulp-terser');
 

// browserSync      = require("browser-sync").create();
// autoprefixer     = require( 'gulp-autoprefixer' ),
// uglify           = require('gulp-uglify'),
// notify           = require('gulp-notify' );
// let uglify       = require('gulp-uglify-es').default;

/*
    gulp.task('browser-sync', function() {
        browserSync.init({
            proxy: "plasiyer.me"
        });
    });
*/

gulp.task( 'styles', function() {

	return sass( 'src/style/**/*.scss' ).on( 'error', sass.logError )
    	
		.pipe( gulp.dest( 'dist' ) )
		.pipe( rename( { suffix: '.min' } ) )
        .pipe( cssmin( { processImport : false } ) )
        .pipe( gulp.dest( 'dist' ) )
        
        //.pipe(browserSync.stream())
	    //.pipe( autoprefixer( 'last 2 version' ) )
        //.pipe(notify({ message: 'sass style ok' }   ))
});        

gulp.task('scripts-all', function() {
    
    return gulp.src('src/script/all/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))

        //.pipe(uglify())
        //.pipe(browserSync.stream())
        //.pipe(notify({ message: 'scripts all ok' }))
});


gulp.task('scripts-main', function() {
    
    return gulp.src('src/script/main/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        
        .pipe(concat('app.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist'))
        
        //.pipe(browserSync.stream())
        //.pipe(notify({ message: 'scripts all ok' }))
});
 

gulp.task('scripts-ext', function() {
    return gulp.src('src/script/ext/**/*.js')
        
        .pipe(gulp.dest('dist'))
        
        //.pipe(terser())
        //.pipe(uglify())
        //.pipe(browserSync.stream())
        //.pipe(notify({ message: 'scripts ext ok' }))
});



//   gulp.task( 'watch', function(){

//      gulp.watch('src/style/**/*.scss', [ 'styles' ] );
//      gulp.watch('src/script/ext/**/*.js', ['scripts-ext']);
//      gulp.watch('src/script/all/**/*.js', ['scripts-all']);
//      gulp.watch('src/script/main/**/*.js', ['scripts-main']);
//  });


gulp.task('watch', function(){
    
    gulp.watch('src/style/**/*.scss', gulp.series('styles'));
    gulp.watch('src/script/ext/**/*.js', gulp.series('scripts-ext'));
    gulp.watch('src/script/all/**/*.js', gulp.series('scripts-all'));
    gulp.watch('src/script/main/**/*.js', gulp.series('scripts-main'));
    
    // gulp.watch('../application/views/**/*.*',gulp.series('browser-sync'));
    // gulp.watch("../application/views/**/*.twig").on('change', browserSync.reload);
    
});


// gulp.task('default', ['styles', 'scripts-ext','scripts-all','scripts-main','watch']);
// gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts-ext','scripts-all','scripts-main','browser-sync','watch'), function () {
    
gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts-ext','scripts-all','scripts-main','watch'), function () {
  
}))

