"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var assign = _interopRequire(require("react/lib/Object.assign"));

var flexAlignments = _interopRequire(require("./flex-alignments"));

var PropTypes = React.PropTypes;

var Cell = (function (_React$Component) {
  function Cell(props) {
    _classCallCheck(this, Cell);

    _get(Object.getPrototypeOf(Cell.prototype), "constructor", this).call(this, props);
    var size = props.size;
    var gutter = props.gutter;
    var flex = props.flex;
    var style = props.style;
    var align = props.align;

    var _ref = size ? size.split("/") : [];

    var _ref2 = _slicedToArray(_ref, 2);

    var numer = _ref2[0];
    var denom = _ref2[1];

    var styles = {
      flex: size ? "0 0 " + 100 / denom * numer + "%" : 1,
      padding: gutter ? gutter : "1em 0 0 1em",
      display: flex ? "flex" : null,
      alignSelf: align ? flexAlignments[align] : null
    };

    this.styles = style ? assign({}, styles, style) : styles;
  }

  _inherits(Cell, _React$Component);

  _createClass(Cell, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { style: this.styles },
          this.props.children
        );
      }
    }
  });

  return Cell;
})(React.Component);

Cell.propTypes = {
  gutter: React.PropTypes.string,
  flex: React.PropTypes.bool,
  align: PropTypes.oneOf(["top", "center", "bottom"]),
  size: function (props, propName) {
    if (props[propName] && props[propName].split("/").length !== 2) {
      return new Error("Size should be a fraction, e.g. 1/6");
    }
  }
};

module.exports = Cell;
