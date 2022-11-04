import * as React from 'react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const varName: string = `--foo${node.value.name}-${index}`;
  const varName2: string = `--foo2${node.value.name}-${index}`;
  return (
    <div style={{ [varName]: 'green', [varName2]: 'red' }}>
      <span style={{ color: `var(${varName})`, backgroundColor: `var(${varName2})` }}>
        {node.value.name}, ${index}
      </span>
    </div>
  );
};

export default componentRenderer;
