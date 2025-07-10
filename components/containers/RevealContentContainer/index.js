import { useEffect, useState } from 'react';
import { useIntersect } from '@/hooks/useIntersect';
import styles from './RevealContentContainer.module.scss';

const RevealContentContainer = ({ children }) => {
  const [ref, entry] = useIntersect({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [hiddenStyle, setHiddenStyle] = useState(true);

  useEffect(() => {
    if (entry.isIntersecting && firstLoad) {
      setHiddenStyle(false);
      setFirstLoad(false);
    }
  }, [entry.isIntersecting]);

  return (
    <div
      ref={ref}
      className={
        hiddenStyle
          ? `${styles.revealContainerWrapper} ${styles.sectionHidden}`
          : styles.revealContainerWrapper
      }
    >
      {children}
    </div>
  );
};

export default RevealContentContainer;
