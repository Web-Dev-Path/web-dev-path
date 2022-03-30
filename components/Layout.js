import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
