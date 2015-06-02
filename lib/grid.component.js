import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component, PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import cloneWithProps from 'react/lib/cloneWithProps';
import { vertical, horizontal } from './utils/flex-alignments';
import { variables } from './defaults';
import doubleUnit from './utils/double-unit';
import { findCurrentBreakpoints } from './utils';

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
  static propTypes = {
    gutter: Type.string,
    flexCells: Type.bool,
    align: Type.oneOf(['top', 'center', 'bottom'])
  }

  static contextTypes = {
    breakpoints: Type.arrayOf( Type.string )
  }

  static childContextTypes = {
    breakpoints: Type.arrayOf( Type.string )
  }

  getChildContext() {
    return {
      breakpoints: this.context.breakpoints
        || this.props.breakpoints
        || findCurrentBreakpoints()
        || []
    };
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


    // TODO: Find a better context solution when React 0.14 lands.
    const contextifiedChildren = React.Children.map(
      children, ( child ) => {
        return cloneWithProps( child, {
          flex: flexCells ? true : false,
          key: child.key,
          ref: child.ref
        });
      }
    );

    return (
      <div
        { ...rest }
        style={ this.styles }
        className={ classes }>
        { contextifiedChildren }
      </div>
    );
  }
}

export default Grid;
