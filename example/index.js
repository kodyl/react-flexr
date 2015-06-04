import { Grid, Cell, stylesheet, findMatch, findBreakpoints, optimizedResize, palm, desk, lap, portable } from '../lib';
import Demo from './demo.component';
import React from 'react';
import StyleSheet from 'stilr';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedAt: 0
    };
  }

  componentWillMount() {
    let styles = document.createElement('style');
    styles.textContent = StyleSheet.render({}, stylesheet);
    document.head.appendChild(styles);
  }

  componentDidMount() {
    optimizedResize.init( () => {
      if ( findBreakpoints() ) {
        console.log('New Breakpoints');
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
      <div style={ this.styles }>
        <h3>Basic Grids</h3>
        <p>The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They're also equal height by default.</p>
        <Grid>
          <Cell><Demo>1/2</Demo></Cell>
          <Cell><Demo>1/2</Demo></Cell>
        </Grid>
        <Grid>
          <Cell><Demo>1/3</Demo></Cell>
          <Cell><Demo>1/3</Demo></Cell>
          <Cell><Demo>1/3</Demo></Cell>
        </Grid>
        <Grid>
          <Cell><Demo>1/4</Demo></Cell>
          <Cell><Demo>1/4</Demo></Cell>
          <Cell><Demo>1/4</Demo></Cell>
          <Cell><Demo>1/4</Demo></Cell>
        </Grid>
        <Grid flexCells >
          <Cell><Demo>Full-height, even when my content doesnt fill the space.</Demo></Cell>
          <Cell><Demo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.</Demo></Cell>
        </Grid>

        <h3>Individual Sizing</h3>
        <p>When equal widths aren't what you want, you can add sizing classes to individual cells. Cells without sizing classes simply divide up the remaining space as normal.</p>
        <p>The cells below labeled "auto" do not have sizing classes specified.</p>

        <Grid>
          <Cell size='1/2'>
            <Demo>1/2</Demo>
          </Cell>
          <Cell><Demo>auto</Demo></Cell>
          <Cell><Demo>auto</Demo></Cell>
        </Grid>
        <Grid>
          <Cell><Demo>auto</Demo></Cell>
          <Cell size='1/3'><Demo>1/3</Demo></Cell>
        </Grid>
        <Grid>
          <Cell size='1/4'><Demo>1/4</Demo></Cell>
          <Cell><Demo>auto</Demo></Cell>
          <Cell size='1/3'><Demo>1/3</Demo></Cell>
        </Grid>

        <h3>Responsive</h3>
        <p>Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly.</p>
        <p>The cells below should be full width by default and scaled to fit above 48em. Resize your browser to see them in action.</p>

        <Grid>
          <Cell desk='8/12'>
            <Demo>Desk(8/12)</Demo>
          </Cell>
          <Cell lap='9/12'>
            <Demo>Lap(9/12)</Demo>
          </Cell>
          <Cell portable='2/12'>
            <Demo>Portable(2/12)</Demo>
          </Cell>
          <Cell desk='2/12' lap='hidden'>
            <Demo>Hidden on lap</Demo>
          </Cell>
        </Grid>

        <h2>Alignment Features</h2>
        <h3>Top-aligned Grid Cells</h3>

        <Grid align='top'>
          <Cell>
            <Demo>
              This cell should be top-aligned.
            </Demo>
          </Cell>
          <Cell size='1/2'>
            <Demo>
              Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh.
            </Demo>
          </Cell>
          <Cell>
            <Demo>
              This cell should be top-aligned.
            </Demo>
          </Cell>
        </Grid>

        <h3>Bottom-aligned Grid Cells</h3>

        <Grid align='bottom'>
          <Cell>
            <Demo>
              This cell should be bottom-aligned.
            </Demo>
          </Cell>
          <Cell>
            <Demo>
              Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in.
            </Demo>
          </Cell>
          <Cell>
            <Demo>
              This cell should be bottom-aligned.
            </Demo>
          </Cell>
        </Grid>

        <h3>Vertically Centered Grid Cells</h3>

        <Grid align='center'>
          <Cell>
            <Demo>
              This cell should be vertically-centered with the cell to its right.
            </Demo>
          </Cell>
          <Cell>
            <Demo>
              Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.
            </Demo>
          </Cell>
        </Grid>

        <h3>Vertically And Horizontally Centered Grid Cells</h3>

        <Grid align='center' hAlign='center'>
          <Cell size='4/12'>
            <Demo>
              This cell should be vertically-centered with the cell to its right.
            </Demo>
          </Cell>
          <Cell size='4/12'>
            <Demo>
              Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.
            </Demo>
          </Cell>
        </Grid>

        <h3>Mixed Vertical Alignment</h3>

        <Grid>
          <Cell align='top'>
            <Demo>
              This cell should be top aligned.
            </Demo>
          </Cell>
          <Cell>
            <Demo>
              Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus.</Demo>
          </Cell>
          <Cell align='center'>
            <Demo>
              This cell should be center-aligned.
            </Demo>
          </Cell>
          <Cell align='bottom'>
            <Demo>
              This cell should be bottom-aligned.
            </Demo>
          </Cell>
        </Grid>

        <h1>Using 'findMatch' helper</h1>

        <p>Only visible in palm:</p>
        { findMatch('palm')
          ? <strong>Palm</strong>
          : null }

        <p>Only visible in desk and lap:</p>
        { findMatch('desk', 'lap')
          ? <strong>Desk or Lap</strong>
          : null }
      </div>
    );
  }
}


React.render(<Example />, document.getElementById('root'));
