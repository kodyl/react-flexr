import './testdom';
import assert from 'assert';
import React from 'react/addons';
import assign from 'react/lib/Object.assign';
import flexAlignments from '../flex-alignments';
import Grid from '../grid.component';
import Cell from '../cell.component';
import { variables } from '../defaults';

function sanitizeStyles(arr) {
  return assign.apply(null, [{}].concat( arr ) );
}

function extractStyles(component) {
  const { styles } = React.addons.TestUtils.renderIntoDocument( component );
  return sanitizeStyles(styles);
}

describe('GridComponent', () => {
  it('has correct base styling', () => {
    const styles = extractStyles( <Grid /> );
    assert.equal( styles.display, 'flex' );
    assert.equal( styles.flexWrap, 'wrap' );
    assert.equal( styles.listStyle, 'none' );
    assert.equal( styles.padding, 0 );
    assert.equal( styles.margin, `0 -${ variables.gutter } ${ variables.gutter }`);
  });

  ['top', 'bottom', 'center'].map(alignment => {
    it(`can be ${alignment}-aligned`, () => {
      const styles = extractStyles( <Grid align={ alignment } /> );
      assert.equal( styles.alignItems, flexAlignments[alignment] );
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


describe('CellComponent', () => {
  it('has correct base styling', () => {
    const styles = extractStyles( <Cell /> );
    assert.equal( styles.flex, '1');
    assert.equal( styles.padding, `0 ${ variables.gutter }`);
  });

  ['top', 'bottom', 'center'].map(alignment => {
    it(`can be ${alignment}-aligned`, () => {
      const styles = extractStyles( <Cell align={ alignment } /> );
      assert.equal( styles.alignSelf, flexAlignments[alignment] );
    });
  });

  it('can have fraction based sizes', () => {
    ['1/2', '2/5', '1/12', '20/100'].map( fraction => {
      const [ numer, denom ] = fraction.split('/');
      const styles = extractStyles( <Cell size={ fraction} /> );
      assert.equal( styles.flex, `0 0 ${ ( 100 / denom ) * numer }%`);
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
