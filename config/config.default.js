'use strict';

const path = require('path');

module.exports = appInfo => {
  return {
    view: {
      defaultExtension: '.tpl',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },

    /**
     * nunjucks pagelet config
     * @member Config#nunjucksPagelet
     * @property {String} layout - Layout template relative to view base dir
     * @property {Boolean} useCustomParser - Whether using custom parser, default to true, see https://github.com/scrat-team/nunjucks-tag#custom-parser-rules for more detail
     * @property {String} manifest - Scrat resource manifest path
     */
    nunjucksPagelet: {
      layout: 'layout/layout.tpl',
      useCustomParser: true,
      manifest: path.join(appInfo.baseDir, 'config/manifest.json'),
    },
  };
};
