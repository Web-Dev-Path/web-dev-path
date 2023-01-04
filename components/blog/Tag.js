import styles from '@/styles/Blog.module.scss';

const Tag = ({ text }) => {
  return <div className={styles.tag}>{text}</div>;
};

export default Tag;
