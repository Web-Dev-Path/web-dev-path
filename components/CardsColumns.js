import Card from './Card';
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
    <section className={styles.container}>
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
    </section>
  );
}
