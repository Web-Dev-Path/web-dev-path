import styles from './ButtonLink.module.scss';

export default function ButtonLink({
  link,
  children,
  customBtnClass,
  openNewTab,
}) {
  const buttonClass = customBtnClass
    ? `${styles.buttonLink} ${styles[customBtnClass]}`
    : styles.buttonLink;

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
