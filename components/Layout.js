import { useRouter } from 'next/router';
import Hero from './Hero';
import Meta from './Meta';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  const router = useRouter();
  const heroOptions = {
    '/': {
      imgBg: '/images/home-bg.png',
      imgAlt: 'Homepage',
      title: 'Web Dev Path is about',
      dynamicTitle: 'Community',
      content:
        'We help junior tech professionals, such as developers and designers, to grow.',
    },
    '/about': {
      imgBg: '/images/about-us-bg.png',
      imgAlt: 'About Us',
      title: 'About Us',
      titleClass: 'accent-title',
      content:
        'While the demand for web developers only increases, becoming one can be quite a journey!',
    },
    '/contact': {
      imgBg: '/images/about-us-bg.png',
      imgAlt: 'Contact Us',
      title: 'Contact Us',
      titleClass: 'accent-title',
      content:
        'We help junior tech professionals, such as developers and designers, to grow.',
    },
    '/blog': {
      imgBg: '/images/about-us-bg.png',
      imgAlt: 'Blog',
      title: 'Our Blog',
      titleClass: 'accent-title',
      content:
        'We help junior tech professionals, such as developers and designers, to grow.',
    },
    '/404': {
      imgBg: '/images/about-us-bg.png',
      imgAlt: 'Not Found',
      title: 'Not Found',
      titleClass: 'accent-title',
      content:
        'We help junior tech professionals, such as developers and designers, to grow.',
    },
  };
  return (
    <>
      <Meta />
      <main className={styles.main}>
        <Hero {...heroOptions[router.pathname]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
