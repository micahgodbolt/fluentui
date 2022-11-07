import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getTestOptions } from '../../../shared/utils/testOptions';
import { ReactTest } from '../../../shared/react/ReactTest';
import { makeStaticStyles } from '@griffel/react';

const { fixtureName, rendererName, r } = getTestOptions();
const itemsArray = [...Array(20).keys()];
const myStyles = itemsArray.reduce(
  (acc, n) => {
    acc.body = {
      ...(acc.body || {}),
      [`--color-global-${n}`]: `rgb(255,${n},0)`,
      [`--bg-global-${n}`]: `rgb(${n * 10},${150 - n * 5},0)`,
      [`--fontSize-global-${n}`]: `${4 + n}px`,
      [`--lh-global-${n}`]: `${12 + n}px`,
      [`--mt-global-${n}`]: `${1 + n}px`,
      [`--mb-global-${n}`]: `${2 + n}px`,
      [`--ml-global-${n}`]: `${3 + n}px`,
      [`--mr-global-${n}`]: `${4 + n}px`,
      [`--pt-global-${n}`]: `${1 + n}px`,
      [`--pb-global-${n}`]: `${2 + n}px`,
      // [`--paddingLeft-${n}`]: `${3 + n}px`,
      // [`--paddingRight-${n}`]: `${4 + n}px`,
      // [`--top-${n}`]: `${1 + n}px`,
      // [`--bottom-${n}`]: `${2 + n}px`,
      // [`--left-${n}`]: `${3 + n}px`,
      // [`--right-${n}`]: `${4 + n}px`,
    };
    return acc;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { body: {} } as Record<string, any>,
);

const useStaticStyles = makeStaticStyles(myStyles);

const App = () => {
  useStaticStyles();
  return <ReactTest target="react" fixtureName={fixtureName} rendererName={rendererName ?? r} />;
};

document.title += ' | ' + r ?? rendererName;
ReactDOM.render(<App />, document.getElementById('root'));
