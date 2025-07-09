import { useEffect, useState } from 'react';
import { useIntersect } from '@/hooks/useIntersect';
import styles from './RevealContentContainer.module.scss';

const RevealContentContainer = ({ children }) => {
  const [ref, entry] = useIntersect({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [hiddenStyle, setHiddenStyle] = useState(true);
  const hiddenStyleClass = hiddenStyle ? styles.sectionHidden : null; // return sectionHidden class name if hiddenStyle is true.

  useEffect(() => {
    if (entry.isIntersecting && firstLoad) {
      setHiddenStyle(false);
      setFirstLoad(false);
    }
  }, [entry.isIntersecting]);

  return (
    <div
      ref={ref}
      className={`${styles.revealContainerWrapper} ${hiddenStyleClass}`}
    >
      {children}
    </div>
  );
};

export default RevealContentContainer;
