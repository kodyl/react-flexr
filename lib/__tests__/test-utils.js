import TestUtils from 'react-dom/test-utils';
import { assign } from '../utils';

export function sanitizeStyles(arr) {
  return assign.apply(null, [{}].concat(arr));
}

export function extractStyles(component) {
  const { styles } = TestUtils.renderIntoDocument(component);
  return sanitizeStyles(styles);
}
