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
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(gulp.dest('src/css'));
});

// Run compass to compile all files
gulp.task('compass-all', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(gulp.dest('src/css'));
});


// Make production-ready for modern browsers
gulp.task('modern', function() {
  return gulp.src('src/sass/ggw.styles.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss({keepSpecialComments:0}))
    .pipe(size())
    .pipe(gulp.dest('dist/css'));
});


// Make production-ready for no query version
gulp.task('oldie', function() {
  return gulp.src('src/sass/ggw.no-query.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('ie 8'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss({keepSpecialComments:0}))
    .pipe(size())
    .pipe(gulp.dest('dist/css'));
});

///
/// SCRIPTS
///

// Concatenate scripts
gulp.task('checkjs', function() {
  return gulp.src('src/js/custom/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'Scripts are checked' }));
});

// Concatenate scripts
gulp.task('concatjs', function() {
  return gulp.src(['src/js/base/*.js', 'src/js/contrib/*.js', 'src/js/custom/*.js'])
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(notify({ message: 'Scripts are concatenated' }));
});


// Make scripts production-ready
gulp.task('build-scripts', function() {
  return gulp.src(['src/js/base/*.js', 'src/js/contrib/*.js', 'src/js/custom/*.js'])
    .pipe(changed('dist/js'))
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
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'New image copied and optimized' }));
});

///
/// CLEAN
///

gulp.task('clean-dist', function() {
  return gulp.src(['dist/css', 'dist/scripts', 'dist/images'], {read: false})
    .pipe(clean());
});

///
/// BUILD Production
///

// compile both sass base files, create one js file and optimize and copy images
gulp.task('build', ['clean-dist'], function() {
    gulp.start('modern', 'oldie', 'build-scripts', 'images');
});

///
/// WATCH
///

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['compass-quick']);
  gulp.watch('src/js/**/*.js', ['scripts-quick']);
});


///
/// STYLEGUIDE
///
//// styleguide.css needs to be updated manually

gulp.task('css-styleguide', function() {
  return gulp.src(['src/css/ggw.styleguide.css', 'dist/css/ggw.styles.min.css'])
    .pipe(concat('styleguide.css'))
    .pipe(gulp.dest('styleguide/src/css'));
});

gulp.task('docs-styleguide', function() {
  return gulp.src('src/css/styleguide/*.css')
    .pipe(gulp.dest('styleguide/src/css'));
});

gulp.task('js-styleguide', function() {
  return gulp.src('dist/js/*.js')
    .pipe(gulp.dest('styleguide/src/js'));
});

gulp.task('img-styleguide', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('styleguide/src/images'));
});

gulp.task('font-styleguide', function() {
  return gulp.src('src/font/*')
    .pipe(gulp.dest('styleguide/src/font'));
});

// Build style guide out of other tasks and make sure 'modern' is run before the tasks
gulp.task('build-styleguide', ['modern'], function() {
  gulp.start('css-styleguide', 'docs-styleguide', 'js-styleguide', 'img-styleguide', 'font-styleguide');
});
