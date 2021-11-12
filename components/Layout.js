import Nav from "./Nav";
import Head from "./Head";
import styles from "../styles/Layout.module.scss";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
