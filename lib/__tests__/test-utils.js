import TestUtils from 'react-addons-test-utils';
import { assign } from '../utils';

function sanitizeStyles(arr) {
  return assign.apply(null, [{}].concat( arr ) );
}

function extractStyles(component) {
  const { styles } = TestUtils.renderIntoDocument( component );
  return sanitizeStyles(styles);
}

export default {
  sanitizeStyles, extractStyles
};
