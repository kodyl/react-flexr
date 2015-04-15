import StyleSheet from 'react-style';
import React from 'react/addons';
import assign from 'react/lib/Object.assign';
import Cell from './cell.component';
import flexAlignments from './flex-alignments';
import { staticProperties, baseMethods, variables } from './defaults';
const { Component, PropTypes: Type } = React;
const valunit = /(\d+)(\w+)/;

function doubleUnit(str) {
  const [, val, unit] = str.match(valunit);
  return `${ val * 2 }${ unit }`;
}

const GridStyles = StyleSheet.create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: `0 -${ variables.gutter } ${ doubleUnit(variables.gutter) }`
  },
  top: {
    alignItems: flexAlignments.top
  },
  bottom: {
    alignItems: flexAlignments.bottom
  },
  center: {
    alignItems: flexAlignments.center
  }
}, process.env.NODE_ENV === 'production');

class Grid extends Component {
  render() {
    const {
      gutter,
      style,
      styles,
      align,
      flexCells,
      children,
      ...rest } = this.props;

    this.styles = [
      GridStyles.base,
      gutter ? { margin: `0 -${ gutter } ${ doubleUnit(gutter) }` } : null,
      align ? GridStyles[align] : null,
      style
    ].concat( Array.isArray(styles) ? styles : [styles] );

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
