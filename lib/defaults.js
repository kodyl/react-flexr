'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Type = require('react');

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _shouldComponentUpdate = require('react/lib/shouldUpdateReactComponent');

var _shouldComponentUpdate2 = _interopRequireWildcard(_shouldComponentUpdate);

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireWildcard(_breakpoints);

var variables = {
  gutter: '1em'
};

exports['default'] = {
  variables: variables,
  breakpoints: _breakpoints2['default'],

  staticProperties: {
    shouldComponentUpdate: _shouldComponentUpdate2['default'],
    propTypes: {
      gutter: _Type.PropTypes.string,
      flexCells: _Type.PropTypes.bool,
      align: _Type.PropTypes.oneOf(['top', 'center', 'bottom'])
    }
  }
};
module.exports = exports['default'];
