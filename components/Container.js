import { forwardRef } from 'react';
import containerStyles from '../styles/Container.module.scss';

const Container = forwardRef((props, ref) => {
  const { className, styles, children } = props;
  return (
    <div
      className={`${className ? className : ''} ${containerStyles.container}`}
      styles={styles}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Container;
