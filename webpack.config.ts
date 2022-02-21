import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entryPoints = {
  home: "./src/ts/Home.tsx",
  main: "./src/styles.ts",
  products: "./src/ts/ProductsPage.tsx",
  toggleMobileNavMenu: './src/ts/ts/toggleMobileNavMenu.ts'
}

const htmlPageName = [
  'index',
  'products'
]

const htmlTemplates = htmlPageName.map(name => (
  new HtmlWebpackPlugin({
    inject: false,
    template: `./public/${name}.html`,
    filename: `${name}.html`,
    chunk: `${name}.html`
  })
))

const config: Configuration = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      carousel: path.resolve(__dirname, 'src/ts/components/carousel'),
      element: path.resolve(__dirname, 'src/ts/components/elements'),
      filter: path.resolve(__dirname, 'src/ts/components/filter'),
      header: path.resolve(__dirname, 'src/ts/components/header'),
      pagination: path.resolve(__dirname, 'src/ts/components/pagination'),
      slider: path.resolve(__dirname, 'src/ts/components/slider'),
      Types: path.resolve(__dirname, 'src/ts/types'),
      hooks: path.resolve(__dirname, 'src/ts/hooks'),
      ts: path.resolve(__dirname, 'src/ts/ts'),
      json: path.resolve(__dirname, 'src/ts/json')
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      'patterns': [
        { from: './public/images', to: 'images' }
      ]
    }),
    ...htmlTemplates,
  ],
  loader:
    { test: /\.json$/, loader: 'json' },
};

export default config;