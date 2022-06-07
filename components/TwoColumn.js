import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Container from './Container';
import styles from '../styles/TwoColumn.module.scss';

export default function TwoColumn({
  image,
  altTag,
  title,
  content,
  rowOrder,
  color,
  bgColor,
  link,
  customInnerClass,
  customBtnClass,
  linkText = 'Learn more',
}) {
  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop

  const styleProps = {
    wrapper: {
      color: color,
      backgroundColor: bgColor,
    },
  };

  return (
    <section className={styles.wrapper} style={styleProps.wrapper}>
      <Container
        className={`${styles.inner} ${styles[customInnerClass]}`}
        styles={{ flexDirection: rowOrder }}
      >
        <div className={styles.inner__content}>
          {title && (
            <h2 className={styles.title} style={{ color: color }}>
              {title}
            </h2>
          )}
          <p className={styles.content}>{content}</p>
          {link && (
            <ButtonLink link={link} customClassName={customBtnClass}>
              {linkText}
            </ButtonLink>
          )}
        </div>
        {image && (
          <div className={styles.inner__image}>
            <Image
              src={image}
              alt={altTag}
              className={styles.img}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
