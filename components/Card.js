import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Card.module.scss';

export default function Card(props) {
  const { image, altTag, title, content, link, linkText } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src={image}
          alt={altTag}
          className={styles.img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <p>
          {content} <Link href={link}>{linkText}</Link>
        </p>
      </div>
    </div>
  );
}
