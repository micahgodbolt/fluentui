import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getTestOptions } from '../../../shared/utils/testOptions';
import { ReactTest } from '../../../shared/react/ReactTest';
import { makeStaticStyles } from '@griffel/react';
import { num } from '../../../consts';

const { fixtureName, rendererName, r } = getTestOptions();
const itemsArray = [...Array(num).keys()];
const myStyles = itemsArray.reduce(
  (acc, n) => {
    acc.body = {
      ...(acc.body || {}),
      [`--color-${n}`]: `rgb(255,${n},0)`,
      [`--backgroundColor-${n}`]: `rgb(${n * 10},${150 - n * 5},0)`,
      [`--fontSize-${n}`]: `${4 + n}px`,
      [`--lineHeight-${n}`]: `${12 + n}px`,
      [`--marginTop-${n}`]: `${1 + n}px`,
      [`--marginBottom-${n}`]: `${2 + n}px`,
      [`--marginLeft-${n}`]: `${3 + n}px`,
      [`--marginRight-${n}`]: `${4 + n}px`,
      [`--paddingTop-${n}`]: `${1 + n}px`,
      [`--paddingBottom-${n}`]: `${2 + n}px`,
      [`--paddingLeft-${n}`]: `${3 + n}px`,
      [`--paddingRight-${n}`]: `${4 + n}px`,
      [`--top-${n}`]: `${1 + n}px`,
      [`--bottom-${n}`]: `${2 + n}px`,
      [`--left-${n}`]: `${3 + n}px`,
      [`--right-${n}`]: `${4 + n}px`,
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
