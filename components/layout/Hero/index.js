import { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/layout/Nav';
import Container from '@/components/containers/Container';
import styles from './Hero.module.scss';

export default function Hero({
  title,
  imgBg,
  imgAlt,
  dynamicTitles = [],
  content,
  customClass,
  titleClass,
  hasAccent,
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const handleTitleIndex = () => {
    setTitleIndex(titleIndex >= dynamicTitles.length - 1 ? 0 : titleIndex + 1);
  };

  setTimeout(handleTitleIndex, 1550);

  return (
    <div className={styles.header}>
      <Nav />
      <Image
        className={styles.imageBg}
        src={imgBg}
        alt={imgAlt}
        fill
        priority
      />
      <Container className={styles.headerContent}>
        <div className={styles.headerContentUpper}>
          <h1 className={hasAccent ? styles.title : null}>
            {title}
            {dynamicTitles && <span> {dynamicTitles[titleIndex]}</span>}
          </h1>
        </div>
        <div className={styles.headerContentBottom}>
          <p>{content}</p>
        </div>
      </Container>
    </div>
  );
}
