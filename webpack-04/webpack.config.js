const path = require("path")
module.exports = {
    // 配置代码打包后的地址
    output: {
        path: path.resolve(__dirname, "dist"), // 指定打包的目录，必须要绝对路径
        filename: "main.js", // 打包后的文件名
        // filename:"[name]-[id]-[hash].js",
        clean: true // 自动清理打包目录
    },
    
    /* 
    webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则要为其引入loader

    - 以css为例：
        - 使用css-loader可以处理js中的样式
        - 使用步骤：
            1.安装：yarn add css-loader -D
            2.配置：
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: "css-loader"
                        }
                    ]
                }
*/
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test:/\.(jpg|png|gif)$/i,
            type:"asset/resource" // 图片直接资源类型的数据，可以通过指定type来处理
        }
    ]
}
}
