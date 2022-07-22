import Link from 'next/link';
import footerStyles from '@/styles/Footer.module.scss';
import { linksNav } from '@/utils/links';
import { linksSocial } from '@/utils/links';
import NewsletterSubscribe from '@/components/mailchimp/NewsletterSubscribe';
import Image from 'next/image';
import Container from '@/components/containers/Container';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NewsletterSubscribe />

      <Container className={footerStyles.footer__inner}>
        <Link href='/'>
          <a className={footerStyles.footer__logo} title='Go to the Homepage'>
            <Image
              src='/images/svg/logo.svg'
              height={250}
              width={250}
              alt='Logo'
            />
          </a>
        </Link>

        <nav className={footerStyles.footer__nav} aria-label='Main'>
          <ul className={footerStyles.footer__navList}>
            {linksNav.map(link => (
              <li className={footerStyles.footer__navItem} key={link.text}>
                <Link href={link.href}>
                  <a title={link.text}>{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ul>
            {linksSocial.map(link => (
              <li key={link.id}>
                <Image 
                  src={link.src}
                  height={47}
                  width={47}
                />
              </li>
            ))}
          </ul>
        </div>

      </Container>
      <Container>
        <p className={footerStyles.footer__copyright}>
          © Web Dev Path {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
