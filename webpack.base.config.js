const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: './assets'
};
let config = {
    // Точки входа
    entry: {
        index: `${PATHS.src}/index.js`
    },

    // На выходе [name] - имя точки входа
    output: {
        filename: `${PATHS.assets}/js/[name].js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },

    externals: {
        paths: PATHS
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {path: 'src/postcss.config.js'}
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]

            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].css`,
            chunkFilename: '[id].css',
            // ignoreOrder: false,
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),


    ]
};


module.exports = config;