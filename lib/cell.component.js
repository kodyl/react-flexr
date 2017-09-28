import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findMatch, settings, vertical, variables, assign } from './utils';

const ERGONOMICS = Object.keys(settings);

const cellStyles = StyleSheet.create(
  {
    base: {
      padding: `0 ${variables.gutter}`
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
  },
  stylesheet
);

export default class Cell extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    grow: PropTypes.oneOf([false, true, PropTypes.number]),
    gutter: PropTypes.string,
    flex: PropTypes.bool,
    align: PropTypes.oneOf(['top', 'center', 'bottom']),
    size: (props, propName) => {
      const value = props[propName];
      if (
        value &&
        !(
          typeof value === 'number' ||
          (typeof value === 'string' && /^[0-9]+\/[0-9]+$/.test(value))
        )
      ) {
        return new Error(
          'Size should be a fraction (e.g. 1/6) or a number for fixed size'
        );
      }
    }
  };

  calcWidth(size) {
    if (typeof size === 'number') {
      return {
        width: size < 1 ? `${Math.round(size * 10000) / 100}%` : `${size}px`
      };
    }

    const [numerator, denominator] = size ? size.split('/') : [];
    return {
      width: `${100 / denominator * numerator}%`
    };
  }

  handleFlexSize = breakpoint => {
    const { grow, size } = this.props;
    const growStyle =
      typeof grow === 'number' ? grow : grow === false ? 0 : undefined;

    return breakpoint && breakpoint !== 'hidden'
      ? this.calcWidth(breakpoint)
      : size
        ? this.calcWidth(size)
        : growStyle !== undefined
          ? {
              flex: `${growStyle} 1 auto`,
              WebkitFlex: `${growStyle} 1 auto`,
              msFlex: `${growStyle} 1 auto`
            }
          : null;
  };

  getDefinedBreakpoints = () => {
    let breakpoints = [];

    for (let i = 0, len = ERGONOMICS.length; i < len; i++) {
      if (this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
    }

    return breakpoints;
  };

  getMatchingBreakpoint = () => {
    return this.props[findMatch.apply(null, this.getDefinedBreakpoints())];
  };

  render() {
    const {
      gutter,
      flex,
      className,
      align,
      style,
      children,
      size, // eslint-disable-line no-unused-vars
      palm, // eslint-disable-line no-unused-vars
      lap, // eslint-disable-line no-unused-vars
      portable, // eslint-disable-line no-unused-vars
      desk, // eslint-disable-line no-unused-vars
      grow, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const breakpoint = this.getMatchingBreakpoint();

    // Return early for performance
    if (breakpoint === 'hidden') {
      return null;
    }

    const flexSize = this.handleFlexSize(breakpoint);

    this.styles = assign(
      {},
      gutter ? { padding: `0 ${gutter}` } : null,
      flexSize,
      style
    );

    const classes = [
      cellStyles.base,
      flexSize ? null : cellStyles.baseFlex,
      className,
      flex ? cellStyles.flex : null,
      align ? cellStyles[align] : null
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div {...rest} style={this.styles} className={classes}>
        {children}
      </div>
    );
  }
}
