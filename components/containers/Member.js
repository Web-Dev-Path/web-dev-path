import Image from 'next/image';
import styles from '@/styles/Member.module.scss';

export default function Member({
  image,
  name,
  title,
  position,
  about,
  linkedIn,
  portfolio,
  customClass,
}) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.card__image}>
          <Image src={image} alt={name} className={styles.img} layout='fill' />
        </div>
      )}

      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.position}>{position}</h3>
      <div className={`${styles.content}`}>
        {linkedIn && (
          <div className={`${styles.links}`}>
            <Image
              src='/images/svg/linkedin-portfolio.svg'
              alt='LinkedIn'
              height='25px'
              width='25px'
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
          <div className={`${styles.links}`}>
            <Image
              src='/images/svg/globe.svg'
              alt='Web Site'
              height='25px'
              width='25px'
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

        <p>{about}</p>
      </div>
    </div>
  );
}
