'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _Cell = require('./cell.component');

var _Cell2 = _interopRequireWildcard(_Cell);

var _flexAlignments = require('./flex-alignments');

var _flexAlignments2 = _interopRequireWildcard(_flexAlignments);

var _StyleSheet = require('react-style');

var _StyleSheet2 = _interopRequireWildcard(_StyleSheet);

var _staticProperties$baseMethods$variables = require('./defaults');

var Component = _React2['default'].Component;
var Type = _React2['default'].PropTypes;

var styling = _StyleSheet2['default'].create({
  gridBase: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0
  }
});

var Grid = (function (_Component) {
  function Grid() {
    _classCallCheck(this, Grid);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(Grid, _Component);

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var propGutter = _props.gutter;
      var style = _props.style;
      var styles = _props.styles;
      var align = _props.align;
      var flexCells = _props.flexCells;
      var children = _props.children;

      var rest = _objectWithoutProperties(_props, ['gutter', 'style', 'styles', 'align', 'flexCells', 'children']);

      var gutter = propGutter || _staticProperties$baseMethods$variables.variables.gutter;

      this.styles = [styling.gridBase, { margin: '0 -' + gutter + ' ' + gutter }, align ? { alignItems: _flexAlignments2['default'][align] } : null, style, styles];

      var wrapppedChildren = flexCells ? _React2['default'].Children.map(children, function (child) {
        return child.type === _Cell2['default'] ? _React2['default'].addons.cloneWithProps(child, { flex: true }) : _React2['default'].addons.cloneWithProps(child);
      }) : children;

      return _React2['default'].createElement(
        'div',
        _extends({}, rest, { styles: this.styles }),
        wrapppedChildren
      );
    }
  }]);

  return Grid;
})(Component);

Grid.propTypes = {
  gutter: Type.string,
  flexCells: Type.bool,
  align: Type.oneOf(['top', 'center', 'bottom'])
};

_assign2['default'](Grid.prototype, _staticProperties$baseMethods$variables.baseMethods);
_assign2['default'](Grid, _staticProperties$baseMethods$variables.staticProperties);

exports['default'] = Grid;
module.exports = exports['default'];
