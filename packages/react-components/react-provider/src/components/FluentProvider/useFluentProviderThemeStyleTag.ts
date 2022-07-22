import { useId, usePrevious } from '@fluentui/react-utilities';
import * as React from 'react';
import type { FluentProviderState } from './FluentProvider.types';
import { fluentProviderClassNames } from './useFluentProviderStyles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useInsertionEffect = (React as any).useInsertionEffect;

const createStyleTag = (target: Document | undefined, id: string) => {
  if (!target) {
    return undefined;
  }
  const tag = target.createElement('style');
  tag.setAttribute('id', id);
  target.head.appendChild(tag);
  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule, 0);
  } else if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error('FluentProvider: No sheet available on styleTag, styles will not be inserted into DOM.');
  }
};

/**
 * Writes a theme as css variables in a style tag on the provided targetDocument as a rule applied to a CSS class
 *
 * @returns CSS class to apply the rule
 */
export const useFluentProviderThemeStyleTag = (options: Pick<FluentProviderState, 'theme' | 'targetDocument'>) => {
  const { targetDocument, theme } = options;
  const styleTag = React.useRef<HTMLStyleElement>();

  const styleTagId = useId(fluentProviderClassNames.root);

  const cssRule = React.useMemo(() => {
    const cssVarsAsString = theme
      ? (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
          cssVarRule += `--${cssVar}: ${theme[cssVar]}; `;
          return cssVarRule;
        }, '')
      : '';

    // result: .fluent-provider1 { --css-var: '#fff' }
    return `.${styleTagId} { ${cssVarsAsString} }`;
  }, [theme, styleTagId]);

  // React 16/17 Behavior
  if (usePrevious(cssRule) !== cssRule && !useInsertionEffect) {
    styleTag.current = createStyleTag(targetDocument, styleTagId);
    styleTag.current && insertSheet(styleTag.current, cssRule);
  }

  // insert cssRule into HTML tag if it exists

  const useEffect = useInsertionEffect || React.useEffect;

  // Removes the style tag from the targetDocument on unmount or change
  useEffect(() => {
    // React 18+ behavior
    if (useInsertionEffect) {
      styleTag.current = createStyleTag(targetDocument, styleTagId);
      styleTag.current && insertSheet(styleTag.current, cssRule);
    }
    return () => {
      if (styleTag.current) {
        styleTag.current.remove();
      }
    };
  }, [cssRule, styleTagId, targetDocument]);

  return styleTagId;
};
