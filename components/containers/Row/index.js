import styles from './Row.module.scss';

export function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}
