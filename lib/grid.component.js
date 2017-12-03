import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { doubleUnit, vertical, horizontal, variables, assign } from './utils';

const styles = StyleSheet.create(
  {
    base: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: 0,
      margin: `0 -${variables.gutter} ${doubleUnit(variables.gutter)}`
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
  },
  stylesheet
);

export default class Grid extends Component {
  static propTypes = {
    gutter: PropTypes.string,
    flexCells: PropTypes.bool,
    align: PropTypes.oneOf(['top', 'center', 'bottom'])
  };

  render() {
    const {
      gutter,
      style,
      align,
      hAlign,
      flexCells,
      children,
      className,
      ...rest
    } = this.props;

    this.styles = assign(
      {},
      style,
      gutter ? { margin: `0 -${gutter} ${doubleUnit(gutter)}` } : null
    );

    const classes = [
      styles.base,
      className,
      align ? styles[align + 'Vertical'] : null,
      hAlign ? styles[hAlign + 'Horizontal'] : null
    ]
      .filter(Boolean)
      .join(' ');

    let parentProps = {};
    if (gutter) parentProps.gutter = gutter;
    if (flexCells) parentProps.flex = true;

    const wrappedChildren = Object.keys(parentProps).length
      ? React.Children.map(
          children,
          child =>
            child ? React.cloneElement(child, { ...parentProps }) : child
        )
      : children;

    return (
      <div {...rest} style={this.styles} className={classes}>
        {wrappedChildren}
      </div>
    );
  }
}
