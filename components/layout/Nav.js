import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '@/components/containers/Container';
import styles from '@/styles/Nav.module.scss';
import { linksNav } from '@/utils/links';

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const headerRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!containerRef.current) return;
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

  useEffect(() => {
    const handleRouteChange = () => {
      setActive(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div ref={containerRef}>
          <nav className={styles.nav}>
            <Link href='/'>
              <img
                className={styles.nav__logo}
                src='/images/svg/logo.svg'
                alt='Logo'
                title='Go to the Homepage'
              />
            </Link>
            <ul
              className={`${styles.nav__links} ${active ? styles.active : ''}`}
            >
              {linksNav.map(({ text, href, id }) => {
                return (
                  <li className={styles.nav__item} key={id}>
                    <a
                      href={href}
                      className={`${styles.nav__link} ${
                        router.pathname == href ? `${styles.current}` : ''
                      }`}
                      title={text}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
              <li className={styles.nav__item}>
                <a
                  href='mailto:hello@webdevpath.co?subject=Project collaborator application'
                  className={`${styles.nav__button} ${
                    active ? styles.active : ''
                  }`}
                  title='Join us'
                >
                  Join us
                </a>
              </li>
            </ul>
            <button
              className={`${styles.nav__hamburger} ${
                active ? styles.active : ''
              }`}
              onClick={() => setActive(active => !active)}
              aria-label='toggle navigation'
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
