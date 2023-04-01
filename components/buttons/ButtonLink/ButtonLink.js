import S from './styles';

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
    <S.ButtonLink
      href={link}
      style={styles}
      $colorScheme={customClassName}
      target={openNewTab ? '_blank' : undefined}
      rel='noopener noreferrer'
    >
      {children}
    </S.ButtonLink>
  );
}
