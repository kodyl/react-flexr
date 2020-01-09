"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _stylesheet = _interopRequireDefault(require("./stylesheet"));

var _stilr = _interopRequireDefault(require("stilr"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var styles = _stilr["default"].create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: "0 -".concat(_utils.variables.gutter, " ").concat((0, _utils.doubleUnit)(_utils.variables.gutter))
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
function (_React$Component) {
  (0, _inherits2["default"])(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck2["default"])(this, Grid);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Grid).apply(this, arguments));
  }

  (0, _createClass2["default"])(Grid, [{
    key: "render",
    value: function render() {
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
        margin: "0 -".concat(gutter, " ").concat((0, _utils.doubleUnit)(gutter))
      } : null);
      var classes = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null].filter(Boolean).join(' ');
      var parentProps = {};
      if (gutter) parentProps.gutter = gutter;
      if (flexCells) parentProps.flex = true;
      var wrappedChildren = Object.keys(parentProps).length ? _react["default"].Children.map(children, function (child) {
        return child ? _react["default"].cloneElement(child, (0, _objectSpread2["default"])({}, parentProps)) : child;
      }) : children;
      return _react["default"].createElement('div', (0, _objectSpread2["default"])({}, rest, {
        style: this.styles,
        className: classes
      }), wrappedChildren);
    }
  }]);
  return Grid;
}(_react["default"].Component);

exports["default"] = Grid;
Grid.propTypes = {
  gutter: _propTypes["default"].string,
  flexCells: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(['top', 'center', 'bottom'])
};