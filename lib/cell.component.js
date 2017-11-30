import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  matchBreakpoints,
  settings,
  vertical,
  variables,
  assign,
  getBreakpoints,
  getInitialBreakpoints,
  handleFlexSize
} from './utils';

const ERGONOMICS = Object.keys(settings);

const cellStyles = StyleSheet.create(
  {
    base: {
      padding: `0 ${variables.gutter}`
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

  state = {
    breakpoints: getInitialBreakpoints()
  };

  componentDidMount() {
    if (this.state.breakpoints) {
      const breakpoints = getBreakpoints(true);
      if (breakpoints !== this.state.breakpoints) {
        const definedBreakpoints = this.getDefinedBreakpoints();
        if (definedBreakpoints.length) {
          this.setState({ breakpoints });
        }
      }
    }
  }

  handleFlexSize = breakpoint => {
    const { grow, size } = this.props;
    return handleFlexSize({ breakpoint, grow, size });
  };

  getDefinedBreakpoints = () => {
    let breakpoints = [];

    for (let i = 0, len = ERGONOMICS.length; i < len; i++) {
      if (this.props[ERGONOMICS[i]]) breakpoints.push(ERGONOMICS[i]);
    }

    return breakpoints;
  };

  getMatchingBreakpoint = () => {
    const breakpoints = (this.state.breakpoints || '').split(',');
    const breakpoint = matchBreakpoints(
      breakpoints,
      this.getDefinedBreakpoints()
    );
    return this.props[breakpoint];
  };

  render() {
    const breakpoint = this.getMatchingBreakpoint();

    if (breakpoint === 'hidden') {
      return null;
    }

    const flexSize = this.handleFlexSize(breakpoint);

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

    this.styles = assign(
      {},
      gutter ? { padding: `0 ${gutter}` } : null,
      flexSize,
      style
    );

    const classes = [
      cellStyles.base,
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
