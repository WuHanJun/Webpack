/**
 * Created by lenovo on 2017/1/10.
 */
module.exports = {
    entry: './app2.js',  //入口文件
    output: {
        filename: 'bundle.js'
    },  //这些功能起始在命令行里也可以操作，但是写在这个配置文件这里不容易出错且简单
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css/,
                exclude: /node_mudules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'  //这就是独立构建。 在app.js中引用vue，直接引用的是vue/dist/vue.common.js这个文件
        }
    },
    /*
    "browser": {
        "vue": "vue/dist/vue.common"
    },*/
};

