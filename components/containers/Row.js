import styles from '@/styles/Row.module.scss';

export default function Row({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
