import assert from 'assert';
import React from 'react/addons';
import { Cell, Grid, setBreakpoints, clearBreakpoints, getBreakpoints } from '../';
import { sanitizeStyles, extractStyles } from './test-utils';
const { TestUtils } = React.addons;

describe('CellComponent', () => {

  it('can have fraction based sizes', () => {
    ['1/2', '2/5', '1/12', '20/100'].map( fraction => {
      const [ numer, denom ] = fraction.split('/');
      const styles = extractStyles( <Cell size={ fraction} /> );
      assert.equal( styles.width, `${ ( 100 / denom ) * numer }%`);
    });
  });

  it('accepts grow params', () => {
    const styles = extractStyles( <Cell grow={ false }/> );
    assert.equal( styles.flex, '0 1 auto');
  });

  describe('Responsive Props', () => {

    beforeEach(() => {
      clearBreakpoints();
    });

    const component = (
      <Grid>
        <Cell
          size='10/12'
          desk='1/4'
          lap='1/2'
          palm='1/8'
          portable='1/6' />
      </Grid>
    );

    function getStyles(breakpoints) {
      setBreakpoints( breakpoints );
      const tree = TestUtils.renderIntoDocument( component );
      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      return sanitizeStyles(node.styles);
    }

    it('accepts portable parameter', () => {
      const styles = getStyles(['portable']);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 6 * 100 ) );
    });

    it('accepts desk parameter', () => {
      const styles = getStyles(['desk']);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 4 * 100 ) );
    });

    it('accepts lap parameter', () => {
      const styles = getStyles(['lap']);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 2 * 100 ) );
    });

    it('accepts palm parameter', () => {
      const styles = getStyles(['palm']);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 8 * 100 ) );
    });
  });
});
