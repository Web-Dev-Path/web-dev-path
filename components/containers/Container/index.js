import styles from './Container.module.scss';

export default function Container({ className, children, styles: propStyles }) {
  return (
    <div
      className={`${styles.container} ${className || ''}`}
      style={propStyles}
    >
      {children}
    </div>
  );
}
