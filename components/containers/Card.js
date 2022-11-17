import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Card.module.scss';

export default function Card({
  image,
  altTag,
  title,
  content,
  link,
  linkText,
  customClass,
}) {
  const LinkComponent = link?.startsWith('http') ? (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {linkText}
    </a>
  ) : (
    <Link href={link}>{linkText}</Link>
  );
  return (
    <div
      className={
        customClass ? `${styles.card} ${styles[customClass]}` : styles.card
      }
    >
      {image && (
        <div className={styles.card__image}>
          <Image
            src={image}
            alt={altTag}
            className={styles.img}
            layout='fill'
            objectFit='cover'
          />
        </div>
      )}

      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <p>
          {content} {link && LinkComponent}
        </p>
      </div>
    </div>
  );
}
