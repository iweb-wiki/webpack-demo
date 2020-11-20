## 1.0.1

- 基本安装

## 1.0.2

- 创建一个 bundle
- 添加 dist 目录
- 使用 `npx webpack` 执行（transpile）转译

## 1.0.3 使用配置文件

1.添加`webpack.config.js`文件

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

2. 执行`npx webpack --config webpack.config.js`进行转译

- 如果在项目根目录中存在`webpack.config.js`，则`webpack`会默认根据这个配置文件执行。

3. 在`package.json`中添加`scripts`。

```json
    "scripts": {
      "build": "webpack"
    },
```
