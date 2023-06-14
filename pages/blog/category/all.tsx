import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import { blogRevalidate } from '@/utils/config';

export default function BlogCategory({ posts }) {
  return (
    <BlogPostsContainer
      posts={posts}
      swipe={false}
      heading='All Posts'
      viewall={false}
    />
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts = await res.json();
  return {
    props: {
      posts: posts.map(post => ({
        title: post.title,
        image: post.cover_image,
        altTag: post.title,
        content: post.description,
        link: post.url,
        linkText: 'Read more',
        tagList: post.tag_list,
      })),
    },
    revalidate: blogRevalidate,
  };
}
