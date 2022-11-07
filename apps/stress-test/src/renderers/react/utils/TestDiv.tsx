import * as React from 'react';

export const TestDiv: React.FC<{
  styles: Record<string, string>;
  children: React.ReactNode;
}> = ({ styles, children }) => {
  const spanArray = [...Array(10).keys()];
  return (
    <div className={styles.outer}>
      {spanArray.map((item, i) => {
        return (
          <span key={item} className={styles[`inner${i}`]}>
            {children}
          </span>
        );
      })}
    </div>
  );
};
