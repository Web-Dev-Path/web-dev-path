import { ContainerProps } from 'types';
import S from './styles';

export default function Container({
  className,
  children,
  styles,
}: ContainerProps) {
  return (
    <S.Container className={className} style={styles}>
      {children}
    </S.Container>
  );
}
