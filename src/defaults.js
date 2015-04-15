import { PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import shouldComponentUpdate from 'react/lib/shouldUpdateReactComponent';
import { matchMedia } from './breakpoints';

const variables = {
  gutter: '11px'
};

export default {
  variables,
  breakpoints: matchMedia,

  staticProperties: {
    shouldComponentUpdate,
    propTypes: {
      gutter: Type.string,
      flexCells: Type.bool,
      align: Type.oneOf(['top', 'center', 'bottom'])
    }
  }
}
