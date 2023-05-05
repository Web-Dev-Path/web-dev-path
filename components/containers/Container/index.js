import S from './styles';

export default function Container({ className, children, styles }) {
  return (
    <S.Container className={className} style={styles}>
      {children}
    </S.Container>
  );
}
