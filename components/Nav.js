import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import buttonStyles from '../styles/ButtonLink.module.scss';

export default function Nav() {
  const [active, setActive] = useState(true);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/images/svg/logo.svg"
                height={115.54}
                width={180}
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <ul className={`${styles.nav__links} ${active ? styles.active : ''}`}>
          <li className={styles.nav__item}>
            <Link href="/about-us">
              <a className={styles.nav__link} title="About">
                About
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/blog">
              <a className={styles.nav__link} title="Blog">
                Blog
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/contact-us">
              <a className={styles.nav__link} title="Contact">
                Contact
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <ButtonLink
              styles={{
                color: 'black',
                backgroundColor: 'white',
                minWidth: '9rem',
              }}
              className={buttonStyles.btn}
              link="https://webdevpath.slack.com/join/shared_invite/zt-xqqgwwo5-a09BSVWC9ZrHmS6RaMBzVw#/shared-invite/email"
            >
              Join us
            </ButtonLink>
          </li>
        </ul>
        <div
          className={`${styles.nav__hamburger} ${active ? styles.active : ''}`}
          onClick={() => setActive(active => !active)}
        >
          <span className={styles.nav__hamburger__bar}></span>
          <span className={styles.nav__hamburger__bar}></span>
          <span className={styles.nav__hamburger__bar}></span>
        </div>
      </nav>
    </header>
  );
}
