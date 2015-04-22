import assert from 'assert';
import React from 'react/addons';
import flexAlignments from '../utils/flex-alignments';
import Grid from '../grid.component';
import { variables } from '../defaults';
import doubleUnit from '../utils/double-unit';
import { extractStyles } from './test-utils';

describe('GridComponent', () => {
  it('has correct base styling', () => {
    const styles = extractStyles( <Grid /> );
    assert.equal( styles.display, 'flex' );
    assert.equal( styles.flexWrap, 'wrap' );
    assert.equal( styles.listStyle, 'none' );
    assert.equal( styles.padding, 0 );
    assert.equal( styles.margin, `0 -${ variables.gutter } ${ doubleUnit( variables.gutter ) }`);
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
