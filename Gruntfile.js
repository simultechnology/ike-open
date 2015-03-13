module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src/'
        },
        port: 55555,
        connect: {
            livereload: {
                options: {
                    open: true,
                    port: '<%= port %>',
                    livereload: 35729,
                    hostname: 'localhost',
                    base: [ '<%= dirs.src %>' ]
                }
            }
        },
        watch: {
            files: [
                '<%= dirs.src %>/**/*.js',
                '<%= dirs.src %>/**/*.css',
                '<%= dirs.src %>/**/*.html'
            ],
            reload: {
                options: {
                    livereload: '<%= connect.livereload %>'
                },
                files: [
                    '<%= dirs.src %>/**/*.js',
                    '<%= dirs.src %>/**/*.css',
                    '<%= dirs.src %>/**/*.html'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', 'Build start!', [
        'connect',
        'watch'
    ]);
};