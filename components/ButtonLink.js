import Link from 'next/link';

export default function ButtonLink(props) {
  const { className, link, children } = props;
  return (
    <Link href={link}>
      <a className={className}>{children}</a>
    </Link>
  );
}
