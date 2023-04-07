import { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/layout/Nav';
import Container from '@/components/containers/Container/Container';
import S from './styles';

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
    <S.Header>
      <Nav />
      <S.ImageBg src={imgBg} alt={imgAlt} fill priority />
      <S.HeaderContent>
        <S.HeaderContentUpper>
          <S.Title $hasAccent={hasAccent}>
            {title}
            {dynamicTitles && <span> {dynamicTitles[titleIndex]}</span>}
          </S.Title>
        </S.HeaderContentUpper>
        <S.HeaderContentBottom>
          <p>{content}</p>
        </S.HeaderContentBottom>
      </S.HeaderContent>
    </S.Header>
  );
}
