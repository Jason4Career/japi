var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },{
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            // {
            //     test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
            //     loader: 'url-loader?limit=8192'
            // },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },{
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            },{
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    babel: {
        presets: ['es2015',  'react'],
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};