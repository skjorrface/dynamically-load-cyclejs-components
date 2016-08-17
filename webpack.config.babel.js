import {resolve} from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
export default () => {
  return {
    entry: {
      app: resolve(__dirname, `src/app.js`),
      vendor: [
        `@cycle/most-run`,
        `@cycle/dom`,
        `most`,
        `xstream`,
      ],
    },
    output: {
      filename: `bundle.[name].[hash].js`,
      path: resolve(__dirname, `dist`),
      context: resolve(__dirname, `src`),
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: `babel`,
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          loader: `eslint-loader`,
          exclude: /node_modules/},
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: `Cycle starter`,
        template: `src/templates/main.html`,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: `vendor`,
      }),
    ],
  }
}
