"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _stylesheet = _interopRequireDefault(require("./stylesheet"));

var _stilr = _interopRequireDefault(require("stilr"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _context;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(Object(source))).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var styles = _stilr["default"].create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: (0, _concat["default"])(_context = "0 -".concat(_utils.variables.gutter, " ")).call(_context, (0, _utils.doubleUnit)(_utils.variables.gutter))
  },
  leftHorizontal: {
    justifyContent: _utils.horizontal.left
  },
  centerHorizontal: {
    justifyContent: _utils.horizontal.center
  },
  rightHorizontal: {
    justifyContent: _utils.horizontal.right
  },
  topVertical: {
    alignItems: _utils.vertical.top
  },
  centerVertical: {
    alignItems: _utils.vertical.center
  },
  bottomVertical: {
    alignItems: _utils.vertical.bottom
  }
}, _stylesheet["default"]);

var Grid =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Grid, _Component);

  function Grid() {
    (0, _classCallCheck2["default"])(this, Grid);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Grid).apply(this, arguments));
  }

  (0, _createClass2["default"])(Grid, [{
    key: "render",
    value: function render() {
      var _context2, _context3, _context4;

      var _this$props = this.props,
          gutter = _this$props.gutter,
          style = _this$props.style,
          align = _this$props.align,
          hAlign = _this$props.hAlign,
          flexCells = _this$props.flexCells,
          children = _this$props.children,
          className = _this$props.className,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["gutter", "style", "align", "hAlign", "flexCells", "children", "className"]);
      this.styles = (0, _utils.assign)({}, style, gutter ? {
        margin: (0, _concat["default"])(_context2 = "0 -".concat(gutter, " ")).call(_context2, (0, _utils.doubleUnit)(gutter))
      } : null);
      var classes = (0, _filter["default"])(_context3 = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null]).call(_context3, Boolean).join(' ');
      var parentProps = {};
      if (gutter) parentProps.gutter = gutter;
      if (flexCells) parentProps.flex = true;
      var wrappedChildren = (0, _keys["default"])(parentProps).length ? (0, _map["default"])(_context4 = _react["default"].Children).call(_context4, children, function (child) {
        return child ? _react["default"].cloneElement(child, _objectSpread({}, parentProps)) : child;
      }) : children;
      return _react["default"].createElement("div", (0, _extends2["default"])({}, rest, {
        style: this.styles,
        className: classes
      }), wrappedChildren);
    }
  }]);
  return Grid;
}(_react.Component);

exports["default"] = Grid;
(0, _defineProperty3["default"])(Grid, "propTypes", {
  gutter: _propTypes["default"].string,
  flexCells: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(['top', 'center', 'bottom'])
});