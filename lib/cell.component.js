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

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _flexAlignments = require('./flex-alignments');

var _flexAlignments2 = _interopRequireWildcard(_flexAlignments);

var _StyleSheet = require('react-style');

var _StyleSheet2 = _interopRequireWildcard(_StyleSheet);

var _staticProperties$baseMethods$media$variables = require('./defaults');

var Type = _React2['default'].PropTypes;

var styling = _StyleSheet2['default'].create({
  cellBase: {
    flex: 1
  }
});

function calcWidth(size) {
  var _ref = size ? size.split('/') : [];

  var _ref2 = _slicedToArray(_ref, 2);

  var numerator = _ref2[0];
  var denominator = _ref2[1];

  return { flex: '0 0 ' + 100 / denominator * numerator + '%' };
}

function findResponsiveSize(mediaQuerries, props) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(mediaQuerries)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var breakpoint = _step.value;

      if (mediaQuerries[breakpoint] && props[breakpoint]) {
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
      var propGutter = _props.gutter;
      var flex = _props.flex;
      var style = _props.style;
      var align = _props.align;
      var grow = _props.grow;
      var children = _props.children;

      var rest = _objectWithoutProperties(_props, ['size', 'gutter', 'flex', 'style', 'align', 'grow', 'children']);

      var gutter = propGutter || _staticProperties$baseMethods$media$variables.variables.gutter;
      var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : 1;

      this.styles = [styling.cellBase, { padding: '0 ' + gutter }];

      var responsiveSize = findResponsiveSize(_staticProperties$baseMethods$media$variables.media, this.props);
      if (responsiveSize) {
        this.styles.push(calcWidth(responsiveSize));
      } else if (size) {
        this.styles.push(calcWidth(size));
      } else if (grow !== undefined) {
        this.styles.push({ flex: '' + growStyle + ' 1 auto' });
      }

      if (flex) {
        this.styles.push({ display: 'flex' });
      }

      if (align) {
        this.styles.push({ alignSelf: _flexAlignments2['default'][align] });
      }

      if (style) {
        this.styles.push(style);
      }

      return _React2['default'].createElement(
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

_assign2['default'](Cell.prototype, _staticProperties$baseMethods$media$variables.baseMethods);
_assign2['default'](Cell, _staticProperties$baseMethods$media$variables.staticProperties);

exports['default'] = Cell;
module.exports = exports['default'];
