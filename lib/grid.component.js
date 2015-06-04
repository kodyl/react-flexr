import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component, PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import { findBreakpoints, doubleUnit, vertical, horizontal, variables } from './utils';

const styles = StyleSheet.create({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: `0 -${ variables.gutter } ${ doubleUnit(variables.gutter) }`
  },
  leftHorizontal: {
    justifyContent: horizontal.left
  },
  centerHorizontal: {
    justifyContent: horizontal.center
  },
  rightHorizontal: {
    justifyContent: horizontal.right
  },
  topVertical: {
    alignItems: vertical.top
  },
  centerVertical: {
    alignItems: vertical.center
  },
  bottomVertical: {
    alignItems: vertical.bottom
  }
}, stylesheet);


class Grid extends Component {
  constructor(props) {
    super(props);
    findBreakpoints();
  }

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
      styles.base,
      className,
      align
        ? styles[align + 'Vertical']
        : null,
      hAlign
        ? styles[hAlign + 'Horizontal']
        : null
    ].filter(Boolean).join(' ');

    let parentProps = {};
    if (gutter) parentProps.gutter = gutter;
    if (flexCells) parentProps.flex = true;

    const wrappedChildren = Object.keys( parentProps ).length
      ? React.Children.map(
        children, ( child ) => {
          if (!child) return child;
          return React.cloneElement( child, { ...parentProps });
        })
      : children;

    return (
      <div
        { ...rest }
        style={ this.styles }
        className={ classes }>
        { wrappedChildren }
      </div>
    );
  }
}

export default Grid;
