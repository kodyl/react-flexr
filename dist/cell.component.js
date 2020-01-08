"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _stylesheet = _interopRequireDefault(require("./stylesheet"));

var _stilr = _interopRequireDefault(require("stilr"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; (0, _forEach.default)(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context4; (0, _forEach.default)(_context4 = ownKeys(Object(source))).call(_context4, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var ERGONOMICS = (0, _keys.default)(_utils.settings);

var cellStyles = _stilr.default.create({
  base: {
    padding: "0 ".concat(_utils.variables.gutter)
  },
  baseFlex: {
    flex: 1
  },
  flex: {
    display: "flex"
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
}, _stylesheet.default);

var Cell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Cell, _React$Component);

  function Cell() {
    var _getPrototypeOf2, _context;

    var _this;

    (0, _classCallCheck2.default)(this, Cell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Cell)).call.apply(_getPrototypeOf2, (0, _concat.default)(_context = [this]).call(_context, args)));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "state", {
      breakpoints: (0, _utils.getInitialBreakpoints)()
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleFlexSize", function (breakpoint) {
      var _this$props = _this.props,
          grow = _this$props.grow,
          size = _this$props.size;
      return (0, _utils.handleFlexSize)({
        breakpoint: breakpoint,
        grow: grow,
        size: size
      });
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "getDefinedBreakpoints", function () {
      var breakpoints = [];

      for (var i = 0, len = ERGONOMICS.length; i < len; i++) {
        if (_this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
      }

      return breakpoints;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "getMatchingBreakpoint", function () {
      var definedBreakpoints = _this.getDefinedBreakpoints();

      var breakpoint = _this.state.breakpoints ? (0, _utils.matchBreakpoints)(_this.state.breakpoints.split(","), definedBreakpoints) : _utils.findMatch.apply(null, definedBreakpoints);
      return _this.props[breakpoint];
    });
    return _this;
  }

  (0, _createClass2.default)(Cell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.breakpoints) {
        var breakpoints = (0, _utils.getBreakpoints)(true);

        if (breakpoints !== this.state.breakpoints) {
          var definedBreakpoints = this.getDefinedBreakpoints();

          if (definedBreakpoints.length) {
            this.setState({
              breakpoints: breakpoints
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _context2;

      var breakpoint = this.getMatchingBreakpoint();

      if (breakpoint === "hidden") {
        return null;
      }

      var flexSize = this.handleFlexSize(breakpoint);
      var _this$props2 = this.props,
          gutter = _this$props2.gutter,
          flex = _this$props2.flex,
          className = _this$props2.className,
          align = _this$props2.align,
          style = _this$props2.style,
          children = _this$props2.children,
          size = _this$props2.size,
          palm = _this$props2.palm,
          lap = _this$props2.lap,
          portable = _this$props2.portable,
          desk = _this$props2.desk,
          grow = _this$props2.grow,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["gutter", "flex", "className", "align", "style", "children", "size", "palm", "lap", "portable", "desk", "grow"]);
      this.styles = (0, _utils.assign)({}, gutter ? {
        padding: "0 ".concat(gutter)
      } : null, flexSize, style);
      var classes = (0, _filter.default)(_context2 = [cellStyles.base, flexSize ? null : cellStyles.baseFlex, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null]).call(_context2, Boolean).join(" ");
      return _react.default.createElement("div", _objectSpread({}, rest, {
        style: this.styles,
        className: classes
      }), children);
    }
  }]);
  return Cell;
}(_react.default.Component);

exports.default = Cell;
Cell.propTypes = {
  grow: _propTypes.default.oneOf([false, true, _propTypes.default.number]),
  gutter: _propTypes.default.string,
  flex: _propTypes.default.bool,
  align: _propTypes.default.oneOf(["top", "center", "bottom"]),
  size: function size(props, propName) {
    var value = props[propName];

    if (value && !(typeof value === "number" || typeof value === "string" && /^[0-9]+\/[0-9]+$/.test(value))) {
      return new Error("Size should be a fraction (e.g. 1/6) or a number for fixed size");
    }
  }
};