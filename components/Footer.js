import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';
import { linksNav, linksSocial } from '../utils/links';
import NewsletterSubscribe from './mailchimp/NewsletterSubscribe';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.columnLeft}>
          <ul className={footerStyles.footerList}>
            {linksNav.map(link => (
              <li className={footerStyles.footerItem} key={link.href}>
                <Link href={link.href}>
                  <a title={link.text}>{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <Image
            width={77}
            height={72}
            className={footerStyles.logo}
            src="/images/web-dev-path-logo-small.png"
            alt="Logo"
          />
        </div>
        <div className={footerStyles.columnRight}>
          <div className={footerStyles.subscribe}>
            <h2>Subscribe for more</h2>
            <p className={footerStyles.text}>
              Get the answer to the most common questions directly to your email
            </p>
            <NewsletterSubscribe />
            <p>*Unsubscribe anytime</p>
          </div>
          <div className={footerStyles.socialMedia}>
            {linksSocial.map(link => (
              <Link href={link.href} key={link.text} passHref>
                <a>
                  <Image
                    width={32}
                    height={32}
                    src={link.src}
                    alt={link.text}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={footerStyles.copyright}>
        <p>Web Dev Path {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}
