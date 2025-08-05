import styles from './TwoColumn.module.scss';
import ButtonLink from '@/components/buttons/ButtonLink';
import Container from '@/components/containers/Container';
import Image from 'next/image';
import { combineClasses } from '@/utils/classnames';

export default function TwoColumn({
  image,
  altTag,
  title,
  content,
  rowOrder,
  color,
  bgColor,
  link,
  customBtnClass,
  customInnerClass,
  linkText = 'Learn more',
  secondTextColumn,
  openNewTab,
}) {
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
        className={combineClasses(styles.inner, customInnerClass, styles)}
        styles={{ flexDirection: rowOrder }}
      >
        <div className={styles.inner__content}>
          {title && <h2 className={styles.title}>{title}</h2>}
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
        {secondTextColumn ||
          (image && (
            <div className={styles.inner__image}>
              <Image className={styles.img} src={image} alt={altTag} fill />
            </div>
          ))}
      </Container>
    </section>
  );
}
