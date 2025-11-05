import styles from './ButtonLink.module.scss';
import Link from 'next/link';
import { combineClasses } from '@/utils/classnames';

export default function ButtonLink({
  link,
  children,
  customBtnClass,
  openNewTab,
}) {
  const buttonClass = combineClasses(styles.buttonLink, customBtnClass, styles);
  return openNewTab ? (
    <a
      href={link}
      className={buttonClass}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  ) : (
    <Link href={link} className={buttonClass}>
      {children}
    </Link>
  );
}
