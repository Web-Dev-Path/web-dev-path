import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';
import { linksNav, linksSocial } from '../utils/links';
import NewsletterSubscribe from './mailchimp/NewsletterSubscribe';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NewsletterSubscribe />
    </footer>
  );
}
