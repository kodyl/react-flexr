'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _generateMediaString$match = require('./utils/media-queries');

var settings = {
  palm: { max: 680 },
  lap: { max: 959, min: 681 },
  portable: { max: 959 },
  desk: { min: 960 }
};

exports['default'] = {
  matchMedia: {
    palm: _generateMediaString$match.match(settings.palm),
    lap: _generateMediaString$match.match(settings.lap),
    portable: _generateMediaString$match.match(settings.portable),
    desk: _generateMediaString$match.match(settings.desk)
  },
  queries: {
    palm: _generateMediaString$match.generateMediaString(settings.palm),
    lap: _generateMediaString$match.generateMediaString(settings.lap),
    portable: _generateMediaString$match.generateMediaString(settings.portable),
    desk: _generateMediaString$match.generateMediaString(settings.desk)
  },
  settings: settings
};
module.exports = exports['default'];
