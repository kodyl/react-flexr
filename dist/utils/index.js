'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variables = exports.horizontal = exports.vertical = exports.optimizedResize = exports.mediaQueries = exports.matchMediaQueries = exports.settings = exports.canUseDOM = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.generateMatchMediaString = generateMatchMediaString;
exports.setBreakpoints = setBreakpoints;
exports.getBreakpoints = getBreakpoints;
exports.clearBreakpoints = clearBreakpoints;
exports.isDifferent = isDifferent;
exports.findBreakpoints = findBreakpoints;
exports.initBreakpoints = initBreakpoints;
exports.findMatch = findMatch;
exports.doubleUnit = doubleUnit;
exports.assign = assign;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = exports.canUseDOM = function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
}();

var settings = exports.settings = {
  palm: { max: 600 },
  lap: { max: 959, min: 601 },
  portable: { max: 959 },
  desk: { min: 960 }
};

function generateMatchMediaString(_ref) {
  var min = _ref.min,
      max = _ref.max;

  var minStr = min ? '(min-width: ' + min + 'px)' : null;
  var maxStr = max ? '(max-width: ' + max + 'px)' : null;

  var str = minStr && maxStr ? minStr + ' and ' + maxStr : minStr || maxStr;

  return str;
}

var matchMediaQueries = exports.matchMediaQueries = (0, _keys2.default)(settings).reduce(function (acc, breakpoint) {
  acc[breakpoint] = generateMatchMediaString(settings[breakpoint]);
  return acc;
}, {});

var mediaQueries = exports.mediaQueries = (0, _keys2.default)(matchMediaQueries).reduce(function (acc, breakpoint) {
  acc[breakpoint] = '@media screen and ' + matchMediaQueries[breakpoint];
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

  var newBreakpoints = (0, _keys2.default)(matchMediaQueries).filter(function (breakpoint) {
    return window.matchMedia(matchMediaQueries[breakpoint]).matches;
  });

  return isDifferent(newBreakpoints) && setBreakpoints(newBreakpoints);
}

var initialized = false;
function initBreakpoints() {
  if (!initialized) {
    initialized = true;
    findBreakpoints();
  }
}

var optimizedResize = exports.optimizedResize = function () {
  var callbacks = new _map2.default();
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
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
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
      _str$match2 = (0, _slicedToArray3.default)(_str$match, 3),
      val = _str$match2[1],
      unit = _str$match2[2];

  return '' + val * 2 + unit;
}

var vertical = exports.vertical = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

var horizontal = exports.horizontal = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};

var variables = exports.variables = {
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

    var source = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
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
