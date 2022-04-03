import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import styles from '../styles/Nav.module.scss';
import { linksNav } from '../utils/links';

export default function Nav() {
  const [active, setActive] = useState(false);
  const headerRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          containerRef.current.classList.add(styles.sticky);
        } else {
          containerRef.current.classList.remove(styles.sticky);
        }
      },
      {
        threshold: 0,
        rootMargin: '300px',
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div ref={containerRef}>
          <nav className={styles.nav}>
            <div className={styles.nav__logo}>
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/images/svg/logo.svg"
                    height={115}
                    width={180}
                    alt="Logo"
                    title="Go to the Homepage"
                  />
                </a>
              </Link>
            </div>
            <ul
              className={`${styles.nav__links} ${active ? styles.active : ''}`}
            >
              {linksNav.map(({ text, href, id }) => {
                if (text !== 'Join us') {
                  return (
                    <li className={styles.nav__item} key={id}>
                      <Link href={href}>
                        <a className={styles.nav__link} title={text}>
                          {text}
                        </a>
                      </Link>
                    </li>
                  );
                }
              })}
              <li className={styles.nav__item}>
                <Link href="https://webdevpath.slack.com/join/shared_invite/zt-xqqgwwo5-a09BSVWC9ZrHmS6RaMBzVw#/shared-invite/email">
                  <a
                    className={`${styles.nav__button} ${
                      active ? styles.active : ''
                    }`}
                    title="Join us"
                  >
                    Join us
                  </a>
                </Link>
              </li>
            </ul>
            <button
              className={`${styles.nav__hamburger} ${
                active ? styles.active : ''
              }`}
              onClick={() => setActive(active => !active)}
              aria-label="toggle navigation"
            >
              <span className={styles.nav__hamburger__bar}></span>
              <span className={styles.nav__hamburger__bar}></span>
              <span className={styles.nav__hamburger__bar}></span>
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
