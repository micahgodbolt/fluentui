export const getMyStyles = (vars: number = 1, items: number = 10) => {
  const itemsArray = [...Array(items).keys()];
  const styleNum = Math.ceil(vars / items);
  const myStyles = itemsArray.reduce(
    (acc, item, index) => {
      const skip = vars % items <= index;
      acc[`inner${item}`] = {
        color: !skip && styleNum > 0 ? `var(--color-${item})` : `rgb(255,${item},0)`,
        backgroundColor:
          !skip && styleNum > 1 ? `var(--backgroundColor-${item})` : `rgb(${item * 1},${150 - item * 1},0)`,
        fontSize: !skip && styleNum > 2 ? `var(--fontSize-${item})` : `${4 + item}px`,
        lineHeight: !skip && styleNum > 3 ? `var(--lineHeight-${item})` : `${12 + item}px`,
        marginTop: !skip && styleNum > 4 ? `var(--marginTop-${item})` : `${1 + item}px`,
        marginBottom: !skip && styleNum > 5 ? `var(--marginBottom-${item})` : `${2 + item}px`,
        marginLeft: !skip && styleNum > 6 ? `var(--marginLeft-${item})` : `${3 + item}px`,
        marginRight: !skip && styleNum > 7 ? `var(--marginRight-${item})` : `${4 + item}px`,
        paddingTop: !skip && styleNum > 8 ? `var(--paddingTop-${item})` : `${1 + item}px`,
        paddingBottom: !skip && styleNum > 9 ? `var(--paddingBottom-${item})` : `${2 + item}px`,
      };

      const baseOuterStyles = {
        [`--color-${item}`]: `rgb(255,${item},0)`,
        [`--backgroundColor-${item}`]: `rgb(${item * 1},${150 - item * 1},0)`,
        [`--fontSize-${item}`]: `${4 + item}px`,
        [`--lineHeight-${item}`]: `${12 + item}px`,
        [`--marginTop-${item}`]: `${1 + item}px`,
        [`--marginBottom-${item}`]: `${2 + item}px`,
        [`--marginLeft-${item}`]: `${3 + item}px`,
        [`--marginRight-${item}`]: `${4 + item}px`,
        [`--paddingTop-${item}`]: `${1 + item}px`,
        [`--paddingBottom-${item}`]: `${2 + item}px`,
      };

      // 34
      const outerStyles = Object.keys(baseOuterStyles)
        .slice(0, styleNum)
        .reduce<Record<string, string>>((styleAcc, i) => {
          if (skip) {
            return styleAcc;
          }
          styleAcc[i] = baseOuterStyles[i];
          return styleAcc;
        }, {});

      acc.outer = {
        ...(acc.outer || {}),
        ...outerStyles,
      };

      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<string, any>,
  );

  return myStyles;
};
