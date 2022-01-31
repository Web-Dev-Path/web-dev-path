import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <h1>Hello from the blog page</h1>
      <ul>
        <li>
          <Link href="/blog/first-post">
            <a>First Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
