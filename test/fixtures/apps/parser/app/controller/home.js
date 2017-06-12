'use strict';

const mockData = require('../../mocks/list.json');

exports.render = function* (ctx) {
  yield ctx.render('list', {
    ctoken: ctx.cookies.get('ctoken'),
    list: mockData.list,
  });
};

exports.customLayout = function* (ctx) {
  yield ctx.render('list', null, {
    layout: 'layout/layout2.tpl'
  });
};

exports.nameOnly = function* (ctx) {
  yield ctx.render('list');
};

exports.include = function* (ctx) {
  yield ctx.render('include', {
    ctoken: ctx.cookies.get('ctoken'),
    list: mockData.list,
  });
};