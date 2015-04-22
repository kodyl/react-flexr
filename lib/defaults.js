import { PropTypes as Type } from 'react';
import { matchMedia } from './utils/breakpoints';

const variables = {
  gutter: '11px'
};

export default {
  variables,
  breakpoints: matchMedia,

  staticProperties: {
    propTypes: {
      gutter: Type.string,
      flexCells: Type.bool,
      align: Type.oneOf(['top', 'center', 'bottom'])
    }
  }
};
