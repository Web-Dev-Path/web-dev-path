import Image from 'next/image';
import Nav from './Nav';
import Container from './Container';
import styles from '../styles/Hero.module.scss';

export default function Hero({
  title,
  imgBg,
  imgAlt,
  dynamicTitle,
  content,
  customClass,
  titleClass,
}) {
  return (
    <div className={`${styles.header} ${customClass && styles[customClass]}`}>
      <Nav />
      <Image
        src={imgBg}
        alt={imgAlt}
        className={styles.imageBg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <Container className={styles.header__content}>
        <div className={styles.header__content__upper}>
          <h1 className={`${titleClass && styles[titleClass]}`}>
            {title}
            {dynamicTitle && <span> {dynamicTitle}</span>}
          </h1>
        </div>
        <div className={styles.header__content__bottom}>
          <p>{content}</p>
        </div>
      </Container>
    </div>
  );
}
