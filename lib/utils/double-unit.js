"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = doubleUnit;
var valunit = /(\d+)(\w+)/;

function doubleUnit(str) {
  var _str$match = str.match(valunit);

  var _str$match2 = _slicedToArray(_str$match, 3);

  var val = _str$match2[1];
  var unit = _str$match2[2];

  return "" + val * 2 + "" + unit;
}

module.exports = exports["default"];
