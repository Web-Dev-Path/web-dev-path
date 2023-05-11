import S from './styles';

export function Row({ customClass, children }) {
  return <S.Row>{children}</S.Row>;
}

export function RowAlignLeft({ customClass, children }) {
  return <S.RowAlignLeft>{children}</S.RowAlignLeft>;
}
