import { Tag } from '@/components/blog/Tag';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Cards.module.scss';

export function Card({ card, cardType = 'default' }) {
  const { image, altTag, title, content, link, linkText, tagList } = card;

  const LinkComponent = link?.startsWith('http') ? (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {linkText}
    </a>
  ) : (
    link && <Link href={link}>{linkText}</Link>
  );

  return (
    <div className={`${styles.card} ${styles[`card--${cardType}`] || ''}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image className={styles.cardImage} src={image} alt={altTag} fill />
        </div>
      )}

      {title && <h2 className={styles.title}>{title}</h2>}

      {tagList?.length > 0 && (
        <div className={styles.tagContainer}>
          {tagList.slice(0, 8).map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
      )}

      {content && (
        <div className={styles.contentWrapper}>
          <p>
            {content} {LinkComponent}
          </p>
        </div>
      )}
    </div>
  );
}
