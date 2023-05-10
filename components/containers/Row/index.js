import S from './styles';

export function Row({ customClass, children, styles }) {
  return <S.Row style={styles}>{children}</S.Row>;
}

export function RowAlignLeft({ customClass, children, styles }) {
  return <S.RowAlignLeft style={styles}>{children}</S.RowAlignLeft>;
}
