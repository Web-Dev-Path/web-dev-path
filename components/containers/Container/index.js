import styles from './Container.module.scss';

export default function Container({ className, children, style }) {
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      {children}
    </div>
  );
}
