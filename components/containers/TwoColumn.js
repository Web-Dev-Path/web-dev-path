import Image from 'next/image';
import ButtonLink from '@/components/buttons/ButtonLink';
import Container from '@/components/containers/Container';
import styles from '@/styles/TwoColumn.module.scss';

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
  secondTextColumn,
  openNewTab,
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
        customClass={
          customInnerClass
            ? `${styles.inner} ${styles[customInnerClass]}`
            : styles.inner
        }
        styles={{ flexDirection: rowOrder }}
      >
        <div className={styles.inner__content}>
          {title && (
            <h2 className={styles.title} style={{ color: color }}>
              {title}
            </h2>
          )}
          <div className={styles.content}>{content}</div>
          {link && (
            <ButtonLink
              link={link}
              customClassName={customBtnClass}
              openNewTab={openNewTab}
            >
              {linkText}
            </ButtonLink>
          )}
        </div>
        {secondTextColumn && secondTextColumn}
        {!secondTextColumn && image && (
          <div className={styles.inner__image}>
            <Image
              src={image}
              alt={altTag}
              className={styles.img}
              layout='fill'
            />
          </div>
        )}
      </Container>
    </section>
  );
}
