import { useRouter } from 'next/router';
import { heroOptions } from '@/utils/hero-options';
import Hero from '@/components/layout/Hero';
import Meta from '@/components/layout/Meta';
import Footer from '@/components/layout/Footer';
import S from './styles';

export default function Layout({ children }) {
  const router = useRouter();
  const heroPathKeys = Object.keys(heroOptions)
    .sort((a: any, b: any) => a - b)
    .filter(k => router.pathname.startsWith(k));

  const heroKey = heroPathKeys[heroPathKeys.length - 1];
  return (
    <>
      <Meta />
      <S.Main>
        <Hero {...heroOptions[heroKey]} />
        {children}
        <Footer />
      </S.Main>
    </>
  );
}
