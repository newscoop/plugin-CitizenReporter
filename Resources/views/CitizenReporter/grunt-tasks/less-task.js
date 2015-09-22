module.exports = function(grunt){

  grunt.config('less',{

    dev: {
      files: { '../../public/css/style.css': 'assets/css/style.less' }
    },

    build: {
      options: {
        compress: true
      },
      files: { '../../public/css/style.css': 'assets/css/style.less' }
    }

  });


};