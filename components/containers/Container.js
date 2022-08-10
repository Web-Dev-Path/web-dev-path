import containerStyles from '@/styles/Container.module.scss';

export default function Container({ customClass, children, styles }) {
  return (
    <div
      className={
        customClass
          ? `${containerStyles.container} ${customClass}`
          : containerStyles.container
      }
      style={styles}
    >
      {children}
    </div>
  );
}
