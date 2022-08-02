// your app's webpack.config.js
const path = require('path');
const custom = require('@fluentui/scripts/storybook/webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  core: {
    builder: 'webpack5',
  },
  babel: {},
  typescript: {
    // disable react-docgen-typescript (totally not needed here, slows things down a lot)
    reactDocgen: false,
  },
  webpackFinal: config => {
    config.resolve.alias = {
      // react: path.resolve(__dirname, '../node_modules/react'),
      // 'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    };
    return custom(config);
  },
  addons: ['@storybook/addon-actions'],
};
