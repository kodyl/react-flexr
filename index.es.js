import 'core-js/modules/es7.object.get-own-property-descriptors';
import 'core-js/modules/es6.symbol';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'core-js/modules/web.dom.iterable';
import 'core-js/modules/es6.array.iterator';
import 'core-js/modules/es6.object.to-string';
import 'core-js/modules/es6.object.keys';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import 'core-js/modules/es6.string.iterator';
import 'core-js/modules/es6.map';
import StyleSheet from 'stilr';
import React from 'react';
import PropTypes from 'prop-types';
import 'core-js/modules/es6.regexp.match';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'core-js/modules/es6.regexp.split';
import 'core-js/modules/es6.regexp.to-string';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';

var stylesheet = new (StyleSheet.Map || Map)();

var canUseDOM = function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
}();
var settings = {
  palm: {
    max: 600
  },
  lap: {
    max: 959,
    min: 601
  },
  portable: {
    max: 959
  },
  desk: {
    min: 960
  }
};
function generateMatchMediaString(_ref) {
  var min = _ref.min,
      max = _ref.max;
  var minStr = min ? "(min-width: ".concat(min, "px)") : null;
  var maxStr = max ? "(max-width: ".concat(max, "px)") : null;
  var str = minStr && maxStr ? "".concat(minStr, " and ").concat(maxStr) : minStr || maxStr;
  return str;
}
var matchMediaQueries = Object.keys(settings).reduce(function (acc, breakpoint) {
  acc[breakpoint] = generateMatchMediaString(settings[breakpoint]);
  return acc;
}, {});
var mediaQueries = Object.keys(matchMediaQueries).reduce(function (acc, breakpoint) {
  acc[breakpoint] = "@media screen and ".concat(matchMediaQueries[breakpoint]);
  return acc;
}, {});
var breakpoints = [];
var breakpointsString = '';
function setBreakpoints(arr) {
  breakpoints = arr;
  breakpointsString = breakpoints.toString();
  return breakpoints;
}
function getBreakpoints(asString) {
  return asString ? breakpointsString : [].concat(breakpoints);
}
function clearBreakpoints() {
  breakpoints = [];
  return breakpoints;
}
function isDifferent(arr) {
  return arr.toString() !== breakpointsString;
}
function findBreakpoints() {
  if (!canUseDOM) return getBreakpoints();
  var newBreakpoints = Object.keys(matchMediaQueries).filter(function (breakpoint) {
    return window.matchMedia(matchMediaQueries[breakpoint]).matches;
  });
  return isDifferent(newBreakpoints) && setBreakpoints(newBreakpoints);
}
var optimizedResize = function () {
  var callbacks = new Map();
  var running = false;

  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  function runCallbacks() {
    var values = callbacks.values();
    var more = true;

    while (more) {
      var _values$next = values.next(),
          done = _values$next.done,
          callback = _values$next.value;

      if (done) {
        more = false;
      } else {
        callback();
      }
    }

    running = false;
  }

  function addCallback(callback, key) {
    if (typeof callback === 'function') {
      callbacks.set(key || callback, callback);
    }
  }

  function removeCallback(key) {
    callbacks.delete(key);
  }

  return {
    init: function init(callback) {
      window.addEventListener('resize', resize);
      addCallback(callback);
    },
    add: function add(callback, key) {
      addCallback(callback, key);
    },
    remove: function remove(key) {
      removeCallback(key);
    }
  };
}();
function findMatch() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return matchBreakpoints(breakpoints, arr);
}
function matchBreakpoints(breakpoints, arr) {
  if (typeof breakpoints === 'string') {
    breakpoints = breakpoints.split(',');
  }

  var breakpoint = false;
  if (!arr || arr.length === 0) return breakpoint;
  if (breakpoints.length === 0) findBreakpoints();

  for (var i = 0, len = arr.length; i < len; i++) {
    if (breakpoints.indexOf(arr[i]) !== -1) {
      breakpoint = arr[i];
      break;
    }
  }

  return breakpoint;
}
var valunit = /(\d+)(\w+)/;
function doubleUnit(str) {
  var _str$match = str.match(valunit),
      _str$match2 = _slicedToArray(_str$match, 3),
      val = _str$match2[1],
      unit = _str$match2[2];

  return "".concat(val * 2).concat(unit);
}
var vertical = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};
var horizontal = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
var variables = {
  gutter: '11px'
};
function assign(target) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];

    if (nextSource == null) {
      continue;
    }

    var source = Object(nextSource); // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        to[key] = source[key];
      }
    }
  }

  return to;
}

