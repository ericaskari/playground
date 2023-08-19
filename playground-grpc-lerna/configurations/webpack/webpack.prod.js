const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(process.env.PWD, "dist"),
    filename: "index.js",
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
