import assert from 'assert';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { Cell, Grid, setBreakpoints, clearBreakpoints } from '../';
import { sanitizeStyles, extractStyles } from './test-utils';

describe('CellComponent', () => {
  it('can have fraction based sizes', () => {
    ['1/2', '2/5', '1/12', '20/100'].map(fraction => {
      const [numer, denom] = fraction.split('/');
      const styles = extractStyles(<Cell size={fraction} />);
      assert.equal(styles.width, `${100 / denom * numer}%`);
    });
  });

  it('can have fixed sizes', () => {
    [1, 10, 40, 50, 300].map(size => {
      const styles = extractStyles(<Cell size={size} />);
      assert.equal(styles.width, `${size}px`);
    });
  });

  it('can have percentage based sized, using a Number between 0 and 1 (not inclusive)', () => {
    [0.01, 0.2, 0.33, 0.5, 0.75, 0.95, 0.99].map(size => {
      const styles = extractStyles(<Cell size={size} />);
      assert.equal(styles.width, `${size * 100}%`);
    });
  });

  it('accepts grow params', () => {
    const styles = extractStyles(<Cell grow={false} />);
    assert.equal(styles.flex, '0 1 auto');
  });

  describe('Responsive Props', () => {
    beforeEach(() => {
      clearBreakpoints();
    });

    function getStyles(breakpoints, component) {
      setBreakpoints(breakpoints);
      const tree = TestUtils.renderIntoDocument(component);
      const node = TestUtils.findRenderedComponentWithType(tree, Cell);
      return sanitizeStyles(node.styles);
    }

    describe('can have fraction based sizes', () => {
      const component = (
        <Grid>
          <Cell size="10/12" desk="1/4" lap="1/2" portable="1/6" palm="1/8" />
        </Grid>
      );

      it('fallback to size', () => {
        const styles = getStyles([], component);
        assert.equal(parseInt(styles.width), parseInt(10 / 12 * 100));
      });

      it('accepts desk parameter', () => {
        const styles = getStyles(['desk'], component);
        assert.equal(parseInt(styles.width), parseInt(1 / 4 * 100));
      });

      it('accepts lap parameter', () => {
        const styles = getStyles(['lap'], component);
        assert.equal(parseInt(styles.width), parseInt(1 / 2 * 100));
      });

      it('accepts portable parameter', () => {
        const styles = getStyles(['portable'], component);
        assert.equal(parseInt(styles.width), parseInt(1 / 6 * 100));
      });

      it('accepts palm parameter', () => {
        const styles = getStyles(['palm'], component);
        assert.equal(parseInt(styles.width), parseInt(1 / 8 * 100));
      });
    });

    describe('can have fixed sizes', () => {
      const component = (
        <Grid>
          <Cell size={500} desk={400} lap={300} portable={250} palm={200} />
        </Grid>
      );

      it('fallback to size', () => {
        const styles = getStyles([], component);
        assert.equal(parseInt(styles.width), 500);
      });

      it('accepts desk parameter', () => {
        const styles = getStyles(['desk'], component);
        assert.equal(parseInt(styles.width), 400);
      });

      it('accepts lap parameter', () => {
        const styles = getStyles(['lap'], component);
        assert.equal(parseInt(styles.width), 300);
      });

      it('accepts portable parameter', () => {
        const styles = getStyles(['portable'], component);
        assert.equal(parseInt(styles.width), 250);
      });

      it('accepts palm parameter', () => {
        const styles = getStyles(['palm'], component);
        assert.equal(parseInt(styles.width), 200);
      });
    });

    describe('can have percentage based sized, using a Number between 0 and 1 (not inclusive)', () => {
      const component = (
        <Grid>
          <Cell
            size={2 / 12}
            desk={3 / 12}
            lap={4 / 12}
            portable={5 / 12}
            palm={6 / 12}
          />
        </Grid>
      );

      it('fallback to size', () => {
        const styles = getStyles([], component);
        assert.equal(parseInt(styles.width), 16);
      });

      it('accepts desk parameter', () => {
        const styles = getStyles(['desk'], component);
        assert.equal(parseInt(styles.width), 25);
      });

      it('accepts lap parameter', () => {
        const styles = getStyles(['lap'], component);
        assert.equal(parseInt(styles.width), 33);
      });

      it('accepts portable parameter', () => {
        const styles = getStyles(['portable'], component);
        assert.equal(parseInt(styles.width), 41);
      });

      it('accepts palm parameter', () => {
        const styles = getStyles(['palm'], component);
        assert.equal(parseInt(styles.width), 50);
      });
    });
  });
});
