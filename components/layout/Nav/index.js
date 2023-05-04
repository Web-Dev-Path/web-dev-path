import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '@/components/containers/Container';
import { linksNav } from '@/utils/links';
import S from './styles';

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef();
  const containerRef = useRef();

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
    <S.Header ref={headerRef}>
      <Container>
        <S.NavWrapper ref={containerRef} $isSticky={isSticky}>
          <S.Nav $isSticky={isSticky}>
            <Link href='/'>
              <S.Logo
                $isSticky={isSticky}
                src='/images/svg/logo.svg'
                alt='Logo'
                title='Go to the Homepage'
              />
            </Link>
            <S.Links
              className={`${active ? 'active' : ''}`}
              $isSticky={isSticky}
            >
              {linksNav.map(({ text, href, id }) => {
                return (
                  <S.Item key={id}>
                    <S.Link
                      href={href}
                      $isSticky={isSticky}
                      className={`${router.pathname == href ? `current` : ''}`}
                      title={text}
                    >
                      {text}
                    </S.Link>
                  </S.Item>
                );
              })}
              <S.Item>
                <S.Button
                  $isSticky={isSticky}
                  href='mailto:hello@webdevpath.co?subject=Project collaborator application'
                  className={`${active ? `active` : ''}`}
                  title='Join us'
                >
                  Join us
                </S.Button>
              </S.Item>
            </S.Links>
            <S.Hamburger
              className={`${active ? `active` : ''}`}
              onClick={() => setActive(active => !active)}
              aria-label='toggle navigation'
            >
              <S.HamburgerBar $isSticky={isSticky}></S.HamburgerBar>
              <S.HamburgerBar $isSticky={isSticky}></S.HamburgerBar>
              <S.HamburgerBar $isSticky={isSticky}></S.HamburgerBar>
            </S.Hamburger>
          </S.Nav>
        </S.NavWrapper>
      </Container>
    </S.Header>
  );
}
