import Grid from './grid.component';
import Cell from './cell.component';
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
