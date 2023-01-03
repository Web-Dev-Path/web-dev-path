import BlogPostsContainer from '@/components/blog/BlogPostsContainer';

export default function BlogCategory({ posts }) {
  // TODO: Temporary, to show more posts
  posts = posts.concat(posts).concat(posts);

  return <BlogPostsContainer posts={posts} swipe={false} />;
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
      })),
    },
  };
}
