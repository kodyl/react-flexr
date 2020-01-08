"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.symbol");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = _stilr.default.create({
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
}, _stylesheet.default);

var Grid =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck2.default)(this, Grid);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
  }

  (0, _createClass2.default)(Grid, [{
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
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["gutter", "style", "align", "hAlign", "flexCells", "children", "className"]);
      this.styles = (0, _utils.assign)({}, style, gutter ? {
        margin: "0 -".concat(gutter, " ").concat((0, _utils.doubleUnit)(gutter))
      } : null);
      var classes = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null].filter(Boolean).join(' ');
      var parentProps = {};
      if (gutter) parentProps.gutter = gutter;
      if (flexCells) parentProps.flex = true;
      var wrappedChildren = Object.keys(parentProps).length ? _react.default.Children.map(children, function (child) {
        return child ? _react.default.cloneElement(child, _objectSpread({}, parentProps)) : child;
      }) : children;
      return _react.default.createElement('div', _objectSpread({}, rest, {
        style: this.styles,
        className: classes
      }), wrappedChildren);
    }
  }]);
  return Grid;
}(_react.default.Component);

exports.default = Grid;
Grid.propTypes = {
  gutter: _propTypes.default.string,
  flexCells: _propTypes.default.bool,
  align: _propTypes.default.oneOf(['top', 'center', 'bottom'])
};