"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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
exports.matchMediaQueries = matchMediaQueries;
var mediaQueries = Object.keys(matchMediaQueries).reduce(function (acc, breakpoint) {
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
      _str$match2 = (0, _slicedToArray2["default"])(_str$match, 3),
      val = _str$match2[1],
      unit = _str$match2[2];

  return "".concat(val * 2).concat(unit);
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