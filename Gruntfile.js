module.exports = function (grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/<%= pkg.name %>.js": 'src/**/*.js'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/**/*.js']
        }
      }
    },

    karma: {
      unit: {
        options: {
          configFile: 'karma.conf.js'
        }
      },
      unit_watch: {
        options: {
          configFile: 'karma.conf.js',
          autoWatch: true,
          singleRun: false
        }
      }
    }
  });

  grunt.registerTask('default', ['babel', 'uglify']);
  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('test:watch', ['karma:unit_watch']);

};
