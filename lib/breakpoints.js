'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _match = require('./utils/media-queries');

exports['default'] = {
  palm: _match.match({ max: 680 }),
  lap: _match.match({ max: 959, min: 681 }),
  portable: _match.match({ max: 959 }),
  desk: _match.match({ min: 960 })
};
module.exports = exports['default'];
