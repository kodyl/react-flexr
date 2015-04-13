import React from 'react';
import assign from 'react/lib/Object.assign';
import flexAlignments from './flex-alignments';
import StyleSheet from 'react-style';
import { staticProperties, baseMethods, media, variables } from './defaults';
const { PropTypes: Type } = React;

const styling = StyleSheet.create({
  cellBase: {
    flex: 1
  }
});

function calcWidth(size) {
  const [ numerator, denominator ] = size ? size.split('/') : [];
  return { flex: `0 0 ${ ( 100 / denominator ) * numerator }%` };
}

function findResponsiveSize(mediaQuerries, props) {
  for (let breakpoint of Object.keys( mediaQuerries )) {
    if (mediaQuerries[breakpoint] && props[breakpoint]) {
      return props[breakpoint];
    }
  }
}

class Cell extends React.Component {
  render() {
    const {
      size,
      gutter: propGutter,
      flex,
      style,
      align,
      grow,
      children,
      ...rest } = this.props;
    const gutter = propGutter || variables.gutter;
    const growStyle =
      typeof grow === 'number' ? grow :
      grow === false ? 0 :
      1;

    this.styles = [
      styling.cellBase,
      { padding: `0 ${ gutter }` }
    ];

    const responsiveSize = findResponsiveSize(media, this.props);
    if ( responsiveSize ) {
      this.styles.push( calcWidth( responsiveSize ) );
    }
    else if ( size ) {
      this.styles.push( calcWidth(size) );
    }
    else if (grow !== undefined) {
      this.styles.push({ flex: `${ growStyle } 1 auto` });
    }

    if ( flex ) {
      this.styles.push({ display: 'flex' });
    }

    if ( align ) {
      this.styles.push({ alignSelf: flexAlignments[align] });
    }

    if ( style ) {
      this.styles.push( style );
    }

    return (
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
