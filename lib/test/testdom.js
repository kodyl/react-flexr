'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function () {
  if (typeof document !== 'undefined') {
    return;
  }

  var _require = require('jsdom');

  var jsdom = _require.jsdom;

  global.document = jsdom('<html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };
})();

module.exports = exports['default'];
