const webpack = require('webpack');

const config = {
    entry: [
        __dirname + '/main.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    mode: 'development',
    // resolve: {
    //     extensions: ['.js','.html', '.css']
    // },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};

module.exports = config;