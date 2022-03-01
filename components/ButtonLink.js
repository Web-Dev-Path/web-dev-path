import Link from 'next/link';

export default function ButtonLink(props) {
  const { className, link, children, styles } = props;
  return (
    <Link href={link}>
      <a className={className} style={styles}>
        {children}
      </a>
    </Link>
  );
}
