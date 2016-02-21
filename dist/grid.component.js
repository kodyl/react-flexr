'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

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

var styles = _stilr2['default'].create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: '0 -' + _utils.variables.gutter + ' ' + _utils.doubleUnit(_utils.variables.gutter)
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
}, _stylesheet2['default']);

var Grid = (function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    _Component.call(this, props);
    _utils.findBreakpoints();
  }

  Grid.prototype.render = function render() {
    var _props = this.props;
    var gutter = _props.gutter;
    var style = _props.style;
    var align = _props.align;
    var hAlign = _props.hAlign;
    var flexCells = _props.flexCells;
    var children = _props.children;
    var className = _props.className;

    var rest = _objectWithoutProperties(_props, ['gutter', 'style', 'align', 'hAlign', 'flexCells', 'children', 'className']);

    this.styles = _utils.assign({}, style, gutter ? { margin: '0 -' + gutter + ' ' + _utils.doubleUnit(gutter) } : null);

    var classes = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null].filter(Boolean).join(' ');

    var parentProps = {};
    if (gutter) parentProps.gutter = gutter;
    if (flexCells) parentProps.flex = true;

    var wrappedChildren = _Object$keys(parentProps).length ? _react2['default'].Children.map(children, function (child) {
      return child ? _react2['default'].cloneElement(child, _extends({}, parentProps)) : child;
    }) : children;

    return _react2['default'].createElement(
      'div',
      _extends({}, rest, {
        style: this.styles,
        className: classes }),
      wrappedChildren
    );
  };

  _createClass(Grid, null, [{
    key: 'propTypes',
    value: {
      gutter: _react.PropTypes.string,
      flexCells: _react.PropTypes.bool,
      align: _react.PropTypes.oneOf(['top', 'center', 'bottom'])
    },
    enumerable: true
  }]);

  return Grid;
})(_react.Component);

exports['default'] = Grid;
module.exports = exports['default'];
