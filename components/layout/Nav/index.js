import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '@/components/containers/Container';
import { linksNav } from '@/utils/links';
import styles from './Nav.module.scss';

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef();
  const containerRef = useRef();
  const DESKTOP_BREAKPOINT = 1024;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!containerRef.current) return;
        if (!entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        threshold: 0,
        rootMargin: '300px',
      },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) {
        setActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div
          ref={containerRef}
          className={isSticky ? styles.navWrapperSticky : ''}
        >
          <nav className={isSticky ? styles.navSticky : styles.nav}>
            <Link href='/'>
              <img
                className={isSticky ? styles.logoSticky : styles.logo}
                src='/images/svg/logo.svg'
                alt='Logo'
                title='Go to the Homepage'
              />
            </Link>
            <ul
              className={`
                ${active ? styles.active : ''} 
                ${isSticky ? styles.linksSticky : styles.links}
              `}
            >
              {linksNav.map(({ text, href, id }) => {
                return (
                  <li className={styles.item} key={id}>
                    <a
                      href={href}
                      className={`${styles.link} ${router.pathname === href ? styles.current : ''}`}
                      title={text}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
              <li className={styles.item}>
                <a
                  href='mailto:hello@webdevpath.co?subject=Project collaborator application'
                  className={`
                    ${active ? styles.active : ''} 
                    ${isSticky ? styles.buttonSticky : styles.button}
                  `}
                  title='Join us'
                >
                  Join us
                </a>
              </li>
            </ul>
            <button
              className={`${styles.hamburger} ${active ? styles.active : ''}`}
              onClick={() => setActive(active => !active)}
              aria-label='toggle navigation'
            >
              <span
                className={
                  isSticky ? styles.hamburgerBarSticky : styles.hamburgerBar
                }
              ></span>
              <span
                className={
                  isSticky ? styles.hamburgerBarSticky : styles.hamburgerBar
                }
              ></span>
              <span
                className={
                  isSticky ? styles.hamburgerBarSticky : styles.hamburgerBar
                }
              ></span>
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
