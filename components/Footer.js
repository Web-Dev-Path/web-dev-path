import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";
import { linksNav, linksSocial } from "../utils/links";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.columnLeft}>
          <ul className={footerStyles.footerList}>
            {linksNav.map((link) => (
              <li className={footerStyles.footerItem} key={link.href}>
                <Link href={link.href}>
                  <a>{link.text}</a>
                </Link>
              </li>
            ))}
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
            {linksSocial.map((link) => (
              <Link href={link.href} key={link.text}>
                <img
                  className={footerStyles.socialMedia}
                  src={link.src}
                  alt={link.text}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className={footerStyles.copyright}>
        Web Dev Path 2021. All rights reserved.
      </p>
    </footer>
  );
}
