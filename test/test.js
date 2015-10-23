import request from 'supertest';
import {expect} from 'chai';
import Koa from 'koa';
import xFrame from '..';

describe('koa-xframe', () => {
  it(`should set X-Frame-Options to 'DENY' by default`, done => {
    const app = new Koa();
    app.use(xFrame());

    app.use(async (ctx, next) => {
      ctx.type = 'text/html';
      await next();
    });

    request(app.listen())
      .get('/')
      .expect('X-Frame-Options', 'DENY')
      .end(done);
  });
  it(`should set X-Frame-Options to 'DENY' if value = 'DENY'`, done => {
    const app = new Koa();
    app.use(xFrame('DENY'));

    app.use(async (ctx, next) => {
      ctx.type = 'text/html';
      await next();
    });

    request(app.listen())
      .get('/')
      .expect('X-Frame-Options', 'DENY')
      .end(done);
  });
  it(`should set X-Frame-Options to 'SAMEORIGIN' if value = 'SAMEORIGIN'`, done => {
    const app = new Koa();
    app.use(xFrame('SAMEORIGIN'));

    app.use(async (ctx, next) => {
      ctx.type = 'text/html';
      await next();
    });

    request(app.listen())
      .get('/')
      .expect('X-Frame-Options', 'SAMEORIGIN')
      .end(done);
  });
  it(`should not set X-Frame-Options if ctx -> type !== 'text/html'`, done => {
    const app = new Koa();
    app.use(xFrame());

    app.use(async (ctx, next) => {
      ctx.type = 'text/plain';
      await next();
    });

    request(app.listen())
      .get('/')
      .end((err, res) => {
        expect(res.headers['x-frame-options']).to.equal(undefined)
        done(err);
      });
  });
  it(`should throw if value is not allowed`, done => {
    expect(xFrame.bind(xFrame, 'wrong_value')).to.throw(`X-Frame-Options value 'wrong_value' is not allowed. Expected 'DENY' or 'SAMEORIGIN'`)
    return done();
  });
});
