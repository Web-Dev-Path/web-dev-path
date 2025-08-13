import Image from 'next/image';
import { linksNav, linksSocial } from '@/utils/links';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Container from '@/components/containers/Container';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <NewsletterSubscribe />
      <Container className={styles.inner}>
        <a className={styles.logo} href='/' title='Go to the Homepage'>
          <Image
            src='/images/svg/logo.svg'
            height={250}
            width={250}
            alt='Our footer logo'
          />
        </a>
        <div className={styles.navSocialsContainer}>
          <nav className={styles.nav} aria-label='Main'>
            <ul className={styles.navList}>
              {linksNav.map(link => (
                <li className={styles.navItem} key={link.text}>
                  <a href={link.href} title={link.text}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul className={styles.socialList}>
              {linksSocial
                .filter(link => link.isVisible)
                .map(link => (
                  <li className={styles.socialItem} key={link.text}>
                    <a href={link.href} title={link.text} target='_blank'>
                      <Image
                        href={link.href}
                        src={link.src}
                        height={65}
                        width={47}
                        alt={link.alt}
                      />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container className={styles.bottomText}>
        <p className={styles.copyright}>
          © Web Dev Path {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className={styles.netlify}>
          This site is powered by
          <Image
            src='/images/svg/logo-netlify-small-fullcolor-darkmode.svg'
            width={50}
            height={50}
            alt='Netlify Logo'
          />
        </p>
      </Container>
    </footer>
  );
}
