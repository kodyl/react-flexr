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
  let str = `(min-width: ${ min }px)`;
  str += max ? ` and (max-width: ${ max }px)` : '';
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
    contextTypes: {
      gutter: Type.string
    },

    childContextTypes: {
      gutter: Type.string
    },

    propTypes: {
      gutter: Type.string,
      flexCells: Type.bool,
      align: Type.oneOf(['top', 'center', 'bottom'])
    }
  },

  baseMethods: {
    getChildContext() {
      const contextDefaults = {
        gutter: this.props.gutter || this.context.gutter || variables.gutter
      };
      return assign( this.context, contextDefaults );
    }
  }
}
