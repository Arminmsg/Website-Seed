module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "dist/main.css" : "dev/sass/main.scss"
                }
            },

            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "dev/main.css" : "dev/sass/main.scss"
                }
            }

        },
        watch: {
            options: {
                livereload: true
            },
            php: {
                files: ["dev/*.php"]
            },
            scss: {
                files: ["dev/sass/*.scss", "dev/sass/**/*.scss"],
                tasks: ["sass:dev"]
            },
            html: {
                files: ["dev/*.html"]
            },
            js: {
                files: ["dev/js/*.js"]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: "",
                    port: 9000
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("serve", ["connect:server", "watch"]);
};
