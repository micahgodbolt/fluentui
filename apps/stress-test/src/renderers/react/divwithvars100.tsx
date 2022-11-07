import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';
const itemsArray = [...Array(10).keys()];
const spanArray = [...Array(10).keys()];

const myStyles = itemsArray.reduce(
  (acc, n) => {
    acc[`inner${n}`] = {
      color: `var(--color-${n})`,
      backgroundColor: `var(--backgroundColor-${n})`,
      fontSize: `var(--fontSize-${n})`,
      lineHeight: `var(--lineHeight-${n})`,
      marginTop: `var(--marginTop-${n})`,
      marginBottom: `var(--marginBottom-${n})`,
      marginLeft: `var(--marginLeft-${n})`,
      marginRight: `var(--marginRight-${n})`,
      paddingTop: `var(--paddingTop-${n})`,
      paddingBottom: `var(--paddingBottom-${n})`,
    };
    acc.outer = {
      ...(acc.outer || {}),
      [`--color-${n}`]: `rgb(255,${n},0)`,
      [`--backgroundColor-${n}`]: `rgb(${n * 1},${150 - n * 1},0)`,
      [`--fontSize-${n}`]: `${4 + n}px`,
      [`--lineHeight-${n}`]: `${12 + n}px`,
      [`--marginTop-${n}`]: `${1 + n}px`,
      [`--marginBottom-${n}`]: `${2 + n}px`,
      [`--marginLeft-${n}`]: `${3 + n}px`,
      [`--marginRight-${n}`]: `${4 + n}px`,
      [`--paddingTop-${n}`]: `${1 + n}px`,
      [`--paddingBottom-${n}`]: `${2 + n}px`,
    };
    return acc;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { outer: {} } as Record<string, any>,
);

const getStyles = makeStyles(myStyles);

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const styles = getStyles();
  return (
    <div className={styles.outer}>
      {spanArray.map((item, i) => {
        return (
          <span key={item} className={styles[`inner${item % itemsArray.length}`]}>
            {node.value.name}, {index}, {i}
          </span>
        );
      })}
    </div>
  );
};

export default componentRenderer;
