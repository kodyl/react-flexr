'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var styles = _stilr2.default.create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: '0 -' + _utils.variables.gutter + ' ' + (0, _utils.doubleUnit)(_utils.variables.gutter)
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
}, _stylesheet2.default);

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          gutter = _props.gutter,
          style = _props.style,
          align = _props.align,
          hAlign = _props.hAlign,
          flexCells = _props.flexCells,
          children = _props.children,
          className = _props.className,
          rest = (0, _objectWithoutProperties3.default)(_props, ['gutter', 'style', 'align', 'hAlign', 'flexCells', 'children', 'className']);


      this.styles = (0, _utils.assign)({}, style, gutter ? { margin: '0 -' + gutter + ' ' + (0, _utils.doubleUnit)(gutter) } : null);

      var classes = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null].filter(Boolean).join(' ');

      var parentProps = {};
      if (gutter) parentProps.gutter = gutter;
      if (flexCells) parentProps.flex = true;

      var wrappedChildren = (0, _keys2.default)(parentProps).length ? _react2.default.Children.map(children, function (child) {
        return child ? _react2.default.cloneElement(child, (0, _extends3.default)({}, parentProps)) : child;
      }) : children;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rest, { style: this.styles, className: classes }),
        wrappedChildren
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  gutter: _propTypes2.default.string,
  flexCells: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['top', 'center', 'bottom'])
};
exports.default = Grid;
module.exports = exports['default'];