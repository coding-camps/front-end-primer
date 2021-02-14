# web-backbone

## Intro
这是个简单的基于RequireJS+Backbone的web工程。使用Vite作为web服务器。

## Usage
建议使用`yarn`，而不是`npm`，虽然后者也可以。
```shell
# 进入项目目录
cd web-basics
# 安装
yarn
# 启动，自动打开浏览器，现在可以开始写代码了。
yarn dev
```

## Constructure

```shell
web-backbone
├── README.md        // 读我文件
├── package.json
├── public            // 代码目录
│   ├── index.html    // 整体应用的启动
│   ├── favicon.ico   // 图标
│   ├── asserts       // 资源文件
│   ├── libs          // 依赖
│   ├── core          // 简单的包装
│   └── app           // 系统代码
└── vite.config.js    // vite配置
```
