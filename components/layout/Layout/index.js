import { useRouter } from 'next/router';
import { heroOptions } from '@/utils/hero-options';
import Hero from '@/components/layout/Hero';
import Meta from '@/components/layout/Meta';
import Footer from '@/components/layout/Footer';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const router = useRouter();
  const heroPathKeys = Object.keys(heroOptions)
    .sort((a, b) => a - b)
    .filter(k => router.pathname.startsWith(k));

  const heroKey = heroPathKeys[heroPathKeys.length - 1];
  return (
    <>
      <Meta />
      <main className={styles.main}>
        <Hero {...heroOptions[heroKey]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
