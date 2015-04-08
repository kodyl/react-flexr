import './testdom';
import assert from 'assert';
import flexAlignments from '../src/flex-alignments';

describe('GridComponent', () => {

  const React = require('react/addons');
  const Utils = React.addons.TestUtils;
  const Grid = require('../src/grid.component');

  it('has correct base styling', () => {
    const node = Utils.renderIntoDocument( <Grid /> );
    assert.equal( node.styles.display, 'flex' );
    assert.equal( node.styles.flexWrap, 'wrap' );
    assert.equal( node.styles.listStyle, 'none' );
    assert.equal( node.styles.padding, 0 );
  });

  ['top', 'bottom', 'center'].map(alignment => {
    it(`can be ${alignment}-aligned`, () => {
      const node = Utils.renderIntoDocument( <Grid align={ alignment } /> );
      assert.equal( node.styles.alignItems, flexAlignments[alignment] );
    });
  });
});

describe('CellComponent', () => {

  const React = require('react/addons');
  const Utils = React.addons.TestUtils;
  const Cell = require('../src/cell.component');

  it('has correct base styling', () => {
    const node = Utils.renderIntoDocument( <Cell /> );
    assert.equal( node.styles.flex, '1 1');
  });

  ['top', 'bottom', 'center'].map(alignment => {
    it(`can be ${alignment}-aligned`, () => {
      const node = Utils.renderIntoDocument( <Cell align={ alignment } /> );
      assert.equal( node.styles.alignSelf, flexAlignments[alignment] );
    });
  });

  it('can have fraction based sizes', () => {
    ['1/2', '2/5', '1/12', '20/100'].map( fraction => {
      const [ numer, denom ] = fraction.split('/');
      const node = Utils.renderIntoDocument( <Cell size={ fraction }/> );
      assert.equal( node.styles.flex, `0 0 ${ ( 100 / denom ) * numer }%`);
    });
  });
});
