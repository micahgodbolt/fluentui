import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getTestOptions } from '../../../shared/utils/testOptions';
import { ReactTest } from '../../../shared/react/ReactTest';

const { fixtureName, rendererName, r } = getTestOptions();

console.log(fixtureName, r);

document.title += ' | ' + r ?? rendererName;
ReactDOM.render(
  <ReactTest target="react" fixtureName={fixtureName} rendererName={rendererName ?? r} />,
  document.getElementById('root'),
);
