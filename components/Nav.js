import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navContainer">
        <Link href="/">
          <img
            className="logo"
            src="/images/web-dev-path-logo-small.png"
            alt="Logo"
          />
        </Link>
        <div className="linksContainer">
          <ul className="links">
            <li>
              <Link href="/about-us">
                <a className="link">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/active-projects">
                <a className="link">Active Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/index">
                <a className="link">Blog</a>
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact-us">
                <a className="link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .nav {
            width: 100%;
          }

          .logo {
            padding: 1rem;
            border-radius: 100%;
          }

          .navContainer {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            max-width: 800px;
          }

          .linksContainer {
            flex-basis: 50%;
          }

          .links {
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            padding-left: 0;
          }

          .link {
            text-decoration: none;
            color: black;
          }

          .link:hover {
            opacity: 70%;
          }

          @media (max-width: 768px) {
            .links {
              flex-direction: column;
            }
          }
        `}
      </style>
    </nav>
  );
}
