const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    '@redux': path.resolve(__dirname, 'redux')
  };

  return config;
};
