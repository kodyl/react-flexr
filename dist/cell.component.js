'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _stylesheet = require('./stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _stilr = require('stilr');

var _stilr2 = _interopRequireDefault(_stilr);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var ERGONOMICS = _Object$keys(_utils.settings);

var cellStyles = _stilr2['default'].create({
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
}, _stylesheet2['default']);

var Cell = (function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell(props, context) {
    var _this = this;

    _classCallCheck(this, Cell);

    _React$Component.call(this, props, context);

    this.handleFlexSize = function (breakpoint) {
      var _props = _this.props;
      var grow = _props.grow;
      var size = _props.size;

      var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : undefined;

      return breakpoint && breakpoint !== 'hidden' ? _this.calcWidth(breakpoint) : size ? _this.calcWidth(size) : growStyle !== undefined ? { flex: growStyle + ' 1 auto',
        WebkitFlex: growStyle + ' 1 auto',
        msFlex: growStyle + ' 1 auto' } : null;
    };

    this.getDefinedBreakpoints = function () {
      var breakpoints = [];

      for (var i = 0, len = ERGONOMICS.length; i < len; i++) {
        if (_this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
      }

      return breakpoints;
    };

    this.getMatchingBreakpoint = function () {
      return _this.props[_utils.findMatch.apply(null, _this.getDefinedBreakpoints())];
    };
  }

  Cell.prototype.calcWidth = function calcWidth(size) {
    if (typeof size === 'number') {
      return {
        width: size < 1 ? Math.round(size * 10000) / 100 + '%' : size + 'px'
      };
    }

    var _ref = size ? size.split('/') : [];

    var _ref2 = _slicedToArray(_ref, 2);

    var numerator = _ref2[0];
    var denominator = _ref2[1];

    return {
      width: 100 / denominator * numerator + '%'
    };
  };

  Cell.prototype.render = function render() {
    var _props2 = this.props;
    var gutter = _props2.gutter;
    var flex = _props2.flex;
    var className = _props2.className;
    var align = _props2.align;
    var style = _props2.style;
    var children = _props2.children;

    var rest = _objectWithoutProperties(_props2, ['gutter', 'flex', 'className', 'align', 'style', 'children']);

    var breakpoint = this.getMatchingBreakpoint();

    // Return early for performance
    if (breakpoint === 'hidden') {
      return null;
    }

    var flexSize = this.handleFlexSize(breakpoint);

    this.styles = _utils.assign({}, gutter ? { padding: '0 ' + gutter } : null, flexSize, style);

    var classes = [cellStyles.base, flexSize ? null : cellStyles.baseFlex, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null].filter(Boolean).join(' ');

    return _react2['default'].createElement(
      'div',
      _extends({}, rest, {
        style: this.styles,
        className: classes }),
      children
    );
  };

  _createClass(Cell, null, [{
    key: 'propTypes',
    value: {
      grow: _react.PropTypes.oneOf([false, true, _react.PropTypes.number]),
      gutter: _react.PropTypes.string,
      flex: _react.PropTypes.bool,
      align: _react.PropTypes.oneOf(['top', 'center', 'bottom']),
      size: function size(props, propName) {
        var value = props[propName];
        if (value && !(typeof value === 'number' || typeof value === 'string' && /^[0-9]+\/[0-9]+$/.test(value))) {
          return new Error('Size should be a fraction (e.g. 1/6) or a number for fixed size');
        }
      }
    },
    enumerable: true
  }]);

  return Cell;
})(_react2['default'].Component);

exports['default'] = Cell;
module.exports = exports['default'];
