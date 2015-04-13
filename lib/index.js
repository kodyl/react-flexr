'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('babel/polyfill');

var _Grid = require('./grid.component');

var _Grid2 = _interopRequireWildcard(_Grid);

var _Cell = require('./cell.component');

var _Cell2 = _interopRequireWildcard(_Cell);

exports['default'] = {
  Grid: _Grid2['default'],
  Cell: _Cell2['default']
};
module.exports = exports['default'];
