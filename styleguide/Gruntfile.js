'use strict';

module.exports = function (grunt) {

  var config = {
    src: 'src',
    styleguide: 'styleguide'
  };

  grunt.initConfig({

    config: config,
    pkg: grunt.file.readJSON('./package.json'),
    bower: grunt.file.readJSON('./.bowerrc'),

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['<%= config.src %>/sass/{,**/}*.{scss,sass}'],
        tasks: ['compass:dev'],
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

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'uglify:dist',
    'compass:dist',
    'jshint'
  ]);

};
