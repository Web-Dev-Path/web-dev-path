import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
