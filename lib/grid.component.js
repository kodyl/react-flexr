import stylesheet from './stylesheet';
import StyleSheet from 'stilr';
import React, { Component, PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import { vertical, horizontal } from './utils/flex-alignments';
import { variables } from './defaults';
import doubleUnit from './utils/double-unit';
import { findBreakpoints, isDifferent, getBreakpoints } from './utils';

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
    this.state = {
      breakpoints: findBreakpoints() || getBreakpoints()
    };
  }

  static propTypes = {
    gutter: Type.string,
    flexCells: Type.bool,
    align: Type.oneOf(['top', 'center', 'bottom'])
  }

  componentWillReceiveProps() {
    if ( isDifferent(this.state.breakpoints) ) {
      const breakpoints = getBreakpoints();
      this.setState({
        breakpoints
      });
    }
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
        if (!child) return child;

        return React.cloneElement( child, {
          flex: flexCells ? true : false,
          breakpoints: this.state.breakpoints
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
