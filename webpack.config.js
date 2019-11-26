const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8088,
        host: "localhost"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: "index.html"
        })
    ]
}