import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import { matchMedia, settings } from './breakpoints';

export default function findMatchingBreakpointProp(props, context) {
  if ( !canUseDOM && context ) {
    for ( let breakpoint in settings ) {
      const { max, min } = settings[breakpoint];

      if ( context < max || min < context || min < context < max ) {
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
