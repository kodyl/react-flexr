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

# Component API:
### Grid
```
<Grid
  align={ string }    // Vertical Align Sub Cells: top, center, bottom
  hAlign={ string }   // Horizontal Align Sub Cells: left, center, right
  gutter={ string }   // Override default gutter: '1em', '5%', '10px', etc.
  flexCells={ bool }  // All sub cells will be full height
/>
```
### Cell
```
<Cell
  align={ string }    // Vertical Align This Cell: top, center, bottom
  gutter={ string }   // Override default gutter: '1em', '5%', '10px', etc.
  flex={ bool }       // Like flexCells above, but for a single cell.
  size={ string }     // Takes a fraction. e.g. 1/6
  palm={ string }     // Like size, but only applies for palm devices.*
  lap={ string }      // Like size, but only applies for lap devices.*
  portable={ string } // Like size, but only applies for ( palm + lap )
  devices.*
  desk={ string }     // Like size, but only applies for desk devices.*
/>
```
__* Ergonomic breakpoints accepts 'hidden' as well. This will prevent the
component from being rendered in that state.__

See the example folder for more examples.

## Responsive Props
The responsive props are based on [ergonomics](https://twitter.com/lukew/status/273453112902172672).

I've used these breakpoints in a variety of [apps](https://github.com/chriskjaer/prototype-seed) and [ grids ](https://github.com/chriskjaer/prototype-seed/blob/master/source/assets/styles/utilities/_grid.scss) with success. So far
the following breakpoints have beeen implemented:
- Palm
- Lap
- Portable
- Desk

See [breakpoints file](https://github.com/chriskjaer/react-flexr/blob/master/src/breakpoints.js) for sizes.

# Context Rendering
It's posible to render the grid in a specific size context. This is usefull for
serverside rendering where you want to prerender the app for a mobile/tablet
user.

#### Usage:
Wrap your app and set a context;

```
class Wrapper extends React.Component {
  static childContextTypes = {
    width: React.PropTypes.number
  }

  getChildContext() {
    return {
      width: this.props.size
    };
  }

  render() {
    return <App />
  }
}

React.renderToString( <Wrapper size={ 320 } />);
```

This should render all your Cells in a palm state.

Note that this is only enabled in non DOM execution environments. So it's only usefull on
the server.

# Production
This is still very experimental. If you decide to run this in production. Use it
in combination with [react-style-webpack-plugin](https://github.com/boligbesked/react-style-webpack-plugin) to extract the css.

## TODO:
- [x] Add Responsive capabilities
- [x] Find a decent way to test responsive grid props.
- [ ] Add flex order
