module.exports = function(grunt){

    grunt.config('concat',{

        options : {
            sourceMap :true
          },

        all: {
            src: ['assets/js/vendor/**/*.js', 'assets/js/*.js'],
            dest: '../../public/js/all.js',
        }

    });

};