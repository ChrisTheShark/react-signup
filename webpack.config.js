'use strict';
const Path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        Path.resolve(__dirname, 'index.js')
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: 'http://localhost:3000',
        port: 3000
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    }
};
