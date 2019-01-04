module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 6
    // es6: true
  },
  env: {
    browser: true
  },
  // rules: {
  //   "规则名": [规则值, 规则配置]
  // }
  // "off"或者0    //关闭规则关闭
  // "warn"或者1   //在打开的规则作为警告（不影响退出代码）
  // "error"或者2   //把规则作为一个错误（退出代码触发时为1）
  rules: {
    "indent": ["error", 2], // 缩进2
    'generator-star-spacing': 'off',
    "quotes": ["error", "single"], // 默认使用单引号
    "eqeqeq": 2, //必须使用全等
    "default-case": 2 //switch语句最后必须有default
  }
}
// module.exports = {
// // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
//     root: true,
// // 对Babel解析器的包装使其与 ESLint 兼容。
//     parser: 'babel-eslint',
//     parserOptions: {
//         // 代码是 ECMAScript 模块
//         sourceType: 'module'
//     },
//     env: {
//         // 预定义的全局变量，这里是浏览器环境
//         browser: true,
//     },
// // 扩展一个流行的风格指南，即 eslint-config-standard
// // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//     extends: 'standard',
// // required to lint *.vue files
//     plugins: [
//         // 此插件用来识别.html 和 .vue文件中的js代码
//         'html',
//         // standard风格的依赖包
//         "standard",
//         // standard风格的依赖包
//         "promise"
//     ],
// // add your custom rules here
//     'rules': {
//         // allow paren-less arrow functions
//         'arrow-parens': 0,
//         // allow async-await
//         'generator-star-spacing': 0,
//         // allow debugger during development no-debugger’ 允许在开发环境下使用debugger。这个比较简单，不过还是贴下文档便于查看。
//         'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//     }
// }
