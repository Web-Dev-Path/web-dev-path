import styles from '@/styles/Blog.module.scss';
import Link from 'next/link';

const Tag = ({ text }) => {
  return (
    <Link className={styles.tag} href={`/blog/category/${text}`}>
      {text}
    </Link>
  );
};

export default Tag;
