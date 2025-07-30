import styles from './Tag.module.scss';
import Link from 'next/link';

export const Tag = ({ text }) => {
  return (
    <Link href={`/blog/category/${text}`} className={styles.tagLink}>
      {text}
    </Link>
  );
};
