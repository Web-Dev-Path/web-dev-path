import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.columnLeft}>
          <ul className={footerStyles.footerList}>
            <li className={footerStyles.footerItem}>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li className={footerStyles.footerItem}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={footerStyles.footerItem}>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
          <img
            className={footerStyles.logo}
            src="/images/web-dev-path-logo-small.png"
            alt="Logo"
          />
        </div>
        <div className={footerStyles.columnRight}>
          <div className={footerStyles.subscribe}>
            <h2>Subscribe for more</h2>
            <p className={footerStyles.text}>
              Get the answer to the most common questions directly to your email
            </p>
            <form>
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </form>
            <p>*Unsubscribe anytime</p>
          </div>
          <div className={footerStyles.socialMedia}>
            <Link href="#">
              <img src="iconmonstr-github-1.svg" alt="Github" />
            </Link>
            <Link href="#">
              <img
                className={footerStyles.socialMedia__item}
                src="iconmonstr-twitter-4.svg"
                alt="Twitter"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className={footerStyles.copyright}>
        Web Dev Path 2021. All rights reserved.
      </p>
    </footer>
  );
}
