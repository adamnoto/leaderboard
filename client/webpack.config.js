var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './index.jsx',

    output: {
        path: '../app/assets/javascripts',
        filename: 'bundle.js' 
    },

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {presets: ['es2015', 'react']}
        }]
    },

    resolve: {extensions: ['', '.js', '.jsx']}
};
