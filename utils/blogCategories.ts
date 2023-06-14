// static paths for dynamic route /blog/category/[id]
export const paths = [
  { params: { tag: 'nextjs' } },
  { params: { tag: 'typescript' } },
];

export const tagToHeading = {
  nextjs: 'Next.js',
  typescript: 'TypeScript',
};
