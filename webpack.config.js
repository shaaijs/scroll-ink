const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
        // host : '192.168.0.116',
    }
};