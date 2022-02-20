import Image from 'next/image';
import ButtonLink from './ButtonLink';
import styles from '../styles/TwoColumn.module.scss';
import buttonStyles from '../styles/ButtonLink.module.scss';

export default function TwoColumn(props) {
  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop
  const { image, title, content, rowOrder } = props;
  return (
    <section className={styles.container}>
      <div className={styles.inner} style={{ flexDirection: rowOrder }}>
        <div className={styles.inner__content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
          <ButtonLink link="/about-us" className={buttonStyles.btn}>
            Learn more
          </ButtonLink>
        </div>
        <div className={styles.inner__image}>
          <Image
            src={image}
            alt=""
            className={styles.img}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
