import styles from './Row.module.scss';

export function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export function RowAlignLeft({ children }) {
  return <div className={styles.rowAlignLeft}>{children}</div>;
}
