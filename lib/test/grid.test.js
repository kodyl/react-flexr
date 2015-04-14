'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

require('./testdom');

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var _flexAlignments = require('../flex-alignments');

var _flexAlignments2 = _interopRequireWildcard(_flexAlignments);

var _Grid = require('../grid.component');

var _Grid2 = _interopRequireWildcard(_Grid);

var _Cell = require('../cell.component');

var _Cell2 = _interopRequireWildcard(_Cell);

var _variables = require('../defaults');

function sanitizeStyles(arr) {
  return _assign2['default'].apply(null, [{}].concat(arr));
}

function extractStyles(component) {
  var _React$addons$TestUtils$renderIntoDocument = _React2['default'].addons.TestUtils.renderIntoDocument(component);

  var styles = _React$addons$TestUtils$renderIntoDocument.styles;

  return sanitizeStyles(styles);
}

describe('GridComponent', function () {
  it('has correct base styling', function () {
    var styles = extractStyles(_React2['default'].createElement(_Grid2['default'], null));
    _assert2['default'].equal(styles.display, 'flex');
    _assert2['default'].equal(styles.flexWrap, 'wrap');
    _assert2['default'].equal(styles.listStyle, 'none');
    _assert2['default'].equal(styles.padding, 0);
    _assert2['default'].equal(styles.margin, '0 -' + _variables.variables.gutter + ' ' + _variables.variables.gutter);
  });

  ['top', 'bottom', 'center'].map(function (alignment) {
    it('can be ' + alignment + '-aligned', function () {
      var styles = extractStyles(_React2['default'].createElement(_Grid2['default'], { align: alignment }));
      _assert2['default'].equal(styles.alignItems, _flexAlignments2['default'][alignment]);
    });
  });

  // it('uses inheritet context if set', () => {
  //   const gutter = '2em';
  //   class ComponentWithContext extends React.Component {
  //     getChildContext() {
  //       return { gutter };
  //     }
  //     render() { return <div><Grid /></div>; }
  //   }
  //   ComponentWithContext.childContextTypes = {
  //     gutter: React.PropTypes.string
  //   };
  //
  //   const tree = React.addons.TestUtils.renderIntoDocument( <ComponentWithContext />);
  //   const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Grid);
  //   const styles = sanitizeStyles(node.styles);
  //   assert.equal( styles.margin, `0 -${ gutter } ${ gutter }` );
  // });
});

describe('CellComponent', function () {
  it('has correct base styling', function () {
    var styles = extractStyles(_React2['default'].createElement(_Cell2['default'], null));
    _assert2['default'].equal(styles.flex, '1');
    _assert2['default'].equal(styles.padding, '0 ' + _variables.variables.gutter);
  });

  ['top', 'bottom', 'center'].map(function (alignment) {
    it('can be ' + alignment + '-aligned', function () {
      var styles = extractStyles(_React2['default'].createElement(_Cell2['default'], { align: alignment }));
      _assert2['default'].equal(styles.alignSelf, _flexAlignments2['default'][alignment]);
    });
  });

  it('can have fraction based sizes', function () {
    ['1/2', '2/5', '1/12', '20/100'].map(function (fraction) {
      var _fraction$split = fraction.split('/');

      var _fraction$split2 = _slicedToArray(_fraction$split, 2);

      var numer = _fraction$split2[0];
      var denom = _fraction$split2[1];

      var styles = extractStyles(_React2['default'].createElement(_Cell2['default'], { size: fraction }));
      _assert2['default'].equal(styles.flex, '0 0 ' + 100 / denom * numer + '%');
    });
  });

  // it('uses inheritet context if set', () => {
  //   const gutter = '2em';
  //   class ComponentWithContext extends React.Component {
  //     getChildContext() {
  //       return { gutter };
  //     }
  //     render() { return <div><Cell /></div>; }
  //   }
  //   ComponentWithContext.childContextTypes = {
  //     gutter: React.PropTypes.string
  //   };
  //
  //   const tree = React.addons.TestUtils.renderIntoDocument( <ComponentWithContext />);
  //   const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
  //   const styles = sanitizeStyles(node.styles);
  //   assert.equal( styles.padding, `0 ${ gutter }` );
  // });
});
