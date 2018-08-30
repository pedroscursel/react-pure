'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /styles/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};
