import { useEffect, useState } from 'react';
import { useIntersect } from '../hooks/useIntersect';
import styles from '../styles/RevealContainer.module.scss';

const RevealContentContainer = ({ children }) => {
  const [ref, entry] = useIntersect({ threshold: 0.15 });
  const [firstLoad, setFirstLoad] = useState(true);
  const [hiddenStyle, setHiddenStyle] = useState('section__hidden');

  useEffect(() => {
    if (entry.isIntersecting && firstLoad) {
      setHiddenStyle('');
      setFirstLoad(false);
    }
  }, [entry.isIntersecting]);

  return (
    <div ref={ref} className={`${styles.wrapper} ${styles[hiddenStyle]}`}>
      {children}
    </div>
  );
};

export default RevealContentContainer;
