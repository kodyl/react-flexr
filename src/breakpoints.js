import { match } from './utils/media-queries';

export default {
  palm: match({ max: 680 }),
  lap: match({ max: 959, min: 681 }),
  portable: match({ max: 959 }),
  desk: match({ min: 960 })
}
