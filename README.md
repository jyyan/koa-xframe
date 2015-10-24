# Koa XFrame

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) HTTP response header utility for Koa.

## Installation

```
$ npm install --save koa-xframe
```

## Usage & API

```js
import Koa from 'koa';
import xFrame from 'koa-xframe';

const app = new Koa();

// default settings -> set X-Frame-Options to 'DENY'
app.use(xFrame());

// custom settings
// -> set X-Frame-Options to 'DENY'
app.use(xFrame('DENY'));
// -> set X-Frame-Options to 'SAMEORIGIN'
app.use(xFrame('SAMEORIGIN'));
```

## Credits

Inspired by [Koala headers.js middleware](https://github.com/koajs/koala/blob/master/lib/middleware/headers.js).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/koa-xframe.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-xframe
[travis-image]:https://img.shields.io/travis/broucz/koa-xframe.svg?style=flat-square
[travis-url]: https://travis-ci.org/broucz/koa-xframe
[coveralls-image]: https://img.shields.io/coveralls/broucz/koa-xframe.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/broucz/koa-xframe?branch=master
[david-image]: https://img.shields.io/david/broucz/koa-xframe.svg?style=flat-square
[david-url]: https://david-dm.org/broucz/koa-xframe
[download-image]: https://img.shields.io/npm/dm/koa-xframe.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-xframe
