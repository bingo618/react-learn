const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, "./src/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            }


        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8888
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React',
            template: './src/index.html'
        }),
       // new webpack.HotModuleReplacementPlugin()
    ]

}