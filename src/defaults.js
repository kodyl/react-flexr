import { PropTypes as Type } from 'react';
import assign from 'react/lib/Object.assign';
import shouldComponentUpdate from 'react/lib/shouldUpdateReactComponent';

const canUseDOM = (
  () => ( typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement &&
          window.matchMedia )
)();

function match(props) {
  if (!canUseDOM) { return false; }
  const { min, max } = props;
  let minStr = min ? `(min-width: ${ min }px)` : null;
  let maxStr = max ? `(max-width: ${ max }px)` : null;

  let str =
    minStr && maxStr ? `${ minStr } and ${ maxStr }` :
    minStr ? minStr : maxStr;

  return window.matchMedia(str).matches;
}

const variables = {
  gutter: '1em'
};

export default {
  variables,

  media: {
    palm: match({max: 680}),
    lap: match({min: 681, max: 959}),
    portable: match({max: 959}),
    desk: match({min: 960})
  },

  staticProperties: {
    shouldComponentUpdate,
    propTypes: {
      gutter: Type.string,
      flexCells: Type.bool,
      align: Type.oneOf(['top', 'center', 'bottom'])
    }
  }
}
