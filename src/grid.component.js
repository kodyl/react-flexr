import React from 'react/addons';
import assign from 'react/lib/Object.assign';
import Cell from './cell.component';
import flexAlignments from './flex-alignments';
const { Component, Children, PropTypes, addons } = React;


class Grid extends Component {
  constructor(props) {
    super(props);
    const { gutter, style, align } = props;

    const styles = {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: gutter ? gutter : '-1em 0 1em -1em',
      padding: 0,
      alignItems: align ? flexAlignments[align] : null
    };

    this.styles = style ?
      assign({}, styles, style) :
      styles;
  }

  render() {
    const props = this.props;
    const children = props.flexCells ?
      Children.map( props.children, child => {
        return child.type === Cell ? addons.cloneWithProps(child, { flex: true }) : child;
      }) :
      props.children;

    return (
      <div style={ this.styles }>
        { children }
      </div>
    );
  }
}

Grid.propTypes = {
  gutter: PropTypes.string,
  flexCells: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'center', 'bottom'])
};

export default Grid;
