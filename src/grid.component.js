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
      styles,
      align,
      flexCells,
      children,
      ...rest } = this.props;
    const gutter = propGutter || variables.gutter;

    this.styles = [
      styling.gridBase,
      { margin: `0 -${ gutter } ${ gutter }` },
      align ? { alignItems: flexAlignments[align] } : null,
      style,
      styles
    ];

    const wrapppedChildren = flexCells ?
      React.Children.map(
        children, child => child.type === Cell ?
          React.addons.cloneWithProps( child, { flex: true }) :
          React.addons.cloneWithProps( child ) ) :
      children;

    return (
      <div { ...rest } styles={ this.styles }>
        { wrapppedChildren }
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
