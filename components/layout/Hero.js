import { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/layout/Nav';
import Container from '@/components/containers/Container';
import styles from '@/styles/Hero.module.scss';

export default function Hero({
  title,
  imgBg,
  imgAlt,
  dynamicTitles = [],
  content,
  customClass,
  titleClass,
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const handleTitleIndex = () => {
    setTitleIndex(titleIndex >= dynamicTitles.length - 1 ? 0 : titleIndex + 1);
  };

  setTimeout(handleTitleIndex, 1550);

  return (
    <div
      className={`${styles.header} ${customClass ? styles[customClass] : ''}`}
    >
      <Nav />
      <Image
        src={imgBg}
        alt={imgAlt}
        className={styles.imageBg}
        fill
        priority
      />
      <Container customClass={styles.header__content}>
        <div className={styles.header__content__upper}>
          <h1 className={titleClass ? `${styles[titleClass]}` : ''}>
            {title}
            {dynamicTitles && <span> {dynamicTitles[titleIndex]}</span>}
          </h1>
        </div>
        <div className={styles.header__content__bottom}>
          <p>{content}</p>
        </div>
      </Container>
    </div>
  );
}
