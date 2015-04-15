'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _StyleSheet = require('react-style');

var _StyleSheet2 = _interopRequireWildcard(_StyleSheet);

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _flexAlignments = require('./flex-alignments');

var _flexAlignments2 = _interopRequireWildcard(_flexAlignments);

var _staticProperties$baseMethods$breakpoints$variables = require('./defaults');

var Type = _React2['default'].PropTypes;

var CellStyles = _StyleSheet2['default'].create({
  base: {
    flex: 1,
    padding: '0 ' + _staticProperties$baseMethods$breakpoints$variables.variables.gutter
  },
  flex: {
    display: 'flex'
  },
  top: {
    alignSelf: _flexAlignments2['default'].top
  },
  bottom: {
    alignSelf: _flexAlignments2['default'].bottom
  },
  center: {
    alignSelf: _flexAlignments2['default'].center
  }
}, process.env.NODE_ENV === 'production');

function calcWidth(size) {
  var _ref = size ? size.split('/') : [];

  var _ref2 = _slicedToArray(_ref, 2);

  var numerator = _ref2[0];
  var denominator = _ref2[1];

  return { flex: '0 0 ' + 100 / denominator * numerator + '%' };
}

function findResponsiveSize(breakpoints, props) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(breakpoints)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var breakpoint = _step.value;

      if (breakpoints[breakpoint] && props[breakpoint]) {
        return props[breakpoint];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

var Cell = (function (_React$Component) {
  function Cell() {
    _classCallCheck(this, Cell);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Cell, _React$Component);

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var size = _props.size;
      var gutter = _props.gutter;
      var flex = _props.flex;
      var style = _props.style;
      var styles = _props.styles;
      var align = _props.align;
      var grow = _props.grow;
      var children = _props.children;

      var rest = _objectWithoutProperties(_props, ['size', 'gutter', 'flex', 'style', 'styles', 'align', 'grow', 'children']);

      var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : undefined;

      var responsiveSize = findResponsiveSize(_staticProperties$baseMethods$breakpoints$variables.breakpoints, this.props);

      this.styles = [CellStyles.base, align ? CellStyles[align] : null, gutter ? { padding: '0 ' + gutter } : null, flex ? CellStyles.flex : null, responsiveSize && responsiveSize !== 'hidden' ? calcWidth(responsiveSize) : size ? calcWidth(size) : growStyle !== undefined ? { flex: '' + growStyle + ' 1 auto' } : null, style].concat(Array.isArray(styles) ? styles : [styles]);

      return responsiveSize === 'hidden' ? null : _React2['default'].createElement(
        'div',
        _extends({}, rest, { styles: this.styles }),
        children
      );
    }
  }]);

  return Cell;
})(_React2['default'].Component);

Cell.propTypes = {
  grow: Type.oneOf([false, true, Type.number]),
  gutter: Type.string,
  flex: Type.bool,
  align: Type.oneOf(['top', 'center', 'bottom']),
  size: function size(props, propName) {
    if (props[propName] && props[propName].split('/').length !== 2) {
      return new Error('Size should be a fraction, e.g. 1/6');
    }
  }
};

_assign2['default'](Cell.prototype, _staticProperties$baseMethods$breakpoints$variables.baseMethods);
_assign2['default'](Cell, _staticProperties$baseMethods$breakpoints$variables.staticProperties);

exports['default'] = Cell;
module.exports = exports['default'];
