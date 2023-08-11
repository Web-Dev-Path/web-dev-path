import { Path } from 'types';

// static paths for dynamic route /blog/category/[id]
export const paths: Path[] = [
  { params: { tag: 'nextjs' } },
  { params: { tag: 'typescript' } },
];

export const tagToHeading = {
  nextjs: 'Next.js',
  typescript: 'TypeScript',
};
