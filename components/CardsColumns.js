import Card from './Card';
import Container from './Container';
import styles from '../styles/CardsColumns.module.scss';

export default function CardsColumns({
  images,
  altTags,
  titles,
  content,
  links,
  linkText,
}) {
  return (
    <Container>
      <div className={styles.inner__content}>
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
