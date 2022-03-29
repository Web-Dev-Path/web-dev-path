import containerStyles from '../styles/Container.module.scss';

export default function Container({ className, children, styles }) {
  return (
    <div
      className={`${containerStyles.container} ${className ? className : ''}`}
      style={styles}
    >
      {children}
    </div>
  );
}
