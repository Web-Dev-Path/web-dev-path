import ButtonLink from '@/components/buttons/ButtonLink';
// import TwoColumnStyles from './styles';
import styles from './TwoColumn.module.scss';
import Container from '@/components/containers/Container';
import Image from 'next/image';

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
  //Set Styles based on content type
  const styleProps = {
    wrapper: {
      color,
      backgroundColor: bgColor,
    },
  };

  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop
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
        <div className={styles.innerContent}>
          {title && (
            <h2 className={styles.title} style={{ color }}>
              {title}
            </h2>
          )}
          <div className={styles.content}>{content}</div>
          {link && (
            <ButtonLink
              link={link}
              customBtnClass={customBtnClass}
              openNewTab={openNewTab}
            >
              {linkText}
            </ButtonLink>
          )}
        </div>
        {secondTextColumn}
        {!secondTextColumn && image && (
          <div className={styles.innerImage}>
            <Image src={image} alt={altTag} className={styles.img} fill />
          </div>
        )}
      </Container>
    </section>
  );
}
