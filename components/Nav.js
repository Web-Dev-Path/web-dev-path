import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
import layoutStyles from "../styles/Layout.module.css";
import { linksNav } from "../utils/links";

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
      <div
        className={`${styles.navContainer} ${styles.row} ${layoutStyles.widthContainer}`}
      >
        <div className={styles.align}>
          <Link href="/">
            <img
              className={styles.logo}
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
            {linksNav.map((link) => (
              <li className={styles.navItem} key={link.href}>
                <Link href={link.href}>
                  <a className={styles.navLink}>{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
