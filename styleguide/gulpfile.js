// Load plugins
var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    size = require('gulp-size');


///
/// STYLES
///

// Run compass to watch (should remain quick)
gulp.task('compass-quick', function() {
  return gulp.src('src/sass/ggw.styles.scss')
    .pipe(compass({
      config_file: 'config.rb',
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(gulp.dest('src/css'))
});

// Run compass to compile all files
gulp.task('compass-all', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(gulp.dest('src/css'))
});


// Make production-ready for modern browsers
gulp.task('modern', function() {
  return gulp.src('src/sass/ggw.styles.scss')
    .pipe(compass({
      config_file: 'config.rb',
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(size())
    .pipe(gulp.dest('dist/css'));
});


// Make production-ready for no query version
gulp.task('oldie', function() {
  return gulp.src('src/styles/ndp.no-query.scss')
    .pipe(compass({
      config_file: 'config.rb'
    }))
    .pipe(gulp.dest('css'))
    .pipe(autoprefixer('ie 8'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(size())
    .pipe(gulp.dest('dist/css'));
});

///
/// SCRIPTS
///

// Concatenate scripts
gulp.task('scripts-quick', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(changed('src/js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(notify({ message: 'Scripts are changed' }));
});


// Make scripts production-ready
gulp.task('scripts-prod', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(changed('dist/js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('theme.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts are copied to dist' }));
});

///
/// IMAGES
///

// Optimize images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('src/images'))
    .pipe(notify({ message: 'New images optimized' }));
});


///
/// WATCH
///

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['compass-quick']);
  gulp.watch('src/js/**/*.js', ['scripts-quick']);
  gulp.watch('src/images/**/*', ['images']);
});


///
/// STYLEGUIDE
///

gulp.task('strip-comments', function() {
  return gulp.src('src/css/normalize.css')
    .pipe(cache(minifycss({keepSpecialComments:0})))
    .pipe(gulp.dest('src/styleguide/'));
});

gulp.task('strip-comments', function() {
  return gulp.src('src/css/normalize.css')
    .pipe(cache(minifycss({keepSpecialComments:0})))
    .pipe(gulp.dest('src/styleguide/'));
});