if (canUseDOM) {
  if (window.__flexr) {
    setBreakpoints(window.__flexr);
  } else {
    findBreakpoints();
  }
}

var INITIAL_BREAKPOINT = getBreakpoints(true);
var hydrating = false;
function getInitialBreakpoints() {
  if (!canUseDOM) {
    return getBreakpoints(true);
  }

  return hydrating ? INITIAL_BREAKPOINT : null;
}
function ssrWillHydrate() {
  hydrating = true;
  findBreakpoints();
}
function ssrDidHydrate() {
  hydrating = false;
  INITIAL_BREAKPOINT = getBreakpoints(true);
}
function calcWidth(size) {
  if (typeof size === 'number') {
    return {
      width: size < 1 ? "".concat(Math.round(size * 10000) / 100, "%") : "".concat(size, "px")
    };
  }

  var _ref2 = size ? size.split('/') : [],
      _ref3 = _slicedToArray(_ref2, 2),
      numerator = _ref3[0],
      denominator = _ref3[1];

  return {
    width: "".concat(100 / denominator * numerator, "%")
  };
}
function handleFlexSize(_ref4) {
  var breakpoint = _ref4.breakpoint,
      grow = _ref4.grow,
      size = _ref4.size;
  var growStyle = typeof grow === 'number' ? grow : grow === false ? 0 : undefined;
  return breakpoint && breakpoint !== 'hidden' ? calcWidth(breakpoint) : size ? calcWidth(size) : growStyle !== undefined ? {
    flex: "".concat(growStyle, " 1 auto"),
    WebkitFlex: "".concat(growStyle, " 1 auto"),
    msFlex: "".concat(growStyle, " 1 auto")
  } : null;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var styles = StyleSheet.create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: "0 -".concat(variables.gutter, " ").concat(doubleUnit(variables.gutter))
  },
  leftHorizontal: {
    justifyContent: horizontal.left
  },
  centerHorizontal: {
    justifyContent: horizontal.center
  },
  rightHorizontal: {
    justifyContent: horizontal.right
  },
  topVertical: {
    alignItems: vertical.top
  },
  centerVertical: {
    alignItems: vertical.center
  },
  bottomVertical: {
    alignItems: vertical.bottom
  }
}, stylesheet);

var Grid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
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
          rest = _objectWithoutProperties(_this$props, ["gutter", "style", "align", "hAlign", "flexCells", "children", "className"]);

      this.styles = assign({}, style, gutter ? {
        margin: "0 -".concat(gutter, " ").concat(doubleUnit(gutter))
      } : null);
      var classes = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null].filter(Boolean).join(' ');
      var parentProps = {};
      if (gutter) parentProps.gutter = gutter;
      if (flexCells) parentProps.flex = true;
      var wrappedChildren = Object.keys(parentProps).length ? React.Children.map(children, function (child) {
        return child ? React.cloneElement(child, _objectSpread({}, parentProps)) : child;
      }) : children;
      return React.createElement('div', _objectSpread({}, rest, {
        style: this.styles,
        className: classes
      }), wrappedChildren);
    }
  }]);

  return Grid;
}(React.Component);
Grid.propTypes = {
  gutter: PropTypes.string,
  flexCells: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'center', 'bottom'])
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ERGONOMICS = Object.keys(settings);
var cellStyles = StyleSheet.create({
  base: {
    padding: "0 ".concat(variables.gutter)
  },
  baseFlex: {
    flex: 1
  },
  flex: {
    display: "flex"
  },
  top: {
    alignSelf: vertical.top
  },
  bottom: {
    alignSelf: vertical.bottom
  },
  center: {
    alignSelf: vertical.center
  }
}, stylesheet);

