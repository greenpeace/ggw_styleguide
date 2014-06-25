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
    cmq = require('gulp-combine-media-queries'),
    size = require('gulp-size');

///
/// STYLES
///

// Run compass to watch (should remain quick)
gulp.task('modern', function() {
  return gulp.src('src/sass/ggw.styles.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'Explorer >= 9'))
    .pipe(cmq())
    .pipe(gulp.dest('src/css'))
    .pipe(notify({ message: 'Compass finished' }));
});

// Run compass to compile all files
gulp.task('oldie', function() {
  return gulp.src('src/sass/ggw.no-query.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'src/css',
      sass: 'src/sass'
    }))
    .pipe(autoprefixer('ie 8', 'ie 7'))
    .pipe(gulp.dest('src/css'));
});

// Split styles.css file into separate media-query based files
gulp.task('split-css', ['modern'], function () {
  gulp.src('src/css/ggw.styles.css')
    .pipe(rename({ basename: 'ggw.mobile' }))
    .pipe(cmq({
      use_external: true,
      log: true
    }))
    .pipe(gulp.dest('src/css'));
});


// Make production-ready for all browsers
gulp.task('dist-css', ['split-css' , 'oldie'], function() {
  return gulp.src(['src/css/ggw.styles.css', 'src/css/ggw.mobile.css', 'src/css/ggw.mobile.responsive.css', 'src/css/ggw.no-query.css'])
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
gulp.task('concat-after', function() {
  return gulp.src(['src/js/base/*.js', 'src/js/contrib/*.js', 'src/js/custom/*.js'])
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(notify({ message: 'Scripts are concatenated' }));
});

gulp.task('concat-before', function() {
  return gulp.src(['src/js/before/*.js'])
    .pipe(concat('before.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(notify({ message: 'Scripts are concatenated' }));
});


// Make scripts production-ready
gulp.task('build-after', function() {
  return gulp.src(['src/js/base/*.js', 'src/js/contrib/*.js', 'src/js/custom/*.js'])
    .pipe(changed('dist/js'))
    .pipe(concat('theme.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-before', function() {
  return gulp.src(['src/js/before/*.js'])
    .pipe(changed('dist/js'))
    .pipe(concat('before.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('dist/js'));
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
  gulp.start('distcss', 'build-before', 'build-after', 'images');
});

///
/// WATCH
///

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['split-css', 'oldie'] );
  gulp.watch('src/js/**/*.js', ['concat-after', 'concat-before']);
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
  return gulp.src('dist/js/theme.min.js')
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

// Build style guide out of other tasks and make sure 'compass-all' and 'modern' is run before the tasks
gulp.task('build-styleguide', ['compass-modern', 'dist-css'], function() {
  gulp.start('css-styleguide', 'docs-styleguide', 'js-styleguide', 'img-styleguide', 'font-styleguide');
});

gulp.task('watch-styleguide', function() {
  gulp.watch('src/sass/**/*.scss', ['build-styleguide']);
});
