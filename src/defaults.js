import { PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import shouldComponentUpdate from 'react/lib/shouldUpdateReactComponent';
import breakpoints from './breakpoints';

const variables = {
  gutter: '1em'
};

export default {
  variables,
  breakpoints,

  staticProperties: {
    shouldComponentUpdate,
    propTypes: {
      gutter: Type.string,
      flexCells: Type.bool,
      align: Type.oneOf(['top', 'center', 'bottom'])
    }
  }
}
