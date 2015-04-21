export default function findMatchingBreakpointProp(breakpoints, props) {
  for ( let breakpoint of Object.keys( breakpoints ) ) {
    if ( breakpoints[breakpoint] && props[breakpoint] ) {
      return props[breakpoint];
    }
  }
}
