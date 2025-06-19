import styles from './ButtonLink.module.scss';

export default function ButtonLink({
  link,
  children,
  $colorScheme,
  openNewTab,
  className,
}) {
  let buttonClass = styles.buttonLink;

  if ($colorScheme === 'inverted-grey') {
    buttonClass += ` ${styles.invertedGrey}`;
  } else if ($colorScheme === 'inverted-white') {
    buttonClass += ` ${styles.invertedWhite}`;
  }

  if (className) {
    buttonClass += ` ${className}`;
  }

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
