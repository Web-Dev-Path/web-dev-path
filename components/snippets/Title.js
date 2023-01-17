import styles from '@/styles/Title.module.scss';

const Title = ({ title, customClass }) => {
  return (
    <h2
      className={
        customClass ? `${styles.title} ${styles[customClass]}` : styles.title
      }
    >
      {title}
    </h2>
  );
};

export default Title;
