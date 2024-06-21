import BlogPostContainer from '@/components/blog/BlogPostContainer';
import { blogRevalidate } from '@/utils/config';
import { useRouter } from 'next/router';

const BlogPost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <BlogPostContainer post={post} />;
};

export default BlogPost;

export async function getStaticPaths() {
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts = await res.json();
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const postRes = await fetch(`https://dev.to/api/articles/wdp/${params.slug}`);
  const post = await postRes.json();
  const userRes = await fetch(`https://dev.to/api/users/${post.user.user_id}`);
  const userData = await userRes.json();
  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        cover_image: post.cover_image,
        published_at: post.published_at,
        user: userData,
        body_html: post.body_html,
      },
    },
    revalidate: blogRevalidate,
  };
}