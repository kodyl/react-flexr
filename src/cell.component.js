import React from 'react';
import assign from 'react/lib/Object.assign';
import flexAlignments from './flex-alignments';
const { PropTypes } = React;


class Cell extends React.Component {
  constructor(props) {
    super(props);
    const { size, gutter, flex, style, align } = props;
    const [ numer, denom ] = size ? size.split('/') : [];

    const styles = {
      flex: size ? `0 0 ${ ( 100 / denom ) * numer }%` : 1,
      padding: gutter ? gutter : '0 1em',
      display: flex ? 'flex' : null,
      alignSelf: align ? flexAlignments[align] : null
    };

    this.styles = style ?
      assign({}, styles, style) :
      styles;
  }

  render() {
    return (
      <div style={ this.styles }>
        { this.props.children }
      </div>
    );
  }
}

Cell.propTypes = {
  gutter: React.PropTypes.string,
  flex: React.PropTypes.bool,
  align: PropTypes.oneOf(['top', 'center', 'bottom']),
  size: (props, propName) => {
    if (props[propName] && props[propName].split('/').length !== 2) {
      return new Error('Size should be a fraction, e.g. 1/6');
    }
  }
};

export default Cell;
