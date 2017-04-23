const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './main.react.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.react.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    }
};
