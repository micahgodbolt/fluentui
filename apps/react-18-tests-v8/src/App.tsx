import * as React from 'react';
import { ThemeProvider, DefaultButton, PartialTheme, getTheme } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import { ContextualMenuExample } from './components/index';

// This app is here as a simple sandbox to render v8 controls inside of an React 18 environment.

export const App = () => {
  const { palette } = getTheme();

  const lightTheme: PartialTheme = {
    semanticColors: {
      bodyBackground: palette.white,
      bodyText: palette.black,
      menuBackground: palette.white,
    },
  };

  const darkTheme: PartialTheme = {
    semanticColors: {
      bodyBackground: palette.black,
      bodyText: palette.white,
      menuBackground: palette.black,
    },
  };
  const [isLight, { toggle: toggleIsLight }] = useBoolean(true);

  const ToggleButton: React.FunctionComponent = () => {
    return <DefaultButton onClick={toggleIsLight}>Toggle theme</DefaultButton>;
  };

  return (
    <ThemeProvider style={{ padding: '8px' }} theme={isLight ? lightTheme : darkTheme}>
      <ToggleButton />
      <ContextualMenuExample />
    </ThemeProvider>
  );
};
