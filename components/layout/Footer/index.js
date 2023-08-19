import Image from 'next/image';
import { linksNav, linksSocial } from '@/utils/links';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Container from '@/components/containers/Container';
import S from './styles';

export default function Footer() {
  return (
    <S.Footer>
      <NewsletterSubscribe />
      <S.Inner>
        <S.Logo href='/' title='Go to the Homepage'>
          <Image
            src='/images/svg/logo.svg'
            height={250}
            width={250}
            alt='Our footer logo'
          />
        </S.Logo>
        <S.NavSocialsContainer>
          <S.Nav aria-label='Main'>
            <S.NavList>
              {linksNav.map(link => (
                <S.NavItem key={link.text}>
                  <a href={link.href} title={link.text}>
                    {link.text}
                  </a>
                </S.NavItem>
              ))}
            </S.NavList>
          </S.Nav>
          <div>
            <S.SocialList>
              {linksSocial
                .filter(link => link.isVisible)
                .map(link => (
                  <S.SocialItem key={link.text}>
                    <a href={link.href} title={link.text} target='_blank'>
                      <Image
                        href={link.href}
                        src={link.src}
                        height={65}
                        width={47}
                        alt={link.alt}
                      />
                    </a>
                  </S.SocialItem>
                ))}
            </S.SocialList>
          </div>
        </S.NavSocialsContainer>
      </S.Inner>
      <Container>
        <S.Copyright>
          © Web Dev Path {new Date().getFullYear()}. All rights reserved.
        </S.Copyright>
      </Container>
    </S.Footer>
  );
}
