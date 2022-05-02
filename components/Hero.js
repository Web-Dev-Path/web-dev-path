import { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from './Nav';
import Container from './Container';
import styles from '../styles/Hero.module.scss';

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

  useEffect(() => {
    const dynamicTitleEl = document.getElementById('dynamicTitle');
    if (dynamicTitleEl.style.opacity === '1') {
      dynamicTitleEl.style.opacity = '0';
    } else {
      dynamicTitleEl.style.opacity = '1';
    }
  }, [titleIndex]);

  setTimeout(handleTitleIndex, 1750);

  return (
    <div
      className={`${styles.header} ${customClass ? styles[customClass] : ''}`}
    >
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
          <h1 className={titleClass ? `${styles[titleClass]}` : ''}>
            {title}
            {dynamicTitles && (
              <span id="dynamicTitle"> {dynamicTitles[titleIndex]}</span>
            )}
          </h1>
        </div>
        <div className={styles.header__content__bottom}>
          <p>{content}</p>
        </div>
      </Container>
    </div>
  );
}
