import { useEffect, useState } from 'react';
import Card from './Card';
import Container from './Container';
import styles from '../styles/CardsColumns.module.scss';
import { useIntersect } from '../hooks/useIntersect';

export default function CardsColumns({
  images,
  altTags,
  titles,
  content,
  links,
  linkText,
}) {
  const [ref, entry] = useIntersect({ threshold: 0.15 });
  const [firstLoad, setFirstLoad] = useState(true);
  const [hiddenStyle, setHiddenStyle] = useState('section__hidden');

  useEffect(() => {
    if (entry.isIntersecting && firstLoad) {
      setHiddenStyle('');
      setFirstLoad(false);
    }
  }, [entry.isIntersecting]);

  return (
    <Container>
      <div
        ref={ref}
        className={`${styles.inner__content}  ${styles[hiddenStyle]}`}
      >
        {titles.map((title, index) => {
          return (
            <Card
              title={title}
              image={images[index]}
              altTag={altTags[index]}
              content={content[index]}
              link={links[index]}
              linkText={linkText[index]}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
}
