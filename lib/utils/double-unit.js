const valunit = /(\d+)(\w+)/;

export default function doubleUnit(str) {
  const [, val, unit] = str.match(valunit);
  return `${ val * 2 }${ unit }`;
}
