import styles from './Wrapper.module.scss';

export default function Wrapper({ customClass, children }) {
  const wrapperClass = customClass
    ? `${styles.wrapper} ${styles[customClass]}`
    : styles.wrapper;
  return <div className={wrapperClass}>{children}</div>;
}
