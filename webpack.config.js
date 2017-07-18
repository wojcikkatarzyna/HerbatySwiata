const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry : {
        'js/out.js': './js/app.js',
        'css/main.css~': './scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval',

    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ],

        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/main.css'),
        new LiveReloadPlugin()
    ]


}
