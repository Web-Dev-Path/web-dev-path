import Link from 'next/link';
import btnStyles from '../styles/ButtonLink.module.scss';

export default function ButtonLink({
  customClassName,
  link,
  children,
  styles,
}) {
  return (
    <Link href={link}>
      <a
        className={`${btnStyles.btn} ${btnStyles[customClassName]}`}
        style={styles}
      >
        {children}
      </a>
    </Link>
  );
}
