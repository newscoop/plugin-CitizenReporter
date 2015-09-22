module.exports = function(grunt){

    grunt.config('uglify',{

        options : {
           sourceMap : true,
           sourceMapIncludeSources : true,
           sourceMapIn : '../../public/js/all.js.map'
         },
         build : {
           src  : '<%= concat.all.dest %>',
           dest : '../../public/js/all.js'
         }


    });

};