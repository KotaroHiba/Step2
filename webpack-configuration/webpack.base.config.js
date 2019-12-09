const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets',
    img: '../../img',
    fonts: '../../fonts',
};
let config = {
    // Точки входа
    entry: {
        index: `${PATHS.src}/index.js`
    },

    // На выходе [name] - имя точки входа
    output: {
        filename: `${PATHS.assets}/js/[name].[hash].js`,
        path: path.resolve(__dirname, '../dist'),
        publicPath: ''
    },

    resolve: {
        alias: {
            '~':'src'
        }
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
                            config: {path: './postcss.config.js'}
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
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(img|jpe?g|gif|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: `[name].[ext]`,
                    publicPath: `${PATHS.img}`,
                    outputPath: `/img/`
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: `${PATHS.fonts}`,
                    outputPath: `/fonts/`
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].[contenthash].css`,
            chunkFilename: '[id].css',
            // ignoreOrder: false,
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.pug`,
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/login.html`,
            filename: "login.html",
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/img`, to: `img`,
                flatten:true
            }
        ])
    ]
};


module.exports = config;