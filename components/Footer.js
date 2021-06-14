import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.a}
      >
        Powered by{" "}
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          className={footerStyles.logo}
        />
      </a>
    </footer>
  );
}
