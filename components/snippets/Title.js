import styles from '@/styles/Title.module.scss';
import Container from '@/components/containers/Container';

const Title = ({ title, customClass }) => {
  const Content = () => (
    <h2
      className={
        customClass ? `${styles.title} ${styles[customClass]}` : styles.title
      }
    >
      {title}
    </h2>
  );

  return customClass === 'blogTitle' ? (
    <Container>
      <Content />
    </Container>
  ) : (
    <Content />
  );
};

export default Title;
