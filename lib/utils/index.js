export const canUseDOM = (() => (
  typeof window !== 'undefined'
    && window.document
    && window.document.createElement
    && window.matchMedia
))();

export const settings = {
  palm: { max: 600 },
  lap: { max: 959, min: 601 },
  portable: { max: 959 },
  desk: { min: 960 }
};

export function generateMatchMediaString({ min, max }) {
  const minStr = min
    ? `(min-width: ${ min }px)`
    : null;
  const maxStr = max
    ? `(max-width: ${ max }px)`
    : null;

  let str = minStr && maxStr
    ? `${ minStr } and ${ maxStr }`
    : minStr || maxStr;

  return str;
}

export const matchMediaQueries = Object.keys(settings).reduce((acc, breakpoint) => {
  acc[breakpoint] = generateMatchMediaString( settings[breakpoint] );
  return acc;
}, {});


let breakpoints = [];
let breakpointsString = '';


export function setBreakpoints(arr) {
  breakpoints = arr;
  breakpointsString = breakpoints.toString();
  return breakpoints;
}

export function getBreakpoints(asString) {
  return asString
    ? breakpointsString
    : [].concat( breakpoints );
}

export function clearBreakpoints() {
  breakpoints = [];
  return breakpoints;
}

export function isDifferent(arr) {
  return arr.toString() !== breakpointsString;
}

export function findBreakpoints() {
  if (!canUseDOM) return getBreakpoints();

  const newBreakpoints = Object.keys(matchMediaQueries).filter(
    breakpoint => window.matchMedia( matchMediaQueries[breakpoint] ).matches
  );

  return isDifferent( newBreakpoints )
    ? setBreakpoints( newBreakpoints )
    : false;
}

export const optimizedResize = (function() {
  let callbacks = [];
  let running = false;

  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  function runCallbacks() {
    callbacks.forEach( (callback) => callback() );
    running = false;
  }

  function addCallback(callback) {
    if (callback) callbacks.push(callback);
  }

  return {
    init(callback) {
      window.addEventListener('resize', resize);
      addCallback(callback);
    },
    add(callback) {
      addCallback(callback);
    }
  };
}());

export function findMatch(...arr) {
  let breakpoint = false;
  if (!arr || arr.length === 0) return breakpoint;
  if (breakpoints.length === 0) findBreakpoints();

  for (let i = 0, len = arr.length; i < len; i++) {
    if (breakpoints.indexOf(arr[i]) !== -1) {
      breakpoint = arr[i];
      break;
    }
  }

  return breakpoint;
}
