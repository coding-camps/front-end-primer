# web-basic

## Intro

这是一个纯粹的web基础环境。使用vite作为web服务器。

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
``` text
public/           //代码目录
├── index.html    //整体应用的启动
├── app           //整体作为一个应用的目录
├── modules //每个子文件夹各个实验模块
│   ├── backbone01
│   └── backbone02
├── asserts       //资源文件
│   ├── imgs      //图片
│   ├── jss       //js文件
│   └── styles    //样式文件
└── libs          //js库，可供整体应用使用，也可供各实验模块使用
    ├── backbone-1.4.0.js
    ├── handlebars-v4.7.7.js
    ├── jquery-3.6.0.js
    ├── popper.2.9.3.js
    ├── require-2.3.6.js
    ├── requirejs-plugin-CoffeeScript-0.4.3.js
    ├── requirejs-plugin-domReady-2.0.1.js
    ├── requirejs-plugin-i18n-2.0.6.js
    ├── requirejs-plugin-text-2.0.16.js
    ├── underscore-1.13.3
    └── underscore.string-3.3.4.js
```