var Cell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      breakpoints: getInitialBreakpoints()
    });

    _defineProperty(_assertThisInitialized(_this), "handleFlexSize", function (breakpoint) {
      var _this$props = _this.props,
          grow = _this$props.grow,
          size = _this$props.size;
      return handleFlexSize({
        breakpoint: breakpoint,
        grow: grow,
        size: size
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDefinedBreakpoints", function () {
      var breakpoints = [];

      for (var i = 0, len = ERGONOMICS.length; i < len; i++) {
        if (_this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
      }

      return breakpoints;
    });

    _defineProperty(_assertThisInitialized(_this), "getMatchingBreakpoint", function () {
      var definedBreakpoints = _this.getDefinedBreakpoints();

      var breakpoint = _this.state.breakpoints ? matchBreakpoints(_this.state.breakpoints.split(","), definedBreakpoints) : findMatch.apply(null, definedBreakpoints);
      return _this.props[breakpoint];
    });

    return _this;
  }

  _createClass(Cell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.breakpoints) {
        var breakpoints = getBreakpoints(true);

        if (breakpoints !== this.state.breakpoints) {
          var definedBreakpoints = this.getDefinedBreakpoints();

          if (definedBreakpoints.length) {
            this.setState({
              breakpoints: breakpoints
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var breakpoint = this.getMatchingBreakpoint();

      if (breakpoint === "hidden") {
        return null;
      }

      var flexSize = this.handleFlexSize(breakpoint);

      var _this$props2 = this.props,
          gutter = _this$props2.gutter,
          flex = _this$props2.flex,
          className = _this$props2.className,
          align = _this$props2.align,
          style = _this$props2.style,
          children = _this$props2.children,
          size = _this$props2.size,
          palm = _this$props2.palm,
          lap = _this$props2.lap,
          portable = _this$props2.portable,
          desk = _this$props2.desk,
          grow = _this$props2.grow,
          rest = _objectWithoutProperties(_this$props2, ["gutter", "flex", "className", "align", "style", "children", "size", "palm", "lap", "portable", "desk", "grow"]);

      this.styles = assign({}, gutter ? {
        padding: "0 ".concat(gutter)
      } : null, flexSize, style);
      var classes = [cellStyles.base, flexSize ? null : cellStyles.baseFlex, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null].filter(Boolean).join(" ");
      return React.createElement("div", _objectSpread$1({}, rest, {
        style: this.styles,
        className: classes
      }), children);
    }
  }]);

  return Cell;
}(React.Component);
Cell.propTypes = {
  grow: PropTypes.oneOf([false, true, PropTypes.number]),
  gutter: PropTypes.string,
  flex: PropTypes.bool,
  align: PropTypes.oneOf(["top", "center", "bottom"]),
  size: function size(props, propName) {
    var value = props[propName];

    if (value && !(typeof value === "number" || typeof value === "string" && /^[0-9]+\/[0-9]+$/.test(value))) {
      return new Error("Size should be a fraction (e.g. 1/6) or a number for fixed size");
    }
  }
};

var HydrateSSR =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HydrateSSR, _React$Component);

  function HydrateSSR(props) {
    var _this;

    _classCallCheck(this, HydrateSSR);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HydrateSSR).call(this, props));
    ssrWillHydrate();
    return _this;
  }

  _createClass(HydrateSSR, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      ssrDidHydrate();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return HydrateSSR;
}(React.Component);

var palm = mediaQueries.palm,
    lap = mediaQueries.lap,
    portable = mediaQueries.portable,
    desk = mediaQueries.desk;

export { Cell, Grid, HydrateSSR, clearBreakpoints, desk, findBreakpoints, findMatch, getBreakpoints, lap, optimizedResize, palm, portable, setBreakpoints, stylesheet };
