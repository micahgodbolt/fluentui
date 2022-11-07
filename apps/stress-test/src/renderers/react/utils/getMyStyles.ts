const random = () => Math.floor(Math.random() * 256);

export const getMyStyles = (vars: number = 1, items: number = 20) => {
  const itemsArray = [...Array(items).keys()];
  const myStyles = itemsArray.reduce(
    (acc, item) => {
      const cutoff = (vars - item) / 10;

      acc[`inner${item}`] = {
        color: cutoff > 0 ? `var(--color-${item})` : `rgb(255,${item},0)`,
        backgroundColor: cutoff > 1 ? `var(--backgroundColor-${item})` : `rgb(${item * 1},${150 - item * 1},0)`,
        fontSize: cutoff > 2 ? `var(--fontSize-${item})` : `${8 + item / 2}px`,
        lineHeight: cutoff > 3 ? `var(--lineHeight-${item})` : `${12 + item}px`,
        marginTop: cutoff > 4 ? `var(--marginTop-${item})` : `${1 + item}px`,
        marginBottom: cutoff > 5 ? `var(--marginBottom-${item})` : `${2 + item}px`,
        marginLeft: cutoff > 6 ? `var(--marginLeft-${item})` : `${3 + item}px`,
        marginRight: cutoff > 7 ? `var(--marginRight-${item})` : `${4 + item}px`,
        paddingTop: cutoff > 8 ? `var(--paddingTop-${item})` : `${1 + item}px`,
        paddingBottom: cutoff > 9 ? `var(--paddingBottom-${item})` : `${2 + item}px`,
      };

      const baseOuterStyles = {
        [`--color-${item}`]: `rgb(255,${item}, ${random()})`,
        [`--backgroundColor-${item}`]: `rgb(${item * 1},${random()},${random()})})`,
        [`--fontSize-${item}`]: `${8 + item / 2}px`,
        [`--lineHeight-${item}`]: `${12 + item}px`,
        [`--marginTop-${item}`]: `${1 + item}px`,
        [`--marginBottom-${item}`]: `${2 + item}px`,
        [`--marginLeft-${item}`]: `${3 + item}px`,
        [`--marginRight-${item}`]: `${4 + item}px`,
        [`--paddingTop-${item}`]: `${1 + item}px`,
        [`--paddingBottom-${item}`]: `${2 + item}px`,
      };

      // 34
      const outerStyles = Object.keys(baseOuterStyles).reduce<Record<string, string>>((styleAcc, style, i) => {
        if (i >= (vars - item) / 10) {
          return styleAcc;
        }
        styleAcc[style] = baseOuterStyles[style];
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
