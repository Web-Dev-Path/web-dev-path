import { useEffect, useState } from 'react';
import { useIntersect } from '@/hooks/useIntersect';
import S from './styles';

const RevealContentContainer = ({ children }) => {
  const [ref, entry] = useIntersect({ threshold: 0.08 });
  const [firstLoad, setFirstLoad] = useState(true);
  const [hiddenStyle, setHiddenStyle] = useState(true);

  useEffect(() => {
    if (entry.isIntersecting && firstLoad) {
      setHiddenStyle(false);
      setFirstLoad(false);
    }
  }, [entry.isIntersecting]);

  return (
    <S.RevealContainerWrapper ref={ref} $hiddenStyle={hiddenStyle}>
      {children}
    </S.RevealContainerWrapper>
  );
};

export default RevealContentContainer;
