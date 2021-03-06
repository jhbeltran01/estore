import path from 'path';
import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const entryPoints = {
  home: './src/pages/Home.tsx',
  main: './src/styles.ts',
  products: './src/pages/Products.tsx',
  productsDetail: './src/pages/ProductsDetail.tsx',
  cart: './src/pages/Cart.tsx',
  checkout: './src/pages/Checkout.tsx',
  myAccount: './src/pages/MyAccount.tsx',
  wishlist: './src/pages/Wishlist.tsx',
  signin: './src/pages/SignIn.tsx',
  contact: './src/pages/Contact.tsx'
}

const htmlPageName = [
  'index',
  'products',
  'products-detail',
  'cart',
  'checkout',
  'account',
  'wishlist',
  'signin',
  'contact'
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
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
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
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: './src/components'
    },
    plugins: [new TsconfigPathsPlugin(),]
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