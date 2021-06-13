import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [active, setActive] = useState(false);

  //This function fixes the Navlinks position if the hamburger menu is left open while resizing the window
  useEffect(() => {
    function setTrueSize() {
      if (window.innerWidth >= 768) setActive(false);
    }
    window.addEventListener("resize", setTrueSize);

    return () => window.removeEventListener("resize", setTrueSize);
  });

  const toggleActive = () => {
    setActive((active) => !active);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} ${styles.row}`}>
        <div className={styles.align}>
          <Link href="/">
            <img
              className={`${styles.img} ${styles.logo}`}
              src="/images/web-dev-path-logo-small.png"
              alt="Logo"
            />
          </Link>
          <button
            className={styles.navToggle}
            aria-label="open navigation"
            onClick={toggleActive}
          >
            <span className={styles.hamburger} />
          </button>
        </div>
        <nav className={`${active ? styles.navVisible : styles.nav}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about-us">
                <a className={styles.navLink}>About Us</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <a className={styles.navLink}>Blog</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact-us">
                <a className={styles.navLink}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
