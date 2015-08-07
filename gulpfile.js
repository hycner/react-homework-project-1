// Load plugins
var gulp = require('gulp'),
    minifyhtml = require('gulp-minify-html'), // Minifies HTML
    webpack = require('webpack-stream'); // Asset compiler

// Default Task
gulp.task('default', taskDefault);

// Main Task
gulp.task('all', taskAll); // Do all tasks

// Sub Tasks
gulp.task('html', taskHtml); // Process HTML
gulp.task('js', taskJs); // Process JS

/////////////////////////////////////
// Functions for all tasks below here
/////////////////////////////////////

function taskDefault() {
    console.log('Here are the current Gulp commands:');
    console.log('gulp all - Do all tasks');
    console.log('gulp html - Process all HTML');
    console.log('gulp js - Process all JS');
}

function taskAll() {
    gulp.start('html', 'js');
}

function taskHtml() {
    return gulp.src('app/public-dev/html/*.html')
        .pipe(minifyhtml({
            empty: true,
            cdata: true,
            comments: true,
            conditionals: true,
            spare: true,
            quotes: true
        }))
        .pipe(gulp.dest('app/public'));
}

function taskJs() {
    return gulp.src('app/public-dev/js/app.jsx')
        .pipe(webpack({
            output: {
                filename: 'app.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx$/,
                        loader: "babel-loader",
                        query: {
                            stage: 1
                        }
                    }
                ]
            }
            //plugins: [
            //    new webpack.optimize.UglifyJsPlugin({
            //        compress: {
            //            warnings: false
            //        }
            //    })
            //]
        }))
        .pipe(gulp.dest('app/public/js'));
}