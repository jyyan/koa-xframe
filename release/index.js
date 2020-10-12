"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var canBe = ['DENY', 'SAMEORIGIN'];

var xFrame = function xFrame() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'DENY';

  if (!(~canBe.indexOf(value) || ~value.indexOf('ALLOW-FROM'))) {
    throw new Error('X-Frame-Options value \'' + value + '\' is not allowed. Expected \'DENY\' or \'SAMEORIGIN\' or \'ALLOW-FROM uri\'');
  }

  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              // headers necessary for HTML pages & All Assets
              ctx.response.set('X-Frame-Options', value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var _default = xFrame;
exports["default"] = _default;