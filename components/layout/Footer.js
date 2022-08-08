import Link from 'next/link';
import footerStyles from '@/styles/Footer.module.scss';
import { linksNav, linksSocial } from '@/utils/links';
import NewsletterSubscribe from '@/components/mailchimp/NewsletterSubscribe';
import Image from 'next/image';
import Container from '@/components/containers/Container';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NewsletterSubscribe />
      <Container customClass={footerStyles.footer__inner}>
        <Link href='/'>
          <a className={footerStyles.footer__logo} title='Go to the Homepage'>
            <Image
              src='/images/svg/logo.svg'
              height={250}
              width={250}
              alt='Our footer logo'
            />
          </a>
        </Link>
        <div className={footerStyles.footer__navSocialsDiv}>
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
          <div className={footerStyles.footer__socialIcons}>
            <ul className={footerStyles.footer__socialList}>
              {linksSocial
                .filter(link => link.isVisible)
                .map(link => (
                  <li
                    className={footerStyles.footer__socialItem}
                    key={link.text}
                  >
                    <Link href={link.href}>
                      <a title={link.text} target='_blank'>
                        <Image
                          href={link.href}
                          src={link.src}
                          height={65}
                          width={47}
                          alt={link.alt}
                        />
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
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
