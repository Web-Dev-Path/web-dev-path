import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Container from './Container';
import styles from '../styles/TwoColumn.module.scss';
import buttonStyles from '../styles/ButtonLink.module.scss';

export default function TwoColumn({
  image,
  altTag,
  title,
  content,
  rowOrder,
  color,
  bgColor,
  btnColor,
  btnBg,
  link,
  customInnerClass,
  linkText = 'Learn more',
}) {
  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop

  const styleProps = {
    btn: {
      color: btnColor,
      backgroundColor: btnBg,
    },
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
          <h2 className={styles.title} style={{ color: color }}>
            {title}
          </h2>
          <p className={styles.content}>{content}</p>
          {link && (
            <ButtonLink
              link={link}
              className={buttonStyles.btn}
              styles={styleProps.btn}
            >
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
