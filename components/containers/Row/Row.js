import S from './styles';

export default function Row({ customClass, children, styles }) {
  return (
    <S.Row $alignment={customClass} style={styles}>
      {children}
    </S.Row>
  );
}
