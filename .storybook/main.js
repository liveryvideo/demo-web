const {
  VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.plugins.push(new VanillaExtractPlugin());
    config.resolve.alias = { ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@css': path.resolve(__dirname, '../src/css'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@assets': path.resolve(__dirname, '../src/assets')
    };
    return config;
  },
  core: {
    builder: 'webpack5'
  }
};