import S from './styles';

export default function Wrapper({ customClass, children }) {
  return <S.Wrapper $colorVarient={customClass}>{children}</S.Wrapper>;
}
