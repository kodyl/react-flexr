import assert from 'assert';
import React, { PropTypes as Type } from 'react/addons';
import Cell from '../cell.component';
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


    class ComponentWithSizeContext extends React.Component {
      getChildContext() {
        return { breakpoints: this.props.breakpoints };
      }
      static childContextTypes = {
        breakpoints: Type.array.isRequired
      }
      render() {
        return <Cell size='10/12' desk='1/4' lap='1/2' palm='1/8' portable='1/6' />;
      }
    }

    it('accepts portable parameter', () => {
      const tree = TestUtils.renderIntoDocument(
        <ComponentWithSizeContext breakpoints={ ['portable'] } />
      );

      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 6 * 100 ) );
    });

    it('accepts desk parameter', () => {
      const tree = TestUtils.renderIntoDocument(
        <ComponentWithSizeContext breakpoints={ ['desk'] } />
      );

      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 4 * 100 ) );
    });

    it('accepts lap parameter', () => {
      const tree = TestUtils.renderIntoDocument(
        <ComponentWithSizeContext breakpoints={ ['lap'] } />
      );

      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 2 * 100 ) );
    });

    it('accepts palm parameter', () => {
      const tree = TestUtils.renderIntoDocument(
        <ComponentWithSizeContext breakpoints={ ['palm'] } />
      );

      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( parseInt( styles.width ), parseInt( 1 / 8 * 100 ) );
    });
  });

  // it('uses inheritet context if set', () => {
  //   const gutter = '2em';
  //   class ComponentWithContext extends React.Component {
  //     getChildContext() {
  //       return {
  //         flexr: {
  //           gutter
  //         }
  //       };
  //     }
  //     render() { return <div><Cell /></div>; }
  //   }
  //   ComponentWithContext.childContextTypes = {
  //     flexr: React.PropTypes.object
  //   };
  //
  //   const tree = React.addons.TestUtils.renderIntoDocument( <ComponentWithContext />);
  //   const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
  //   const styles = sanitizeStyles(node.styles);
  //   assert.equal( styles.padding, `0 ${ gutter }` );
  // });
});
