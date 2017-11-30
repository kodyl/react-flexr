'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Cell.__proto__ || (0, _getPrototypeOf2.default)(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      breakpoints: (0, _utils.getInitialBreakpoints)()
    }, _this.handleFlexSize = function (breakpoint) {
      var _this$props = _this.props,
          grow = _this$props.grow,
          size = _this$props.size;

      return (0, _utils.handleFlexSize)({ breakpoint: breakpoint, grow: grow, size: size });
    }, _this.getDefinedBreakpoints = function () {
      var breakpoints = [];

      for (var i = 0, len = ERGONOMICS.length; i < len; i++) {
        if (_this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
      }

      return breakpoints;
    }, _this.getMatchingBreakpoint = function () {
      var definedBreakpoints = _this.getDefinedBreakpoints();
      var breakpoint = _this.state.breakpoints ? (0, _utils.matchBreakpoints)(_this.state.breakpoints.split(','), definedBreakpoints) : _utils.findMatch.apply(null, definedBreakpoints);
      return _this.props[breakpoint];
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Cell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.breakpoints) {
        var breakpoints = (0, _utils.getBreakpoints)(true);
        if (breakpoints !== this.state.breakpoints) {
          var definedBreakpoints = this.getDefinedBreakpoints();
          if (definedBreakpoints.length) {
            this.setState({ breakpoints: breakpoints });
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var breakpoint = this.getMatchingBreakpoint();

      if (breakpoint === 'hidden') {
        return null;
      }

      var flexSize = this.handleFlexSize(breakpoint);

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


      this.styles = (0, _utils.assign)({}, gutter ? { padding: '0 ' + gutter } : null, flexSize, style);

      var classes = [cellStyles.base, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null].filter(Boolean).join(' ');

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
exports.default = Cell;
module.exports = exports['default'];