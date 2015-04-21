import './testdom';
import assert from 'assert';
import React from 'react/addons';
import flexAlignments from '../utils/flex-alignments';
import Cell from '../cell.component';
import { variables } from '../defaults';
import { extractStyles } from './test-utils';

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

  it('accepts grow params', () => {
    const styles = extractStyles( <Cell grow={ false }/> );
    assert.equal( styles.flex, '0 1 auto');
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
