import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';
import { linksNav } from '../utils/links';
import NewsletterSubscribe from './mailchimp/NewsletterSubscribe';
import Image from 'next/image';
import Container from './Container';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NewsletterSubscribe />
      <Container className={footerStyles.footer__inner}>
        <nav className={footerStyles.footer__nav} aria-label="Main">
          <ul className={footerStyles.footer__navList}>
            {linksNav.map(link => (
              <li className={footerStyles.footer__navItem} key={link.text}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/">
          <a className={footerStyles.footer__logo} title="Go to the Homepage">
            <Image
              src="/images/svg/logo.svg"
              height={250}
              width={250}
              alt="Logo"
              priority
            />
          </a>
        </Link>
      </Container>
    </footer>
  );
}
