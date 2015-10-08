import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { PropTypes as Type } from 'react';
import { findMatch, settings, vertical, variables, assign } from './utils';

const ERGONOMICS = Object.keys( settings );

const cellStyles = StyleSheet.create({
  base: {
    padding: `0 ${ variables.gutter }`
  },
  baseFlex: {
    flex: 1
  },
  flex: {
    display: 'flex'
  },
  top: {
    alignSelf: vertical.top
  },
  bottom: {
    alignSelf: vertical.bottom
  },
  center: {
    alignSelf: vertical.center
  }
}, stylesheet);

class Cell extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    grow: Type.oneOf([false, true, Type.number]),
    gutter: Type.string,
    flex: Type.bool,
    align: Type.oneOf(['top', 'center', 'bottom']),
    size: (props, propName) => {
      if (props[propName] && props[propName].split('/').length !== 2) {
        return new Error('Size should be a fraction, e.g. 1/6');
      }
    }
  }

  calcWidth(size) {
    const [ numerator, denominator ] = size ? size.split('/') : [];
    const calcSize = `${ ( 100 / denominator ) * numerator }%`;
    return {
      width: calcSize
    };
  }

  handleFlexSize = (breakpoint ) => {
    const { grow, size } = this.props;
    const growStyle = typeof grow === 'number'
      ? grow
      : grow === false
        ? 0
        : undefined;

    return breakpoint && breakpoint !== 'hidden'
      ? this.calcWidth( breakpoint )
      : size
        ? this.calcWidth(size)
        : growStyle !== undefined
          ? { flex: `${ growStyle } 1 auto`,
              WebkitFlex: `${ growStyle } 1 auto`,
              msFlex: `${ growStyle } 1 auto` }
          : null;
  }

  getDefinedBreakpoints = () => {
    let breakpoints = [];

    for (let i = 0, len = ERGONOMICS.length; i < len; i++) {
      if ( this.props[ERGONOMICS[i]] ) breakpoints.push(ERGONOMICS[i]);
    }

    return breakpoints;
  }

  getMatchingBreakpoint = () => {
    return this.props[
      findMatch.apply(
        null,
        this.getDefinedBreakpoints()
      )
    ];
  }

  render() {
    const {
      gutter,
      flex,
      className,
      align,
      style,
      children,
      ...rest
    } = this.props;

    const breakpoint = this.getMatchingBreakpoint();
    const flexSize = this.handleFlexSize(breakpoint);

    this.styles = assign( {},
      gutter
        ? { padding: `0 ${ gutter }` }
        : null,
      flexSize,
      style );

    const classes = [
      cellStyles.base,
      flexSize
        ? null
        : cellStyles.baseFlex,
      className,
      flex
        ? cellStyles.flex : null,
      align
        ? cellStyles[align]
        : null
    ].filter(Boolean).join(' ');

    return breakpoint === 'hidden'
      ? null
      : <div
          { ...rest }
          style={ this.styles }
          className={ classes }>
          { children }
        </div>;
  }
}

export default Cell;
