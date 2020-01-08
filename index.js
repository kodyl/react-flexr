(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.array.join'), require('@babel/runtime-corejs3/core-js-stable/object/define-property'), require('@babel/runtime-corejs3/core-js-stable/object/define-properties'), require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors'), require('@babel/runtime-corejs3/core-js-stable/instance/for-each'), require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor'), require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols'), require('@babel/runtime-corejs3/helpers/defineProperty'), require('@babel/runtime-corejs3/core-js-stable/instance/map'), require('@babel/runtime-corejs3/core-js-stable/object/keys'), require('@babel/runtime-corejs3/core-js-stable/instance/filter'), require('@babel/runtime-corejs3/helpers/objectWithoutProperties'), require('@babel/runtime-corejs3/helpers/classCallCheck'), require('@babel/runtime-corejs3/helpers/createClass'), require('@babel/runtime-corejs3/helpers/possibleConstructorReturn'), require('@babel/runtime-corejs3/helpers/getPrototypeOf'), require('@babel/runtime-corejs3/helpers/inherits'), require('@babel/runtime-corejs3/core-js-stable/instance/concat'), require('@babel/runtime-corejs3/core-js-stable/map'), require('stilr'), require('react'), require('prop-types'), require('core-js/modules/es.object.to-string'), require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.regexp.to-string'), require('core-js/modules/es.string.match'), require('core-js/modules/es.string.split'), require('@babel/runtime-corejs3/helpers/slicedToArray'), require('@babel/runtime-corejs3/core-js-stable/instance/index-of'), require('@babel/runtime-corejs3/core-js-stable/instance/values'), require('@babel/runtime-corejs3/core-js-stable/set-timeout'), require('@babel/runtime-corejs3/core-js-stable/instance/reduce'), require('@babel/runtime-corejs3/helpers/assertThisInitialized')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.array.join', '@babel/runtime-corejs3/core-js-stable/object/define-property', '@babel/runtime-corejs3/core-js-stable/object/define-properties', '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors', '@babel/runtime-corejs3/core-js-stable/instance/for-each', '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor', '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols', '@babel/runtime-corejs3/helpers/defineProperty', '@babel/runtime-corejs3/core-js-stable/instance/map', '@babel/runtime-corejs3/core-js-stable/object/keys', '@babel/runtime-corejs3/core-js-stable/instance/filter', '@babel/runtime-corejs3/helpers/objectWithoutProperties', '@babel/runtime-corejs3/helpers/classCallCheck', '@babel/runtime-corejs3/helpers/createClass', '@babel/runtime-corejs3/helpers/possibleConstructorReturn', '@babel/runtime-corejs3/helpers/getPrototypeOf', '@babel/runtime-corejs3/helpers/inherits', '@babel/runtime-corejs3/core-js-stable/instance/concat', '@babel/runtime-corejs3/core-js-stable/map', 'stilr', 'react', 'prop-types', 'core-js/modules/es.object.to-string', 'core-js/modules/es.regexp.exec', 'core-js/modules/es.regexp.to-string', 'core-js/modules/es.string.match', 'core-js/modules/es.string.split', '@babel/runtime-corejs3/helpers/slicedToArray', '@babel/runtime-corejs3/core-js-stable/instance/index-of', '@babel/runtime-corejs3/core-js-stable/instance/values', '@babel/runtime-corejs3/core-js-stable/set-timeout', '@babel/runtime-corejs3/core-js-stable/instance/reduce', '@babel/runtime-corejs3/helpers/assertThisInitialized'], factory) :
  (global = global || self, factory(global['react-flexr'] = {}, null, global._Object$defineProperty, global._Object$defineProperties, global._Object$getOwnPropertyDescriptors, global._forEachInstanceProperty, global._Object$getOwnPropertyDescriptor, global._Object$getOwnPropertySymbols, global._defineProperty, global._mapInstanceProperty, global._Object$keys, global._filterInstanceProperty, global._objectWithoutProperties, global._classCallCheck, global._createClass, global._possibleConstructorReturn, global._getPrototypeOf, global._inherits, global._concatInstanceProperty, global._Map, global.StyleSheet, global.React, global.PropTypes, null, null, null, null, null, global._slicedToArray, global._indexOfInstanceProperty, global._valuesInstanceProperty, global._setTimeout, global._reduceInstanceProperty, global._assertThisInitialized));
}(this, (function (exports, es_array_join, _Object$defineProperty, _Object$defineProperties, _Object$getOwnPropertyDescriptors, _forEachInstanceProperty, _Object$getOwnPropertyDescriptor, _Object$getOwnPropertySymbols, _defineProperty, _mapInstanceProperty, _Object$keys, _filterInstanceProperty, _objectWithoutProperties, _classCallCheck, _createClass, _possibleConstructorReturn, _getPrototypeOf, _inherits, _concatInstanceProperty, _Map, StyleSheet, React, PropTypes, es_object_toString, es_regexp_exec, es_regexp_toString, es_string_match, es_string_split, _slicedToArray, _indexOfInstanceProperty, _valuesInstanceProperty, _setTimeout, _reduceInstanceProperty, _assertThisInitialized) { 'use strict';

  _Object$defineProperty = _Object$defineProperty && _Object$defineProperty.hasOwnProperty('default') ? _Object$defineProperty['default'] : _Object$defineProperty;
  _Object$defineProperties = _Object$defineProperties && _Object$defineProperties.hasOwnProperty('default') ? _Object$defineProperties['default'] : _Object$defineProperties;
  _Object$getOwnPropertyDescriptors = _Object$getOwnPropertyDescriptors && _Object$getOwnPropertyDescriptors.hasOwnProperty('default') ? _Object$getOwnPropertyDescriptors['default'] : _Object$getOwnPropertyDescriptors;
  _forEachInstanceProperty = _forEachInstanceProperty && _forEachInstanceProperty.hasOwnProperty('default') ? _forEachInstanceProperty['default'] : _forEachInstanceProperty;
  _Object$getOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor && _Object$getOwnPropertyDescriptor.hasOwnProperty('default') ? _Object$getOwnPropertyDescriptor['default'] : _Object$getOwnPropertyDescriptor;
  _Object$getOwnPropertySymbols = _Object$getOwnPropertySymbols && _Object$getOwnPropertySymbols.hasOwnProperty('default') ? _Object$getOwnPropertySymbols['default'] : _Object$getOwnPropertySymbols;
  _defineProperty = _defineProperty && _defineProperty.hasOwnProperty('default') ? _defineProperty['default'] : _defineProperty;
  _mapInstanceProperty = _mapInstanceProperty && _mapInstanceProperty.hasOwnProperty('default') ? _mapInstanceProperty['default'] : _mapInstanceProperty;
  _Object$keys = _Object$keys && _Object$keys.hasOwnProperty('default') ? _Object$keys['default'] : _Object$keys;
  _filterInstanceProperty = _filterInstanceProperty && _filterInstanceProperty.hasOwnProperty('default') ? _filterInstanceProperty['default'] : _filterInstanceProperty;
  _objectWithoutProperties = _objectWithoutProperties && _objectWithoutProperties.hasOwnProperty('default') ? _objectWithoutProperties['default'] : _objectWithoutProperties;
  _classCallCheck = _classCallCheck && _classCallCheck.hasOwnProperty('default') ? _classCallCheck['default'] : _classCallCheck;
  _createClass = _createClass && _createClass.hasOwnProperty('default') ? _createClass['default'] : _createClass;
  _possibleConstructorReturn = _possibleConstructorReturn && _possibleConstructorReturn.hasOwnProperty('default') ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
  _getPrototypeOf = _getPrototypeOf && _getPrototypeOf.hasOwnProperty('default') ? _getPrototypeOf['default'] : _getPrototypeOf;
  _inherits = _inherits && _inherits.hasOwnProperty('default') ? _inherits['default'] : _inherits;
  _concatInstanceProperty = _concatInstanceProperty && _concatInstanceProperty.hasOwnProperty('default') ? _concatInstanceProperty['default'] : _concatInstanceProperty;
  _Map = _Map && _Map.hasOwnProperty('default') ? _Map['default'] : _Map;
  StyleSheet = StyleSheet && StyleSheet.hasOwnProperty('default') ? StyleSheet['default'] : StyleSheet;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;
  _indexOfInstanceProperty = _indexOfInstanceProperty && _indexOfInstanceProperty.hasOwnProperty('default') ? _indexOfInstanceProperty['default'] : _indexOfInstanceProperty;
  _valuesInstanceProperty = _valuesInstanceProperty && _valuesInstanceProperty.hasOwnProperty('default') ? _valuesInstanceProperty['default'] : _valuesInstanceProperty;
  _setTimeout = _setTimeout && _setTimeout.hasOwnProperty('default') ? _setTimeout['default'] : _setTimeout;
  _reduceInstanceProperty = _reduceInstanceProperty && _reduceInstanceProperty.hasOwnProperty('default') ? _reduceInstanceProperty['default'] : _reduceInstanceProperty;
  _assertThisInitialized = _assertThisInitialized && _assertThisInitialized.hasOwnProperty('default') ? _assertThisInitialized['default'] : _assertThisInitialized;

  var stylesheet = new (StyleSheet.Map || _Map)();

  var _context2, _context3;

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
    var _context;

    var min = _ref.min,
        max = _ref.max;
    var minStr = min ? "(min-width: ".concat(min, "px)") : null;
    var maxStr = max ? "(max-width: ".concat(max, "px)") : null;
    var str = minStr && maxStr ? _concatInstanceProperty(_context = "".concat(minStr, " and ")).call(_context, maxStr) : minStr || maxStr;
    return str;
  }
  var matchMediaQueries = _reduceInstanceProperty(_context2 = _Object$keys(settings)).call(_context2, function (acc, breakpoint) {
    acc[breakpoint] = generateMatchMediaString(settings[breakpoint]);
    return acc;
  }, {});
  var mediaQueries = _reduceInstanceProperty(_context3 = _Object$keys(matchMediaQueries)).call(_context3, function (acc, breakpoint) {
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
    var _context4;

    return asString ? breakpointsString : _concatInstanceProperty(_context4 = []).call(_context4, breakpoints);
  }
  function clearBreakpoints() {
    breakpoints = [];
    return breakpoints;
  }
  function isDifferent(arr) {
    return arr.toString() !== breakpointsString;
  }
  function findBreakpoints() {
    var _context5;

    if (!canUseDOM) return getBreakpoints();

    var newBreakpoints = _filterInstanceProperty(_context5 = _Object$keys(matchMediaQueries)).call(_context5, function (breakpoint) {
      return window.matchMedia(matchMediaQueries[breakpoint]).matches;
    });

    return isDifferent(newBreakpoints) && setBreakpoints(newBreakpoints);
  }
  var optimizedResize = function () {
    var callbacks = new _Map();
    var running = false;

    function resize() {
      if (!running) {
        running = true;

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallbacks);
        } else {
          _setTimeout(runCallbacks, 66);
        }
      }
    }

    function runCallbacks() {
      var values = _valuesInstanceProperty(callbacks).call(callbacks);

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
      if (_indexOfInstanceProperty(breakpoints).call(breakpoints, arr[i]) !== -1) {
        breakpoint = arr[i];
        break;
      }
    }

    return breakpoint;
  }
  var valunit = /(\d+)(\w+)/;
  function doubleUnit(str) {
    var _context6;

    var _str$match = str.match(valunit),
        _str$match2 = _slicedToArray(_str$match, 3),
        val = _str$match2[1],
        unit = _str$match2[2];

    return _concatInstanceProperty(_context6 = "".concat(val * 2)).call(_context6, unit);
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

  var _context;

  function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context6; _forEachInstanceProperty(_context6 = ownKeys(Object(source))).call(_context6, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var styles = StyleSheet.create({
    base: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: 0,
      margin: _concatInstanceProperty(_context = "0 -".concat(variables.gutter, " ")).call(_context, doubleUnit(variables.gutter))
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
        var _context2, _context3, _context4;

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
          margin: _concatInstanceProperty(_context2 = "0 -".concat(gutter, " ")).call(_context2, doubleUnit(gutter))
        } : null);

        var classes = _filterInstanceProperty(_context3 = [styles.base, className, align ? styles[align + 'Vertical'] : null, hAlign ? styles[hAlign + 'Horizontal'] : null]).call(_context3, Boolean).join(' ');

        var parentProps = {};
        if (gutter) parentProps.gutter = gutter;
        if (flexCells) parentProps.flex = true;
        var wrappedChildren = _Object$keys(parentProps).length ? _mapInstanceProperty(_context4 = React.Children).call(_context4, children, function (child) {
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

  function ownKeys$1(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys$1(Object(source), true)).call(_context3, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys$1(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var ERGONOMICS = _Object$keys(settings);

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
      var _getPrototypeOf2, _context;

      var _this;

      _classCallCheck(this, Cell);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cell)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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
        var _context2;

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

        var classes = _filterInstanceProperty(_context2 = [cellStyles.base, flexSize ? null : cellStyles.baseFlex, className, flex ? cellStyles.flex : null, align ? cellStyles[align] : null]).call(_context2, Boolean).join(" ");

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

  exports.Cell = Cell;
  exports.Grid = Grid;
  exports.HydrateSSR = HydrateSSR;
  exports.clearBreakpoints = clearBreakpoints;
  exports.desk = desk;
  exports.findBreakpoints = findBreakpoints;
  exports.findMatch = findMatch;
  exports.getBreakpoints = getBreakpoints;
  exports.lap = lap;
  exports.optimizedResize = optimizedResize;
  exports.palm = palm;
  exports.portable = portable;
  exports.setBreakpoints = setBreakpoints;
  exports.stylesheet = stylesheet;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
