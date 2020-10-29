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
            path:path.join(__dirname,'dist')
        },
        module:{

        },
        plugins:[
            new HtmlWebpackPlugin(),
        ]
    }

    if(opts.mode==='development'){

    } else{
        
    }

    return config

}