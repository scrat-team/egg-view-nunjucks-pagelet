'use strict';
module.exports = () => {
  const config = {};

  config.keys = '123456';

  config.view = {
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

  return config;
};
