import { generateMediaString, match } from './media-queries';

const settings = {
  palm: { max: 600 },
  lap: { max: 959, min: 601 },
  portable: { max: 959 },
  desk: { min: 960 }
};

export default {
  matchMedia: {
    palm: match( settings.palm ),
    lap: match( settings.lap ),
    portable: match( settings.portable ),
    desk: match( settings.desk )
  },
  queries: {
    palm: generateMediaString( settings.palm ),
    lap: generateMediaString( settings.lap ),
    portable: generateMediaString( settings.portable ),
    desk: generateMediaString( settings.desk )
  },
  settings
};
