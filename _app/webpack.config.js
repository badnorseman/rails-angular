// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
module.exports = {

  context: __dirname,
  entry: "./assets/javascripts/app.jsx",

  output: {
    path: "./app/assets/javascripts",
    filename: "_app.bundle.js"
  },

  externals: {
    jquery: "var jQuery"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: __dirname + /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: __dirname + /node_modules/, loader: "babel-loader" },
      { test: require.resolve("jquery"), loader: "expose?jQuery" },
      { test: require.resolve("jquery"), loader: "expose?$" }
    ]
  },

  resolve: {
    root: __dirname + "/_app/assets/javascripts",
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  devtool: "#eval-source-map"
};
