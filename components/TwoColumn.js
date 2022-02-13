import Image from 'next/image';
import ButtonLink from './ButtonLink';
import styles from '../styles/TwoColumn.module.scss';
import buttonStyles from '../styles/ButtonLink.module.scss';

export default function TwoColumn(props) {
  const { image, title, content, rowOrder } = props;
  return (
    <section className={styles.container}>
      <div className={styles.inner} style={{ flexDirection: rowOrder }}>
        <div className={styles.itemLeft}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
          <ButtonLink link="/about-us" className={buttonStyles.btn}>
            Learn more
          </ButtonLink>
        </div>
        <div className={styles.itemRight}>
          <Image
            src={image}
            alt=""
            className={styles.img}
            width={409}
            height={545}
          />
        </div>
      </div>
    </section>
  );
}
