import { join } from "path";
export default {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "clickToCopy"
  },
  devtool: "source-map",
  externals: {
    // Use external version of React
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
          //   options: {
          //     presets: ["@babel/preset-env"]
          //   }
        }
      }
    ]
  }
};
