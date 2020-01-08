"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.generateMatchMediaString = generateMatchMediaString;
exports.setBreakpoints = setBreakpoints;
exports.getBreakpoints = getBreakpoints;
exports.clearBreakpoints = clearBreakpoints;
exports.isDifferent = isDifferent;
exports.findBreakpoints = findBreakpoints;
exports.findMatch = findMatch;
exports.matchBreakpoints = matchBreakpoints;
exports.doubleUnit = doubleUnit;
exports.assign = assign;
exports.getInitialBreakpoints = getInitialBreakpoints;
exports.ssrWillHydrate = ssrWillHydrate;
exports.ssrDidHydrate = ssrDidHydrate;
exports.calcWidth = calcWidth;
exports.handleFlexSize = handleFlexSize;
exports.variables = exports.horizontal = exports.vertical = exports.optimizedResize = exports.mediaQueries = exports.matchMediaQueries = exports.settings = exports.canUseDOM = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _context2, _context3;

var canUseDOM = function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
}();

exports.canUseDOM = canUseDOM;
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
exports.settings = settings;

function generateMatchMediaString(_ref) {
  var _context;

  var min = _ref.min,
      max = _ref.max;
  var minStr = min ? "(min-width: ".concat(min, "px)") : null;
  var maxStr = max ? "(max-width: ".concat(max, "px)") : null;
  var str = minStr && maxStr ? (0, _concat["default"])(_context = "".concat(minStr, " and ")).call(_context, maxStr) : minStr || maxStr;
  return str;
}

var matchMediaQueries = (0, _reduce["default"])(_context2 = (0, _keys["default"])(settings)).call(_context2, function (acc, breakpoint) {
  acc[breakpoint] = generateMatchMediaString(settings[breakpoint]);
  return acc;
}, {});
exports.matchMediaQueries = matchMediaQueries;
var mediaQueries = (0, _reduce["default"])(_context3 = (0, _keys["default"])(matchMediaQueries)).call(_context3, function (acc, breakpoint) {
  acc[breakpoint] = "@media screen and ".concat(matchMediaQueries[breakpoint]);
  return acc;
}, {});
exports.mediaQueries = mediaQueries;
var breakpoints = [];
var breakpointsString = '';

function setBreakpoints(arr) {
  breakpoints = arr;
  breakpointsString = breakpoints.toString();
  return breakpoints;
}

function getBreakpoints(asString) {
  var _context4;

  return asString ? breakpointsString : (0, _concat["default"])(_context4 = []).call(_context4, breakpoints);
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
  var newBreakpoints = (0, _filter["default"])(_context5 = (0, _keys["default"])(matchMediaQueries)).call(_context5, function (breakpoint) {
    return window.matchMedia(matchMediaQueries[breakpoint]).matches;
  });
  return isDifferent(newBreakpoints) && setBreakpoints(newBreakpoints);
}

var optimizedResize = function () {
  var callbacks = new _map["default"]();
  var running = false;

  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        (0, _setTimeout2["default"])(runCallbacks, 66);
      }
    }
  }

  function runCallbacks() {
    var values = (0, _values["default"])(callbacks).call(callbacks);
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
    callbacks["delete"](key);
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

exports.optimizedResize = optimizedResize;

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
    if ((0, _indexOf["default"])(breakpoints).call(breakpoints, arr[i]) !== -1) {
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
      _str$match2 = (0, _slicedToArray2["default"])(_str$match, 3),
      val = _str$match2[1],
      unit = _str$match2[2];

  return (0, _concat["default"])(_context6 = "".concat(val * 2)).call(_context6, unit);
}

var vertical = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};
exports.vertical = vertical;
var horizontal = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
exports.horizontal = horizontal;
var variables = {
  gutter: '11px'
};
exports.variables = variables;

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
      _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
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