module.exports = function(grunt) {
  gzip = require("gzip-js");
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n\n'
      },
      dist: {
        src: ['./repos/fd-slider/js/fd-slider.js', './js/baf.js'],
        dest: './js/baf.dev.js'
      }
    },
    uglify: {
      options: {
        banner: '/* * * * * * * * * *\n' +
                ' *  BaF-Framework  *\n' +
                ' *  Version <%= pkg.version %>  *\n' +
                ' *  License:  MIT  *\n' +
                ' * Simon  Waldherr *\n' +
                ' * * * * * * * * * */\n\n',
        footer: '\n\n\n\n /* foo */'
      },
      dist: {
        files: {
          './js/baf.min.js': ['./js/baf.dev.js']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* * * * * * * * * *\n' +
                  ' *  BaF-Framework  *\n' +
                  ' *  Version <%= pkg.version %>  *\n' +
                  ' *  License:  MIT  *\n' +
                  ' * Simon  Waldherr *\n' +
                  ' * * * * * * * * * */\n\n'
        },
        files: {
          './css/baf.min.css': ['./repos/fd-slider/css/fd-slider-tooltip.css', './repos/fd-slider/css/fd-slider.css', './css/baf.css', './css/icomoon.css']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
