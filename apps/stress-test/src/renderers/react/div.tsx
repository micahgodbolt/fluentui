import * as React from 'react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  return (
    <div>
      <span style={{ color: 'green', backgroundColor: 'red' }}>
        {node.value.name}, ${index}
      </span>
    </div>
  );
};

export default componentRenderer;
