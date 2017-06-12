'use strict';
const path = require('path');
module.exports = () => {
  const config = {};

  config.keys = '123456';

  config.view = {
    root: path.resolve(__dirname, '../app/views'),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.security = {
    csp: {
      enable: true,
    },
  };

  config.nunjucksPagelet = {
    useCustomParser: false,
  };

  return config;
};
