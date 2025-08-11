import styles from './ButtonLink.module.scss';
import { combineClasses } from '@/utils/classnames';

export default function ButtonLink({
  link,
  children,
  customBtnClass,
  openNewTab,
}) {
  const buttonClass = combineClasses(styles.buttonLink, customBtnClass, styles);
  return (
    <a
      href={link}
      className={buttonClass}
      target={openNewTab ? '_blank' : undefined}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
