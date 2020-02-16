//入口entry（要打包的文件路径）和出口output（打包好的文件路径）
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery']
    },
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'//指定输出的文件的名称
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new extractTextPlugin('css/index.css'),
        new optimizeCssAssetsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '../'
                })
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '../'
                })
            },
            {test: /\.(png|gif|bmp|jpg|jpeg)$/, use: 'url-loader?limit=4981&name=images/[hash:8]-[name].[ext]'},
            {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'}
        ]
    }
}