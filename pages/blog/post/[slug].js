import BlogPostContainer from '@/components/blog/BlogPostContainer';
import { blogRevalidate } from '@/utils/config';
import { useRouter } from 'next/router';
import { getUserData } from '@/utils/getUserBio';

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
  try {
    const postRes = await fetch(
      `https://dev.to/api/articles/wdp/${params.slug}`
    );
    const post = await postRes.json();
    const userData = post.user;
    const localUserData = getUserData(userData.user_id);
    userData['linkedIn'] = localUserData.linkedIn
      ? 'in/' + localUserData.linkedIn
      : 'company/web-dev-path';
    userData['summary'] =
      'devtoSummary' in localUserData
        ? localUserData['devtoSummary']
        : localUserData['about'];
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
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}
