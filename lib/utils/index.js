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

export function findCurrentBreakpoints() {
  if (!canUseDOM) return [];

  return Object.keys(matchMediaQueries).filter(
    breakpoint => window.matchMedia( matchMediaQueries[breakpoint] ).matches
  );
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

export function matchingBreakpoint(props, breakpoints) {
  let breakpoint = false;
  if (!breakpoints || breakpoints.length === 0) return breakpoint;

  const keys = Object.keys(props);

  for (let i = 0, len = breakpoints.length; i < len; i++) {
    if (keys.indexOf(breakpoints[i]) !== -1) {
      breakpoint = props[ breakpoints[i] ];
      break;
    }
  }

  return breakpoint;
}
