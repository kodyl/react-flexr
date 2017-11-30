'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HydrateSSR = function (_Component) {
  (0, _inherits3.default)(HydrateSSR, _Component);

  function HydrateSSR() {
    (0, _classCallCheck3.default)(this, HydrateSSR);
    return (0, _possibleConstructorReturn3.default)(this, (HydrateSSR.__proto__ || (0, _getPrototypeOf2.default)(HydrateSSR)).apply(this, arguments));
  }

  (0, _createClass3.default)(HydrateSSR, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _utils.ssrWillHydrate)();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _utils.ssrDidHydrate)();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return HydrateSSR;
}(_react.Component);

exports.default = HydrateSSR;
module.exports = exports['default'];