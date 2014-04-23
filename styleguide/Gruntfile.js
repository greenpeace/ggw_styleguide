'use strict';

module.exports = function (grunt) {

  var config = {
    src: 'src',
    dist: 'dist',
    styleguide: 'styleguide'
  };

/** Configuration */
  grunt.initConfig({

    config: config,
    pkg: grunt.file.readJSON('./package.json'),

    watch: {
      options: {
       // livereload: true
      },
      sass: {
        files: ['<%= config.src %>/sass/{,**/}*.{scss,sass}'],
        options: {
          livereload: false
        }
      },
      images: {
        files: ['<%= config.src %>/images/**']
      },
      css: {
        files: ['<%= config.src %>/css/{,**/}*.css']
      },
      js: {
        files: ['<%= config.src %>/js/{,**/}*.js', '!<%= config.src %>/js/{,**/}*.js'],
        tasks: ['jshint', 'uglify:dev']
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true
      },
      dev: {
        options: {
          environment: 'development',
          force: true
        }
      },
      dist: {
        options: {
          environment: 'production',
          force: true
        }
      }
    },

    copy: {
      styleguide: {
        nonull: true,
        src: '<%= config.src %>/css/styleguide.css',
        dest: '<%= config.styleguide %>/css/styleguide.css'
      },
    },

    concat: {
      dist: {
        nonull: true,
        src: ['src/css/ggw.normalize.css', 'src/css/ggw.styles.css'],
        dest: 'src/css/styleguide.css',
      },
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['<%= config.src %>/js/{,**/}*.js', '!<%= config.src %>/js/{,**/}*.min.js']
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expand: true,
          cwd: 'js',
          src: ['<%= config.src %>/**/*.js', '!<%= config.src %>/**/*.min.js'],
          dest: 'js',
          ext: '.min.js'
        }]
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'js',
          src: ['<%= config.src %>/**/*.js', '!<%= config.src %>/**/*.min.js'],
          dest: 'js',
          ext: '.min.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'uglify:dist',
    'compass:dist',
    'jshint'
  ]);

  grunt.registerTask('css', [
    'copy:styleguide'
  ]);

};
