'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _flexAlignments = require('./flex-alignments');

var _flexAlignments2 = _interopRequireWildcard(_flexAlignments);

var PropTypes = _React2['default'].PropTypes;

var Cell = (function (_React$Component) {
  function Cell(props) {
    _classCallCheck(this, Cell);

    _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).call(this, props);
    var size = props.size;
    var gutter = props.gutter;
    var flex = props.flex;
    var style = props.style;
    var align = props.align;
    var grow = props.grow;

    var _ref = size ? size.split('/') : [];

    var _ref2 = _slicedToArray(_ref, 2);

    var numer = _ref2[0];
    var denom = _ref2[1];

    var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : 1;

    var styles = {
      flex: size ? '0 0 ' + 100 / denom * numer + '%' : '' + growStyle + ' 1',
      padding: gutter ? gutter : '0 1em',
      display: flex ? 'flex' : null,
      alignSelf: align ? _flexAlignments2['default'][align] : null
    };

    this.styles = style ? _assign2['default']({}, styles, style) : styles;
  }

  _inherits(Cell, _React$Component);

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        'div',
        { style: this.styles },
        this.props.children
      );
    }
  }]);

  return Cell;
})(_React2['default'].Component);

Cell.propTypes = {
  grow: PropTypes.oneOf([false, true, _React2['default'].PropTypes.number]),
  gutter: _React2['default'].PropTypes.string,
  flex: _React2['default'].PropTypes.bool,
  align: PropTypes.oneOf(['top', 'center', 'bottom']),
  size: function size(props, propName) {
    if (props[propName] && props[propName].split('/').length !== 2) {
      return new Error('Size should be a fraction, e.g. 1/6');
    }
  }
};

exports['default'] = Cell;
module.exports = exports['default'];
