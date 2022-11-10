const random = () => Math.floor(Math.random() * 256);

export const getMyStyles = (vars: number = 1, items: number = 20) => {
  const itemsArray = [...Array(items).keys()];
  const myStyles = itemsArray.reduce(
    (acc, item) => {
      const cutoff = (vars - item) / 10;

      acc[`inner${item}`] = {
        color: cutoff > 0 ? `var(--color-${item}, var(--color-global-${item}))` : `var( --color-global-${item})`,
        backgroundColor: cutoff > 1 ? `var(--bg-${item}, var(--bg-global-${item}))` : `var( --bg-global-${item})`,
        fontSize:
          cutoff > 2 ? `var(--fontSize-${item}, var(--fontSize-global-${item}))` : `var( --fontSize-global-${item})`,
        lineHeight: cutoff > 3 ? `var(--lh-${item}, var(--lh-global-${item}))` : `var( --lh-global-${item})`,
        marginTop: cutoff > 4 ? `var(--mt-${item}, var(--mt-global-${item}))` : `var( --mt-global-${item})`,
        marginBottom: cutoff > 5 ? `var(--mb-${item}, var(--mb-global-${item}))` : `var( --mb-global-${item})`,
        marginLeft: cutoff > 6 ? `var(--ml-${item}, var(--ml-global-${item}))` : `var( --ml-global-${item})`,
        marginRight: cutoff > 7 ? `var(--mr-${item}, var(--mr-global-${item}))` : `var( --mr-global-${item})`,
        paddingTop: cutoff > 8 ? `var(--pt-${item}, var(--pt-global-${item}))` : `var( --pt-global-${item})`,
        paddingBottom: cutoff > 9 ? `var(--pb-${item}, var(--pb-global-${item}))` : `var( --pb-global-${item})`,
      };

      const baseOuterStyles = {
        [`--color-${item}`]: `rgb(255,${item}, ${random()} )`,
        [`--bg-${item}`]: `rgb(${item * 1},${random()},${random()})`,
        [`--fontSize-${item}`]: `${8 + item / 2}px`,
        [`--lh-${item}`]: `${12 + item}px`,
        [`--mt-${item}`]: `${1 + item}px`,
        [`--mb-${item}`]: `${2 + item}px`,
        [`--ml-${item}`]: `${3 + item}px`,
        [`--mr-${item}`]: `${4 + item}px`,
        [`--pt-${item}`]: `${1 + item}px`,
        [`--pb-${item}`]: `${2 + item}px`,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const baseOuterClasses: Record<string, string>[] = [
        { color: `rgb(255,${item}, ${random()} )` },
        { backgroundColor: `rgb(${item * 1},${random()},${random()})` },
        { fontSize: `${9 + item / 2}px` },
        { lineHeight: `${13 + item}px` },
        { marginTop: `${2 + item}px` },
        { marginBottom: `${3 + item}px` },
        { marginLeft: `${4 + item}px` },
        { marginRight: `${5 + item}px` },
        { paddingTop: `${2 + item}px` },
        { paddingBottom: `${3 + item}px` },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const outerStyles = Object.keys(baseOuterStyles).reduce<Record<string, any>>((styleAcc, style, i) => {
        if (i < (vars - item) / 10) {
          styleAcc[style] = baseOuterStyles[style];
          return styleAcc;
        } else {
          styleAcc[`& > :nth-child(${item + 1})`] = {
            ...styleAcc[`& > :nth-child(${item + 1})`],
            ...baseOuterClasses[i],
          };
          return styleAcc;
        }
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
