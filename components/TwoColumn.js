import Image from 'next/image';
import ButtonLink from './ButtonLink';
import styles from '../styles/TwoColumn.module.scss';
import buttonStyles from '../styles/ButtonLink.module.scss';

export default function TwoColumn(props) {
  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop
  const {
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
    linkText = 'Learn more',
  } = props;

  const styleProps = {
    btn: {
      color: btnColor,
      backgroundColor: btnBg,
    },
    container: {
      color: color,
      backgroundColor: bgColor,
    },
  };

  return (
    <section className={styles.container} style={styleProps.container}>
      <div className={styles.inner} style={{ flexDirection: rowOrder }}>
        <div className={styles.inner__content}>
          <h2 className={styles.title} style={{ color: color }}>
            {title}
          </h2>
          <p className={styles.content}>{content}</p>
          <ButtonLink
            link={link}
            className={buttonStyles.btn}
            styles={styleProps.btn}
          >
            {linkText}
          </ButtonLink>
        </div>
        {image && (
          <div className={styles.inner__image}>
            <Image
              src={image}
              alt={altTag}
              className={styles.img}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
