// ./node_modules/webpack/bin/webpack.js
const webpack = require('webpack');

module.exports = {
    entry: {
        spec: "./src/spec.js"
    },
    output: {
        filename: "./dist/[name].js",
        libraryTarget: "umd"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        port: 3060,
        contentBase: "./"
    }
};
