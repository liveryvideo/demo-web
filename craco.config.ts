const CracoAlias = require('craco-alias')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  jest: {
    configure: {
      testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
      transformIgnorePatterns: [],
      moduleNameMapper: {},
      collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/interfaces.ts?(x)',
        '!src/**/*.stories.ts?(x)',
        '!src/**/*.css.ts',
        '!src/**/*.d.ts',
        '!src/**/types.ts',
        '!src/__test?(s)__/**/*',
        '!src/**/__test?(s)__/*',
        '!src/setupProxy.js',
      ],
    },
  },
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
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    },
  },
}

export default config
