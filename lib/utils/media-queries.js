'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var canUseDOM = (function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
})();

function generateMediaString(props) {
  var min = props.min;
  var max = props.max;

  var minStr = min ? '(min-width: ' + min + 'px)' : null;
  var maxStr = max ? '(max-width: ' + max + 'px)' : null;

  var str = minStr && maxStr ? '' + minStr + ' and ' + maxStr : minStr ? minStr : maxStr;

  return str;
}

function match(props) {
  if (!canUseDOM) {
    return false;
  }
  var matchMe = props.query ? props.query : generateMediaString(props);

  return window.matchMedia(matchMe).matches;
}

exports['default'] = {
  generateMediaString: generateMediaString, match: match
};
module.exports = exports['default'];
