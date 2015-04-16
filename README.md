# Flexr [![Build Status](https://travis-ci.org/chriskjaer/react-flexr.svg)](https://travis-ci.org/chriskjaer/react-flexr) [![npm version](https://badge.fury.io/js/react-flexr.svg)](http://badge.fury.io/js/react-flexr)

React Flexbox grid made simple.
Based on the [ "Solved-by-flexbox"-grid ]( http://philipwalton.github.io/solved-by-flexbox/demos/grids/ )

### Usage

Base example.
```javascript
import React from 'react';
import { Grid, Cell } from 'react-flexr';

class Example extends React.component {
  render() {
    return (
      <Grid>
        <Cell>1/3<Cell>
        <Cell>1/3<Cell>
        <Cell>1/3<Cell>
      </Grid>
    );
  }
}
```

Cell sizes can be controlled with fractions.
```javascript
import React from 'react';
import { Grid, Cell } from 'react-flexr';

class Example extends React.component {
  render() {
    return (
      <Grid>
        <Cell size='6/12'>
          Fills Half
        <Cell>

        <Cell>
          Fills Rest.. (Yay for Flexbox)
        </Cell>

        <Cell size='3/12'>
          Fills a quarter
        <Cell>

        <Cell palm='3/12' lap='1/2'>
          Fills on mobile, half on lap and dynamic size everywhere else.
        <Cell>

        <Cell palm='hidden' size='1/2'>
          Hidden on palm, half width otherwise
        <Cell>
      </Grid>
    );
  }
}
```

See the example folder for the full implementation of the flexbox grid.

## Responsive Props
The responsive props are based on [ergonomics](https://twitter.com/lukew/status/273453112902172672).

I've used these breakpoints in a variety of [apps](https://github.com/chriskjaer/prototype-seed) and [ grids ](https://github.com/chriskjaer/prototype-seed/blob/master/source/assets/styles/utilities/_grid.scss) with success. So far
the following breakpoints have beeen implemented:
- Palm
- Lap
- Portable
- Desk

See [breakpoints file](https://github.com/chriskjaer/react-flexr/blob/master/src/breakpoints.js) for sizes.


# Production
This is still very experimental. If you decide to run this in production. Use it
in combination with [react-style-webpack-plugin](https://github.com/boligbesked/react-style-webpack-plugin) to extract the css.

## TODO:
- [x] Add Responsive capabilities
- [ ] Find a decent way to test responsive grid props.
- [ ] Add flex order
