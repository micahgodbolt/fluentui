import * as React from 'react';

export const TestDiv: React.FC<{
  styles: Record<string, string>;
  children: React.ReactNode;
  className?: string;
}> = ({ styles, children, className }) => {
  const spanArray = [...Array(20).keys()];
  return (
    <div className={` ${className ? className : styles.outer}`}>
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
