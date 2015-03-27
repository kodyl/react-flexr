"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react/addons"));

var assign = _interopRequire(require("react/lib/Object.assign"));

var Cell = _interopRequire(require("./cell.component"));

var flexAlignments = _interopRequire(require("./flex-alignments"));

var Component = React.Component;
var Children = React.Children;
var PropTypes = React.PropTypes;
var addons = React.addons;

var Grid = (function (_Component) {
  function Grid(props) {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), "constructor", this).call(this, props);
    var gutter = props.gutter;
    var style = props.style;
    var align = props.align;

    var styles = {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      margin: gutter ? gutter : "-1em 0 1em -1em",
      padding: 0,
      alignItems: align ? flexAlignments[align] : null
    };

    this.styles = style ? assign({}, styles, style) : styles;
  }

  _inherits(Grid, _Component);

  _createClass(Grid, {
    render: {
      value: function render() {
        var props = this.props;
        var children = props.flexCells ? Children.map(props.children, function (child) {
          return child.type === Cell ? addons.cloneWithProps(child, { flex: true }) : child;
        }) : props.children;

        return React.createElement(
          "div",
          { style: this.styles },
          children
        );
      }
    }
  });

  return Grid;
})(Component);

Grid.propTypes = {
  gutter: PropTypes.string,
  flexCells: PropTypes.bool,
  align: PropTypes.oneOf(["top", "center", "bottom"])
};

module.exports = Grid;
