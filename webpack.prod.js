const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            favicon: './src/client/images/favicon.ico'
        }),
        new CopyWebpackPlugin({
            patterns: [
            { from: './src/client/styles', to: 'styles' },
            ]
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'sw.js',
            globDirectory: './httpdocs',
            globPatterns: ['**/*.{html,css}'],
            // sourcemap: true,
            exclude: [/\.(?:png|jpg|jpeg|svg)$/], // from precaching
            runtimeCaching: [
              { // runtime cache for images
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                  expiration: { maxEntries: 10 },
                  cacheName: 'images',
                },
              },
            ],
          })
    ]
}
