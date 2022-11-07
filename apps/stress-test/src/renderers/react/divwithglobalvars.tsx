import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';
import { num } from '../../consts';
const itemsArray = [...Array(num).keys()];

const myStyles = itemsArray.reduce((acc, n) => {
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
    paddingLeft: `var(--paddingLeft-${n})`,
    paddingRight: `var(--paddingRight-${n})`,
    top: `var(--top-${n})`,
    bottom: `var(--bottom-${n})`,
    left: `var(--left-${n})`,
    right: `var(--right-${n})`,
  };
  return acc;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}, {} as Record<string, any>);

const getStyles = makeStyles(myStyles);

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const styles = getStyles();
  return (
    <div>
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
