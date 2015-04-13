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

var canUseDOM = (function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
})();

function match(props) {
  if (!canUseDOM) {
    return false;
  }
  var min = props.min;
  var max = props.max;

  var minStr = min ? '(min-width: ' + min + 'px)' : null;
  var maxStr = max ? '(max-width: ' + max + 'px)' : null;

  var str = minStr && maxStr ? '' + minStr + ' and ' + maxStr : minStr ? minStr : maxStr;

  return window.matchMedia(str).matches;
}

var variables = {
  gutter: '1em'
};

exports['default'] = {
  variables: variables,

  media: {
    palm: match({ max: 680 }),
    lap: match({ min: 681, max: 959 }),
    portable: match({ max: 959 }),
    desk: match({ min: 960 })
  },

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
