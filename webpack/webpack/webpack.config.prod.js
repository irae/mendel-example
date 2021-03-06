const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const BabiliPlugin = require("babili-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(require("./webpack.config"), {
    devtool: "none",

    output: {
        publicPath: "/js/",
        path: path.join(__dirname, "../docs/js")
    },

    plugins: [
        // new BabiliPlugin({
        //     test: /\.js?$/,
        //     sourceMap: true
        // }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new CleanWebpackPlugin(["docs/js"], {
            root: path.resolve(__dirname, "../")
        }),

        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ]
});
