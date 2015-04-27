import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import { matchMedia, settings } from './breakpoints';
const testEnv = process.env.NODE_ENV === 'test';

export default function findMatchingBreakpointProp(props, context) {
  if ( ( !canUseDOM || testEnv ) && context ) {
    for ( let breakpoint in settings ) {
      const { max, min } = settings[breakpoint];

      if ( min && max ? min < context && context < max : context < max || min < context ) {
        return props[breakpoint];
      }
    }
  }
  else {
    for ( let breakpoint in matchMedia ) {
      if ( matchMedia[breakpoint] && props[breakpoint] ) {
        return props[breakpoint];
      }
    }
  }
}
