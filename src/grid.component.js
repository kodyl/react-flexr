import React from 'react/addons';
import assign from 'react/lib/Object.assign';
import Cell from './cell.component';
import flexAlignments from './flex-alignments';
import StyleSheet from 'react-style';
import { staticProperties, baseMethods, variables } from './defaults';
const { Component, PropTypes: Type } = React;

const styling = StyleSheet.create({
  gridBase: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0
  }
});


class Grid extends Component {
  render() {
    const {
      gutter: propGutter,
      style,
      align,
      // flexCells,
      children,
      ...rest } = this.props;
    const gutter = propGutter || variables.gutter;

    this.styles = [
      styling.gridBase,
      { margin: `0 -${ gutter } ${ gutter }` },
      align ? { alignItems: flexAlignments[align] } : null,
      style
    ];

    // const wrapChildren = flexCells ?
    //   Children.map(
    //     children, child => child.type === Cell ?
    //       addons.cloneWithProps(child, { flex: true }) :
    //       addons.cloneWithProps( child ) ) :
    //   Children.map( children, child => addons.cloneWithProps(child));

    return (
      <div { ...rest } styles={ this.styles }>
        { children }
      </div>
    );
  }
}

Grid.propTypes = {
  gutter: Type.string,
  flexCells: Type.bool,
  align: Type.oneOf(['top', 'center', 'bottom'])
};

assign(Grid.prototype, baseMethods);
assign(Grid, staticProperties);

export default Grid;
