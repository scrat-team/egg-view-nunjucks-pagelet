# egg-view-nunjucks-pagelet

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-nunjucks-pagelet.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-nunjucks-pagelet
[travis-image]: https://img.shields.io/travis/scrat-team/egg-view-nunjucks-pagelet.svg?style=flat-square
[travis-url]: https://travis-ci.org/scrat-team/egg-view-nunjucks-pagelet
[codecov-image]: https://img.shields.io/codecov/c/github/scrat-team/egg-view-nunjucks-pagelet.svg?style=flat-square
[codecov-url]: https://codecov.io/github/scrat-team/egg-view-nunjucks-pagelet?branch=master
[david-image]: https://img.shields.io/david/scrat-team/egg-view-nunjucks-pagelet.svg?style=flat-square
[david-url]: https://david-dm.org/scrat-team/egg-view-nunjucks-pagelet
[snyk-image]: https://snyk.io/test/npm/egg-view-nunjucks-pagelet/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-nunjucks-pagelet
[download-image]: https://img.shields.io/npm/dm/egg-view-nunjucks-pagelet.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-nunjucks-pagelet

Support the view rendering implementation of the nunjucks pagelet. Depends on the [egg-view-nunjucks](https://github.com/eggjs/egg-view-nunjucks) template view engine.

Pagelet: https://github.com/scrat-team/nunjucks-pagelet

DOCS: https://mozilla.github.io/nunjucks/templating.html

## Install

```bash
$ npm i egg-view-nunjucks egg-view-nunjucks-pagelet --save
```

## Usage

add plugin in `{app_root}/config/plugin.js`

```js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.nunjucksPagelet = {
  enable: true,
  package: 'egg-view-nunjucks-pagelet',
};
```

configure nunjucks in `{app_root}/config/config.default.js`

```js
exports.view = {
  defaultViewEngine: 'nunjucks'
};

exports.nunjucksPagelet = {
  // default layout template relative to view base dir
  // layout: 'layout/layout.tpl',
  // default scrat resource manifest path
  // manifest: path.join(app.baseDir, 'config/manifest.json'),
  // whether using custom parser, default true
  // for more detail, see https://github.com/scrat-team/nunjucks-tag#custom-parser-rules
  // useCustomParser: true,
};
```

Render in controller

```js
exports.home = function* (ctx) {
  yield ctx.render('home', { list });
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/scrat-team/egg-view-nunjucks-pagelet).

## License

[MIT](LICENSE)

