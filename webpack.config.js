const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

let bundleMode = {
    prod: "production",
    dev: "development"
}

module.exports = {
    mode: bundleMode.dev,
    // devtool: 'cheap-module-source-map',
    devtool: 'inline-source-map',
    entry: {
        content: path.resolve(__dirname, "src/js/content.js"),
        popup: path.resolve(__dirname, "src/js/popup.js"),
    },
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "[name].js",
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/static", to: "../" },
            ],
        }),
    ],
}