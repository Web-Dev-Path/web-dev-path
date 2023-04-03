import containerStyles from '@/styles/Container.module.scss';
import S from './styles';

export default function Container({ customClass, children, styles }) {
  return (
    <S.Container
      className={
        customClass
          ? `${containerStyles.container} ${customClass}`
          : containerStyles.container
      }
      style={styles}
    >
      {children}
    </S.Container>
  );
}
