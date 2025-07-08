import styles from './AuthorBio.module.scss';
import Image from 'next/image';
import Container from '@/components/containers/Container';
export default function AuthorBio({ user }) {
  return (
    <div className={styles['grey-bg']}>
      <Container>
        <h3>Author Bio</h3>
        <div className={styles['flex-container']}>
          <div className={styles['image-wrapper']}>
            <Image src={user.profile_image} alt="Author's profile" fill />
          </div>
          <div className={styles['split-container']}>
            <p>{user.summary}</p>
            <div className={styles['logos-container']}>
              {user.twitter_username && (
                <a
                  href={`https://x.com/${user.twitter_username}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/images/svg/x.svg'
                    alt='X logo'
                    height={48}
                    width={48}
                  />
                </a>
              )}
              {user.github_username && (
                <a
                  href={`https://github.com/${user.github_username}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/images/svg/github-black.svg'
                    alt='Github Logo'
                    height={48}
                    width={48}
                  />
                </a>
              )}
              {user.website_url && (
                <a
                  href={user.website_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/images/svg/globe.svg'
                    alt='Web Site'
                    height={48}
                    width={48}
                  />
                </a>
              )}
              <a
                href={`https://www.linkedin.com/${user.linkedIn}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/images/svg/linkedin-portfolio.svg'
                  alt='Linkedin account of Web Dev Path'
                  height={48}
                  width={48}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
