import Grid from './grid.component';
import Cell from './cell.component';
import HydrateSSR from './hydrate-ssr.component';
import stylesheet from './stylesheet';
import {
  findBreakpoints,
  optimizedResize,
  getBreakpoints,
  setBreakpoints,
  clearBreakpoints,
  findMatch,
  mediaQueries
} from './utils';

const { palm, lap, portable, desk } = mediaQueries;

export {
  Grid,
  Cell,
  HydrateSSR,
  stylesheet,
  optimizedResize,
  findBreakpoints,
  findMatch,
  setBreakpoints,
  getBreakpoints,
  clearBreakpoints,
  palm,
  lap,
  portable,
  desk
};
