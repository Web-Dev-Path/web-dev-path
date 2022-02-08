import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';
import { linksNav } from '../utils/links';
import NewsletterSubscribe from './mailchimp/NewsletterSubscribe';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NewsletterSubscribe />
      <section className={footerStyles.footer__section}>
        <nav className={footerStyles.footer__nav} aria-label="Main">
          <ul className={footerStyles.footer__navList}>
            {linksNav.map(link => (
              <li className={footerStyles.footer__navItem}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Image src="/../public/images/svg/logo.svg" height={326} width={326} />
      </section>
    </footer>
  );
}
