const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MinifyPlugin = require('babel-minify-webpack-plugin');
module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./src/entry.ts", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "entry.js", // string
    // the filename template for entry chunks
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
    library: "MyLibrary", // string,
    // the name of the exported library
    libraryTarget: "umd", // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    /* Expert output configuration (on own risk) */
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
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new MinifyPlugin({}, {}),
    new CleanWebpackPlugin()
  ]
};
