import btnStyles from '@/styles/ButtonLink.module.scss';

/*  The component supports the use of target with the property "openNewTab" to open the
 link in a new tab.*/

export default function ButtonLink({
  customClassName,
  link,
  children,
  styles,
  openNewTab,
}) {
  return (
    <a
      href={link}
      className={customClassName?`${btnStyles.btn} ${btnStyles[customClassName]}`:btnStyles.btn}
      style={styles}
      target={openNewTab ? '_blank' : undefined}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
