const grunt = require('grunt');
const mozjpeg = require('imagemin-mozjpeg');
const responsive_images = require('grunt-responsive-images');

grunt.initConfig({
      responsive_images: {
        myTask: {
          options: {
            sizes: [{
              width: 320,
            },{
              width: 640,
            },{
              width: 1024,
              suffix: "_x2",
            }]
          },
          files: [{
            expand: true,
            src: ['**.{jpg,gif,png}'],
            cwd: 'images/',
            dest: 'tmp/'
          }]
        }
    },
    imagemin: {
        options: {
            use: [
              mozjpeg({quality: '50'})
            ]
        },
        dynamic: {
            files: [{
            cwd: 'tmp/',
            expand: true,
            src: ['**/*.{png,jpg}'],
            dest: 'img/',
            }]
        }
    },  
});
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['responsive_images', 'imagemin']);
