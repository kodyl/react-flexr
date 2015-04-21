import { PropTypes as Type } from 'react';
import shouldComponentUpdate from 'react/lib/shouldUpdateReactComponent';
import { matchMedia } from './utils/breakpoints';

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
};
