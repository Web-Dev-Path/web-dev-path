// import btnStyles from '@/styles/ButtonLink.module.scss';
import S from './styles';

/*  The component supports the use of target with the property "openNewTab" to open the
 link in a new tab.*/
console.log('hello');
console.log(S);
export default function ButtonLink({
  customClassName,
  link,
  children,
  styles,
  openNewTab,
}) {
  return (
    // <a
    //   href={link}
    //   className={
    //     customClassName
    //       ? `${btnStyles.btn} ${btnStyles[customClassName]}`
    //       : btnStyles.btn
    //   }
    //   style={styles}
    //   target={openNewTab ? '_blank' : undefined}
    //   rel='noopener noreferrer'
    // >
    //   {children}
    // </a>

    <S.ButtonLink
      href={link}
      // style={styles}
      // className={customClassName}
      $colorScheme={customClassName}
      target={openNewTab ? '_blank' : undefined}
      rel='noopener noreferrer'
    >
      {children}
    </S.ButtonLink>
  );
}
