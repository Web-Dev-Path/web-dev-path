import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogPostContainer from '@/components/blog/BlogPostContainer';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const postRes = await fetch(`https://dev.to/api/articles/wdp/${slug}`);
        const post = await postRes.json();
        const userRes = await fetch(
          `https://dev.to/api/users/${post.user.user_id}`
        );
        const userData = await userRes.json();
        setPost({
          slug: post.slug,
          title: post.title,
          cover_image: post.cover_image,
          published_at: post.published_at,
          user: userData,
          body_html: post.body_html,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPostContainer post={post} />;
};

export default BlogPost;
