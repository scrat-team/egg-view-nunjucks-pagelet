'use strict';

module.exports = {
  /**
   * Render pagelet template
   * @param {String} name filename
   * @param {Object} [locals] template data
   * @param {Object} [options] custom params
   * @return {Promise<String>} result
   */
  render(name, locals = {}, options = {}) {
    const config = this.app.config;
    const pagelets = this.get('X-Pagelets') || this.query._pagelets;
    const layout = options.layout || locals.layout || config.nunjucksPagelet.layout;
    const normalName = name.replace(/\.\w+$/, '');
    const source = `{% extends '${layout}' %}{% block content %}{% require $id='page/${normalName}' %}{% endblock %}`;

    if (pagelets) {
      this.type = 'json';
      locals._pagelets = pagelets;
    } else {
      this.type = 'html';
    }

    locals = Object.assign({}, {
      ctx: this,
      request: this.request,
      helper: this.helper,
    }, this.locals, locals);

    return this.view
      .renderString(source, locals)
      .then(body => {
        this.body = body;
      });
  },
};
