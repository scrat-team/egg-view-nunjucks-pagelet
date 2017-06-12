'use strict';

// app/router.js
module.exports = app => {
  app.get('/render', app.controller.home.render);
  app.get('/customLayout', app.controller.home.customLayout);
  app.get('/nameOnly', app.controller.home.nameOnly);
  app.get('/include', app.controller.home.include);
};
