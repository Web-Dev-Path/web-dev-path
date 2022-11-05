import rowStyles from '@/styles/Row.module.scss';

export default function Row({ customClass, children, styles }) {
  return (
    <div
      className={
        customClass
          ? `${rowStyles.row} ${rowStyles[customClass]}`
          : rowStyles.row
      }
      style={styles}
    >
      {children}
    </div>
  );
}
