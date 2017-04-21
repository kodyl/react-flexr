'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stylesheet = require('./stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _stilr = require('stilr');

var _stilr2 = _interopRequireDefault(_stilr);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERGONOMICS = (0, _keys2.default)(_utils.settings);

var cellStyles = _stilr2.default.create({
  base: {
    padding: '0 ' + _utils.variables.gutter
  },
  baseFlex: {
    flex: 1
  },
  flex: {
    display: 'flex'
  },
  top: {
    alignSelf: _utils.vertical.top
  },
  bottom: {
    alignSelf: _utils.vertical.bottom
  },
  center: {
    alignSelf: _utils.vertical.center
  }
}, _stylesheet2.default);

var Cell = function (_Component) {
  (0, _inherits3.default)(Cell, _Component);

  function Cell(props, context) {
    (0, _classCallCheck3.default)(this, Cell);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Cell.__proto__ || (0, _getPrototypeOf2.default)(Cell)).call(this, props, context));

    _initialiseProps.call(_this);

    return _this;
  }

  (0, _createClass3.default)(Cell, [{
    key: 'calcWidth',
    value: function calcWidth(size) {
      if (typeof size === 'number') {
        return {
          width: size < 1 ? Math.round(size * 10000) / 100 + '%' : size + 'px'
        };
      }

      var _ref = size ? size.split('/') : [],
          _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          numerator = _ref2[0],
          denominator = _ref2[1];

      return {
        width: 100 / denominator * numerator + '%'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          gutter = _props.gutter,
          flex = _props.flex,
          className = _props.className,
          align = _props.align,
          style = _props.style,
          children = _props.children,
          size = _props.size,
          palm = _props.palm,
          lap = _props.lap,
          portable = _props.portable,
          desk = _props.desk,
          grow = _props.grow,
          rest = (0, _objectWithoutProperties3.default)(_props, ['gutter', 'flex', 'className', 'align', 'style', 'children', 'size', 'palm', 'lap', 'portable', 'desk', 'grow']);


      var breakpoint = this.getMatchingBreakpoint();

      // Return early for performance
      if (breakpoint === 'hidden') {
        return null;
      }

      var flexSize = this.handleFlexSize(breakpoint);

      this.styles = (0, _utils.assign)({}, gutter ? { padding: '0 ' + gutter } : null, flexSize, style);

      var classes = [cellStyles.base, flexSize ? null : cellStyles.baseFlex, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null].filter(Boolean).join(' ');

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rest, { style: this.styles, className: classes }),
        children
      );
    }
  }]);
  return Cell;
}(_react.Component);

Cell.propTypes = {
  grow: _propTypes2.default.oneOf([false, true, _propTypes2.default.number]),
  gutter: _propTypes2.default.string,
  flex: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  size: function size(props, propName) {
    var value = props[propName];
    if (value && !(typeof value === 'number' || typeof value === 'string' && /^[0-9]+\/[0-9]+$/.test(value))) {
      return new Error('Size should be a fraction (e.g. 1/6) or a number for fixed size');
    }
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleFlexSize = function (breakpoint) {
    var _props2 = _this2.props,
        grow = _props2.grow,
        size = _props2.size;

    var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : undefined;

    return breakpoint && breakpoint !== 'hidden' ? _this2.calcWidth(breakpoint) : size ? _this2.calcWidth(size) : growStyle !== undefined ? { flex: growStyle + ' 1 auto',
      WebkitFlex: growStyle + ' 1 auto',
      msFlex: growStyle + ' 1 auto' } : null;
  };

  this.getDefinedBreakpoints = function () {
    var breakpoints = [];

    for (var i = 0, len = ERGONOMICS.length; i < len; i++) {
      if (_this2.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
    }

    return breakpoints;
  };

  this.getMatchingBreakpoint = function () {
    return _this2.props[_utils.findMatch.apply(null, _this2.getDefinedBreakpoints())];
  };
};

exports.default = Cell;
module.exports = exports['default'];
