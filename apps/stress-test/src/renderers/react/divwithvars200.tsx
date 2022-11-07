import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';
import { TestDiv, getMyStyles } from './utils';

const myStyles = getMyStyles(200);

const useStyles = makeStyles(myStyles);

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const styles = useStyles();

  return (
    <TestDiv styles={styles}>
      {node.value.name}, {depth} {index}
    </TestDiv>
  );
};

export default componentRenderer;
