const path = require("path")
module.exports = {
    // 设置打包的模式，production表示生产模式  development 开发模式
    mode: "production",
    // entry 用来指定打包时的主文件 默认 ./src/index.js
    // 基于约定优于配置原则，一般不改默认入口文件
    // entry: "./hello/hello.js", 
    // entry: ["./src/a.js", "./src/b.js"],
    // 打包为两个文件
    // entry: {
    //     a: "./src/a.js",
    //     b: "./src/b.js"
    // },
    // 打包为两个文件 f1.js 和 f2.js
    // entry: {
    //     f1: ["./src/a.js", "./src/b.js"],
    //     f2: ['./src/c.js']
    // },
    entry: ["./src/a.js", "./src/b.js", "./src/c.js"],

    // 配置代码打包后的地址
    output: {
        path: path.resolve(__dirname, "dist"), // 指定打包的目录，必须要绝对路径
        // filename: "main.js", // 打包后的文件名，默认情况
        // filename:"[name]-[id]-[hash].js",
        clean: true // 自动清理打包目录
    },

}
