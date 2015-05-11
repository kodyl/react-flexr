import assert from 'assert';
import React from 'react/addons';
import { vertical } from '../utils/flex-alignments';
import Cell from '../cell.component';
import { variables } from '../defaults';
import { sanitizeStyles, extractStyles } from './test-utils';

describe('CellComponent', () => {
  it('has correct base styling', () => {
    const styles = extractStyles( <Cell /> );
    assert.equal( styles.flex, '1');
    assert.equal( styles.padding, `0 ${ variables.gutter }`);
  });

  ['top', 'bottom', 'center'].map(alignment => {
    it(`can be ${alignment}-aligned`, () => {
      const styles = extractStyles( <Cell align={ alignment } /> );
      assert.equal( styles.alignSelf, vertical[alignment] );
    });
  });

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

    const sizes = {
      palm: 320,
      lap: 700,
      desk: 1000
    };

    class ComponentWithSizeContext extends React.Component {
      getChildContext() { return { width: this.props.width }; }
      static childContextTypes = { width: React.PropTypes.number.isRequired }
      render() {
        return <Cell size='10/12' desk='1/4' lap='1/2' palm='1/8' />;
      }
    }

    it('accepts portable parameter', () => {
      class ComponentWithPortable extends React.Component {
        getChildContext() { return { width: this.props.width }; }
        static childContextTypes = { width: React.PropTypes.number.isRequired }
        render() {
          return <Cell size='10/12' portable='1/2' />;
        }
      }

      const tree = React.addons.TestUtils.renderIntoDocument(
        <ComponentWithSizeContext width={ sizes.lap } />
      );

      const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( styles.width, `${ 1 / 2 * 100 }%` );
    });

    it('accepts desk parameter', () => {
      const tree = React.addons.TestUtils.renderIntoDocument(
        <ComponentWithSizeContext width={ sizes.desk } />
      );

      const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( styles.width, `${ 1 / 4 * 100 }%` );
    });

    it('accepts lap parameter', () => {
      const tree = React.addons.TestUtils.renderIntoDocument(
        <ComponentWithSizeContext width={ sizes.lap } />
      );

      const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( styles.width, `${ 1 / 2 * 100 }%` );
    });

    it('accepts palm parameter', () => {
      const tree = React.addons.TestUtils.renderIntoDocument(
        <ComponentWithSizeContext width={ sizes.palm } />
      );

      const node = React.addons.TestUtils.findRenderedComponentWithType(tree, Cell);
      const styles = sanitizeStyles(node.styles);
      assert.equal( styles.width, `${ 1 / 8 * 100 }%` );
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
