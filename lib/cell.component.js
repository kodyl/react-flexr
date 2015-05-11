import StyleSheet from 'react-style';
import React, { PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import { vertical } from './utils/flex-alignments';
import findMatchingBreakpointProp from './utils/find-matching-breakpoint-prop';
import { baseMethods, variables } from './defaults';

const CellStyles = StyleSheet.create({
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
}, process.env.NODE_ENV === 'production');

class Cell extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    width: Type.number
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

    const currentBreakpointProp = findMatchingBreakpointProp(this.props, this.context.width);

    this.styles = [
      CellStyles.base,
      align ? CellStyles[align] : null,
      gutter ? { padding: `0 ${ gutter }` } : null,
      flex ? CellStyles.flex : null,
      currentBreakpointProp && currentBreakpointProp !== 'hidden' ? this.calcWidth( currentBreakpointProp ) :
        size ? this.calcWidth(size) :
        growStyle !== undefined ? {
          flex: `${ growStyle } 1 auto`,
          WebkitFlex: `${ growStyle } 1 auto`,
          msFlex: `${ growStyle } 1 auto`
      } : CellStyles.baseFlex,
      style
    ].concat( Array.isArray(styles) ? styles : [styles] );

    return currentBreakpointProp === 'hidden' ?
      null : (
      <div { ...rest } styles={ this.styles }>
        { children }
      </div>
    );
  }
}

assign(Cell.prototype, baseMethods);

export default Cell;
