import React from 'react';
import Demo from './demo.component';
import { Grid, Cell } from '../lib';

class Nested extends React.Component {
  render() {
    const foo = [1, 2, 3, 4, 5];

    return (
      <div>
        Nested stuff
        <hr />

        { foo.map( (num) => (
          <Grid key={ num }>
            <Cell palm='1/2' desk='10/12'>
              <Demo>1/2</Demo>
            </Cell>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Nested;
