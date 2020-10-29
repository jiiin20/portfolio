const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env,opts)=>{

    const config = {
        resolve:{
            extensions:['.vue','.js']
        },
        entry:{
            app:[
                path.join(__dirname,'main.js')
            ]
        },
        output:{
            filename:'[name].js',
            path:path.join(__dirname,'docs')
        },
        module:{
            rules:[
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use:[
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html')
            }),
            new CopyPlugin({
                patterns:[
                    {
                        from: 'assets/',
                        to:'assets/'
                    }
                ]
            })
        ],
    }

    if(opts.mode==='development'){
        config.devtool = 'eval'
        config.devServer = {
            port: 8080,
            open: false,
            hot: true
        }
    }

    return config

}