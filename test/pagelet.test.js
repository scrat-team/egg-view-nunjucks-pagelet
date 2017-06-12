'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/pagelet.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view',
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

  it('should renderString', done => {
    app.httpRequest()
      .get('/renderString')
      .expect('Content-Type', /text\/html/)
      .expect(/<div>ID:100,Name:sky<\/div>/)
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
