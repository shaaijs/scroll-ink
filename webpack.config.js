const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
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
        hot: true
    }
};