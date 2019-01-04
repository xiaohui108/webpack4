
# [Webpack-seed](https://github.com/xiaohui108/webpack4)

<p align="left">
	<a href="https://webpack.js.org/">
		<img src="https://img.shields.io/badge/webpack-4.20.2-brightgreen.svg" alt="Webpack">
	</a>
	<a href="https://babeljs.io/">
		<img src="https://img.shields.io/badge/babel-7.1.2-brightgreen.svg" alt="babel">
	</a>
  <a href="https://github.com/BiYuqi/webpack-seed/tree/gh-pages">
    <img src="https://img.shields.io/travis/BiYuqi/webpack-seed.svg">
  </a>
  <a href="https://github.com/BiYuqi/webpack-seed/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  
</p>

开箱即用的多页面脚手架, 基于webpack4.2x babel7.1x模块化开发可复用的现代化网站(Without Vue Angular React)


## 特性 （Feature）

- 支持前后端分离开发
- 配置完整的打包方案
- 支持本地开发热更新
- EJS 模板编译
- Base64 图片，雪碧图
- 内置Sass开发环境
- Autoprefixer自动补全
- 集成代码风格校验Eslint
- 内置字体图标库500+, 开箱即用
- 支持ES6编写源码，编译生成生产代码
- 开发(生产)环境代码自动注入页面, 专注于开发
- 编译后的程序不依赖于外部的资源, 可自动替换线上资源地址


## 模块化成果

展示下页面呈现结果(页面资源加载逻辑),这可能就是我们想要的模块化吧:sparkles:

页面 | 公用样式 | 当前页面私有样式| 底层核心库 | 页面公用类库 | 当前页面私有模块
--------- | ---------- | ------ | ------ | ------ | ------
首页 | common.css | index.css |core.js|common.js | index.js
登录页 | common.css | login.css |core.js|common.js | login.js

## 使用指南 （Usage）

**下载使用**
```js
git clone git@github.com:xiaohui108/webpack4.git

cd webpack-seed

npm install
```

**本地开发(dev)**
```js
npm run dev
```

```js
// 普通打包(大部分) npm run build publicPath默认 '/'
npm run build

```
**依赖分析**
```js
// 利用webpack-bundle-analyzer 进行代码构建分析

npm run analyzer
```

## 开发规范 （Standard）

查看[INSTRODUCTION](https://github.com/BiYuqi/webpack-seed/blob/master/INSTRODUCTION.md)

## 接口配置 （Api Setting）

查看[API/README](https://github.com/BiYuqi/webpack-seed/blob/master/src/api/README.md)


## 输出目录 （Output）
[查看输出]
* dist/
* ---html
* ---image
* ---media
* ---css
* ---js
* ---lib
* ---index.html

> 注意：如果有音视频等，会被打包在media目录

