const CracoAlias = require('craco-alias')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  babel: {
    plugins: ['@vanilla-extract/babel-plugin'],
  },
  plugins: [
    {
      plugin: new VanillaExtractPlugin(),
    },
    {
      plugin: new MiniCssExtractPlugin(),
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}

export default config
