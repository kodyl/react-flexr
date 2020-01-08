"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _react = require("react");

var _utils = require("./utils");

var HydrateSSR =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(HydrateSSR, _Component);

  function HydrateSSR(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HydrateSSR);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HydrateSSR).call(this, props));
    (0, _utils.ssrWillHydrate)();
    return _this;
  }

  (0, _createClass2["default"])(HydrateSSR, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.ssrDidHydrate)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return HydrateSSR;
}(_react.Component);

exports["default"] = HydrateSSR;