# Flexr

React Flexbox Grid made simple. Based on the [ "Solved-by-flexbox"-grid ]( http://philipwalton.github.io/solved-by-flexbox/demos/grids/ )

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
      </Grid>
    );
  }
}
```

See the example folder for the full implementation of the flexbox grid.


## TODO:
- [ ] Add Responsive capabilities
