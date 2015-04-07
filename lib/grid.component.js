'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

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

var Component = _React2['default'].Component;
var Children = _React2['default'].Children;
var PropTypes = _React2['default'].PropTypes;
var addons = _React2['default'].addons;

var Grid = (function (_Component) {
  function Grid(props) {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this, props);
    var gutter = props.gutter;
    var style = props.style;
    var align = props.align;

    var styles = {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: gutter ? gutter : '0 -1em 1em',
      padding: 0,
      alignItems: align ? _flexAlignments2['default'][align] : null
    };

    this.styles = style ? _assign2['default']({}, styles, style) : styles;
  }

  _inherits(Grid, _Component);

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var children = props.flexCells ? Children.map(props.children, function (child) {
        return child.type === _Cell2['default'] ? addons.cloneWithProps(child, { flex: true }) : child;
      }) : props.children;

      return _React2['default'].createElement(
        'div',
        { style: this.styles },
        children
      );
    }
  }]);

  return Grid;
})(Component);

Grid.propTypes = {
  gutter: PropTypes.string,
  flexCells: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'center', 'bottom'])
};

exports['default'] = Grid;
module.exports = exports['default'];
