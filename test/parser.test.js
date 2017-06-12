'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/parser.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/parser',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should render', done => {
    app.httpRequest()
      .get('/render')
      .expect('Content-Type', /text\/html/)
      .expect(/hi,welcome egg world/)
      .expect(/<div class="name">ID:/)
      .expect(200, done);
  });

  it('should render without error while using include', done => {
    app.httpRequest()
      .get('/include')
      .expect('Content-Type', /text\/html/)
      .expect(/include tpl test/)
      .expect(/hi,welcome egg world/)
      .expect(/<div class="name">ID:/)
      .expect(200, done);
  });

  it('should render with custom layout', done => {
    app.httpRequest()
      .get('/customLayout')
      .expect('Content-Type', /text\/html/)
      .expect(/layout 2222!!/)
      .expect(200, done);
  });

  it('should render without error if pass one argument only', done => {
    app.httpRequest()
      .get('/nameOnly')
      .expect('Content-Type', /text\/html/)
      .expect(200, done);
  });

  it('should request render pagelet json', function* () {
    const result = yield app
      .httpRequest()
      .get('/render?_pagelets=layout')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const body = result.body;
    const keys = Object.keys(body);

    assert(
      [ 'html', 'css', 'js', 'script', 'data', 'title', 'hash' ].every(key =>
        keys.includes(key)
      )
    );
    assert(/<div class="name">ID:/.test(body.html.layout));
    assert(/helper:###test/.test(body.html.layout));
    assert.deepEqual(body.css, [
      '/public/c/widget/card/card.css',
      '/public/c/widget/list/list.css',
    ]);
    assert.deepEqual(body.js, [
      '/public/c/widget/boot/boot.js',
      '/public/c/widget/list/list.js',
    ]);
  });
});
