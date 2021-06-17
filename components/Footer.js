import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.column}>
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
          <img src="/images/web-dev-path-logo-small.png" alt="Logo" />
        </div>
        <div className={footerStyles.column}>
          <div className={footerStyles.subscribe}>
            <h2>Subscribe for more</h2>
            <p>
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
              <img src="" alt="Github" />
            </Link>
            <Link href="#">
              <img src="" alt="Twitter" />
            </Link>
          </div>
        </div>
      </div>
      <p>Web Dev Path 2021. All rights reserved.</p>
    </footer>
  );
}
