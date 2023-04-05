import containerStyles from '@/styles/Container.module.scss';
import S from './styles';

export default function Container({
  className,
  customClass,
  children,
  styles,
}) {
  return (
    <S.Container
      className={customClass ? `${className} ${customClass}` : className}
      style={styles}
    >
      {children}
    </S.Container>
  );
}
