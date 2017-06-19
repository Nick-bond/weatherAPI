const webpack = require("webpack");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/",
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "es2016", "react", "stage-0"],
                    plugins: ["transform-runtime"]
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;