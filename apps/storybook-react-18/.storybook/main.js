const path = require('path');

module.exports = /** @type {Omit<import('../../../.storybook/main'), 'typescript'|'babel'>} */ ({
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../public'],
  webpackFinal: (config, options) => {
    config.resolve.alias = {
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    };

    return config;
  },
});
