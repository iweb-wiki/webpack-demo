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

## 1.0.4 管理资源

### 加载 css

- 我们需要安装`style-loader`和`css-loader`，在`module`中配置。

```bash
npm install css-loader style-loader -D
```

- `webpack.config.js`

```js
    rules: [
      {
        /**
         * webpack 根据正则表达式，来确定应该查找哪些文件，
         * 并将其提供给指定的 loader。
         * 在这个示例中，所有以 .css 结尾的文件，
         * 都将被提供给 style-loader 和 css-loader。
         */
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
```
### 加载 images
- 安装
```bash
npm install -D file-loader
```

- `webpack.config.js`

```js
  ruels: [
    {
        test: /\.(png|jpg|gif)$/,
        use:[ "file-loader" ]
      }
  ]
```