import StyleSheet from 'react-style';
import React from 'react';
import assign from 'react/lib/Object.assign';
import flexAlignments from './flex-alignments';
import { staticProperties, baseMethods, breakpoints, variables } from './defaults';
const { PropTypes: Type } = React;

const CellStyles = StyleSheet.create({
  base: {
    flex: 1,
    padding: `0 ${ variables.gutter }`
  },
  flex: {
    display: 'flex'
  },
  top: {
    alignSelf: flexAlignments.top
  },
  bottom: {
    alignSelf: flexAlignments.bottom
  },
  center: {
    alignSelf: flexAlignments.center
  }
}, process.env.NODE_ENV === 'production');

function calcWidth(size) {
  const [ numerator, denominator ] = size ? size.split('/') : [];
  return { flex: `0 0 ${ ( 100 / denominator ) * numerator }%` };
}

function findResponsiveSize(breakpoints, props) {
  for ( let breakpoint of Object.keys( breakpoints ) ) {
    if ( breakpoints[breakpoint] && props[breakpoint] ) {
      return props[breakpoint];
    }
  }
}

class Cell extends React.Component {
  render() {
    const {
      size,
      gutter,
      flex,
      style,
      styles,
      align,
      grow,
      children,
      ...rest } = this.props;

    const growStyle =
      typeof grow === 'number' ? grow :
      grow === false ? 0 :
      undefined;

    const responsiveSize = findResponsiveSize(breakpoints, this.props);

    this.styles = [
      CellStyles.base,
      align ? CellStyles[align] : null,
      gutter ? { padding: `0 ${ gutter }` } : null,
      flex ? CellStyles.flex : null,
      responsiveSize && responsiveSize !== 'hidden' ? calcWidth( responsiveSize ) :
        size ? calcWidth(size) :
        growStyle !== undefined ? { flex: `${ growStyle } 1 auto` } : null,
      style
    ].concat( Array.isArray(styles) ? styles : [styles] );

    return responsiveSize === 'hidden' ?
      null : (
      <div { ...rest } styles={ this.styles }>
        { children }
      </div>
    );
  }
}


Cell.propTypes = {
  grow: Type.oneOf([false, true, Type.number]),
  gutter: Type.string,
  flex: Type.bool,
  align: Type.oneOf(['top', 'center', 'bottom']),
  size: (props, propName) => {
    if (props[propName] && props[propName].split('/').length !== 2) {
      return new Error('Size should be a fraction, e.g. 1/6');
    }
  }
};

assign(Cell.prototype, baseMethods);
assign(Cell, staticProperties);

export default Cell;
