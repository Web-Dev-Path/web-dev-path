import styles from './Row.module.scss';

export function Row({ customClass, children }) {
  return <div className={styles.row}>{children}</div>;
}

export function RowAlignLeft({ customClass, children }) {
  return <div className={styles.rowAlignLeft}>{children}</div>;
}
