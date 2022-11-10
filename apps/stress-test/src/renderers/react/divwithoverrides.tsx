import * as React from 'react';
import { makeStyles, makeResetStyles } from '@griffel/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';
import { TestDiv, getMyStyles } from './utils';

const myStyles = getMyStyles(0);

const useOuter = makeResetStyles(myStyles.outer);

const useStyles = makeStyles(myStyles);

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const styles = useStyles();
  const outer = useOuter();
  return (
    <TestDiv className={outer} styles={styles}>
      {node.value.name}, {depth} {index}
    </TestDiv>
  );
};

export default componentRenderer;
