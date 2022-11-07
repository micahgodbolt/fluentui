import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';
import { TestDiv, getMyStyles } from './utils';

const myStyles = getMyStyles(1, 10);

const getStyles = makeStyles(myStyles);

console.log(myStyles);

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const styles = getStyles();
  return (
    <TestDiv styles={styles}>
      {node.value.name}, {depth} {index}
    </TestDiv>
  );
};

export default componentRenderer;
