import StyleSheet from 'stilr';
import React, { Component, PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import cloneWithProps from 'react/lib/cloneWithProps';
import Cell from './cell.component';
import { vertical, horizontal } from './utils/flex-alignments';
import { baseMethods, variables } from './defaults';
import doubleUnit from './utils/double-unit';
import stylesheet from './stylesheet';

const gridStyles = StyleSheet.create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: `0 -${ variables.gutter } ${ doubleUnit(variables.gutter) }`
  }
}, stylesheet);

const HorizontalStyles = StyleSheet.create({
  left: { justifyContent: horizontal.left },
  center: { justifyContent: horizontal.center },
  right: { justifyContent: horizontal.right }
});

const VerticalStyles = StyleSheet.create({
  top: { alignItems: vertical.top },
  center: { alignItems: vertical.center },
  bottom: { alignItems: vertical.bottom }
});

class Grid extends Component {
  static propTypes = {
    gutter: Type.string,
    flexCells: Type.bool,
    align: Type.oneOf(['top', 'center', 'bottom'])
  }

  render() {
    const {
      gutter,
      style,
      align,
      hAlign,
      flexCells,
      children,
      className,
      ...rest } = this.props;

    this.styles = assign(
      {},
      style,
      gutter
        ? { margin: `0 -${ gutter } ${ doubleUnit(gutter) }` }
        : null
    );

    const classes = [
      gridStyles.base,
      className,
      align
        ? VerticalStyles[align]
        : null,
      hAlign
        ? HorizontalStyles[hAlign]
        : null
    ].filter(Boolean).join(' ');

    const wrapppedChildren = flexCells
      ? React.Children.map( children, ( child ) => child.type === Cell
        ? cloneWithProps( child, { flex: true })
        : cloneWithProps( child ) )
      : children;

    return (
      <div
        { ...rest }
        style={ this.styles }
        className={ classes }>
        { wrapppedChildren }
      </div>
    );
  }
}

assign(Grid.prototype, baseMethods);

export default Grid;
