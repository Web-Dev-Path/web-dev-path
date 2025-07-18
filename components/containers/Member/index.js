import Image from 'next/image';
import styles from './Member.module.scss';

export default function Member({
  image,
  name,
  title,
  position,
  about,
  linkedIn,
  portfolio,
}) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image src={image} alt={name} fill />
        </div>
      )}

      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.position}>{position}</h3>
      <div className={styles.content}>
        {linkedIn && (
          <div className={styles.linkWrapper}>
            <Image
              src='/images/svg/linkedin-portfolio.svg'
              alt='LinkedIn'
              height={25}
              width={25}
            />
            <a
              href={`https://linkedin.com/in/${linkedIn}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {linkedIn}
            </a>
          </div>
        )}
        {portfolio && (
          <div className={styles.linkWrapper}>
            <Image
              src='/images/svg/globe.svg'
              alt='Web Site'
              height={25}
              width={25}
            />
            <a
              href={`https://${portfolio}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {portfolio}
            </a>
          </div>
        )}

        <p className={styles.paragraph}>{about}</p>
      </div>
    </div>
  );
}
