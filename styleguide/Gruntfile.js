'use strict';

module.exports = function (grunt) {

  var config = {
    src: 'src',
    dist: 'dist',
    styleguide: 'styleguide/src/'
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
        files: ['<%= config.src %>/sass/{,**/}*.scss'],
        tasks: ['compass:dist'],
        options: {
          livereload: 8000
        }
      },
      images: {
        files: ['<%= config.src %>/images/**']
      },
      css: {
        files: ['<%= config.src %>/css/{,**/}*.css'],
      },
      js: {
        files: ['<%= config.src %>/js/{,**/}*.js', '!<%= config.src %>/js/{,**/}*.js'],
        tasks: ['jshint', 'uglify:dev']
      },
      styles: {
        files: ['<%= config.src %>/css/{,**/}*.css'],
        tasks: ['autoprefixer:src']
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

    autoprefixer: {
      src: {
        src: '<%= config.src %>/css/ggw.styleguide.css, <%= config.src %>/css/ggw.styles.css '
      }
    },

    copy: {
      styleguide: {
        nonull: true,
        files: [
          { expand: true,
            flatten: true,
            src: ['<%= config.src %>/css/styleguide/*'],
            dest: '<%= config.styleguide %>/css/'
          }
        ]
      },
      styleguideImages: {
        files: [
          { expand: true,
            cwd: '<%= config.src %>/images/',
            src: ['*'],
            dest: '<%= config.styleguide %>/images/'
          }
        ]
      },
      styleguideFont: {
        files: [
          { expand: true,
            cwd: '<%= config.src %>/font/',
            src: ['*'],
            dest: '<%= config.styleguide %>/font/'
          }
        ]
      }
    },

    comments: {
      normalize: {
        src: [ '<%= config.src %>/css/ggw.normalize.css' ]
      },
      styleguide: {
        src: [ '<%= config.src %>/css/styleguide/ggw.styleguide.css' ]
      }
    },

    concat: {
      options: {
        separator: '\n',
        banner: '// ** Built automatically in Grunt, do not edit **\n'
      },
      css: {
        files: {
          '<%= config.src %>/css/styleguide/ggw.styleguide.css':[
            '<%= config.src %>/css/ggw.styleguide.css',
            '<%= config.src %>/css/ggw.normalize.css',
            '<%= config.src %>/css/ggw.styles.css'
          ]
        }
      },
      styleguideJS: {
        files: {
          '<%= config.src %>/js/styleguide.js': [
            '<%= config.src %>/js/jquery.1.11.0.js',
            '<%= config.src %>/js/jquery-plugins/*.js',
            '<%= config.src %>/js/jquery.runscripts.js',
          ]
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
      styleguide: {
        options: {
          preserveComments: 'all',
          mangle: true
        },
        files: {
          '<%= config.styleguide %>/js/styleguide.min.js': '<%= config.src %>/js/styleguide.js'
        }
      },

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

  grunt.loadNpmTasks('grunt-stripcomments');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
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

  grunt.registerTask('styleguide', [
    'compass:dist',
    'autoprefixer:src',
    'comments:normalize',
    'concat',
    'uglify:styleguide',
    'copy'
  ]);

};
