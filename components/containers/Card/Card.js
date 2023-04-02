import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Card.module.scss';
import S from './styles';
import { Tag } from '@/components/blog/Tag/Tag';

export default function Card({
  card: { image, altTag, title, content, link, linkText, tagList },
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
          <Image src={image} alt={altTag} className={styles.img} fill />
        </div>
      )}

      <h2 className={styles.title} title={title}>
        {title}
      </h2>
      {tagList && tagList.length > 0 ? (
        <S.TagContainer>
          {tagList.slice(0, 8).map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </S.TagContainer>
      ) : null}
      <div className={styles.content}>
        <p>
          {content} {link && LinkComponent}
        </p>
      </div>
    </div>
  );
}
