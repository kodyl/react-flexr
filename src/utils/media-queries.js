const canUseDOM = (
  () => ( typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement &&
          window.matchMedia )
)();

function generateMediaString(props) {
  const { min, max } = props;
  const minStr = min ? `(min-width: ${ min }px)` : null;
  const maxStr = max ? `(max-width: ${ max }px)` : null;

  let str =
    minStr && maxStr ? `${ minStr } and ${ maxStr }` :
    minStr ? minStr : maxStr;

  return str;
}

function match(props) {
  if (!canUseDOM) { return false; }
  let matchMe = props.query ? props.query : generateMediaString(props);

  return window.matchMedia(matchMe).matches;
}

export default {
  generateMediaString, match
}
