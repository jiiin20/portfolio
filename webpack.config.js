const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env,opts)=>{

    const config = {
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

        },
        plugins:[
            new HtmlWebpackPlugin({
                title:"Soojin's portfolio"
            }),
        ]
    }

    if(opts.mode==='development'){

    } else{
        
    }

    return config

}