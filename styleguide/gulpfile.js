// ===================================================
// Settin'
// ===================================================

var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $               = gulpLoadPlugins({
                        rename: {
                          'gulp-minify-css'  : 'mincss',
                          'gulp-minify-html' : 'minhtml',
                          'gulp-gh-pages'    : 'deploy',
                          'gulp-foreach'     : 'foreach',
                          'gulp-if'          : 'if'
                        }
                      }),
    deploy          = require('gulp-gh-pages'),
    postcss         = require('gulp-postcss'),
    mqpacker        = require('css-mqpacker'),
    autoprefixer    = require('autoprefixer'),
    concat          = require('gulp-concat'),
    merge           = require('merge-stream');

$.exec   = require('child_process').exec;
$.fs     = require('fs');


// ===================================================
// Configin'
// ===================================================

var asset_dir = {
  site: 'styleguide',
  js: 'js',
  css: 'css',
  sass: 'src',
  source: 'source'
};

var path = {
  site: asset_dir.source + '/' + asset_dir.site,
  js: asset_dir.source + '/' + asset_dir.js,
  css: asset_dir.source + '/' + asset_dir.css,
  sass: asset_dir.source + '/' + asset_dir.css + '/' + asset_dir.sass
};

var glob = {
  css: path.css + '/*.css',
  sass: path.sass + '/**/*.scss',
  js: path.js + '/src/**/*.js',
  data: path.data + '/**/*.{json,yaml}',
  rootData: ['site.yaml', 'package.json']
};


// ===================================================
// Developin'
// ===================================================

gulp.task('serve', function() {
  $.connect.server({
    root: [path.site],
    port: 35729,
    livereload: true,
    middleware: function(connect) {
      return [
        connect().use(connect.query())
      ];
    }
  });

  $.exec('open http://192.168.99.100:4568');
});

// ===================================================
// Stylin'
// ===================================================

gulp.task('sass', function() {
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker({sort: true})
  ];

  var stream = gulp.src(glob.sass)
    .pipe($.sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(path.css))
    .pipe($.connect.reload());

  return stream;
});

// ===================================================
// Concat JS
// ===================================================

// get All Drupal JS and make available for styleguide
gulp.task('script', function() {
  return merge(
    gulp.src(['js/contrib/modernizr/modernizr.min.js', 'js/contrib/jquery/jquery-1.11.1.min.js', 'js/contrib/jquery.once/jquery.once.js', 'js/contrib/misc/drupal.js'])
      .pipe(concat('contrib.js'))
      .pipe(gulp.dest('js')),

    gulp.src('js/custom/*.js')
      .pipe(concat('theme.js'))
      .pipe(gulp.dest('js')),

    gulp.src('js/styleguide/*.js')
      .pipe(concat('styleguide.js'))
      .pipe(gulp.dest('js'))
    );
});



// ===================================================
// Duplicatin' for style guide and buildin' for deploy
// ===================================================
gulp.task('copy', function() {
  return merge(
    gulp.src(['fonts/**/*'])
      .pipe(gulp.dest(path.site + '/fonts'))
      .pipe(gulp.dest(path.dist + '/fonts')),

    gulp.src(['css/**/*.css'])
      .pipe(gulp.dest(path.site + '/css'))
      .pipe(gulp.dest(path.dist + '/css')),

    gulp.src(['images/**/*'])
      .pipe(gulp.dest(path.site + '/images'))
      .pipe(gulp.dest(path.dist + '/images')),

    gulp.src(['js/*.js'])
      .pipe(gulp.dest(path.site + '/js'))
      .pipe(gulp.dest(path.dist + '/js'))
  );
});

// ===================================================
// Releasin'
// ===================================================

gulp.task('deploy', function() {
  return gulp.src([path.dist + '/**/*'])
    .pipe($.deploy());
});



// ===================================================
// Monitorin'
// ===================================================

gulp.task('watch', function() {
  gulp.watch([
    glob.sass
  ], ['sass']);
});


// ===================================================
// Taskin'
// ===================================================

gulp.task('build', [ 'script', 'copy','usemin' ]);
gulp.task('default', [ 'sass', 'serve', 'watch' ]);
