import BlogPostsContainer from '@/components/blog/BlogPostsContainer/BlogPostsContainer';
import { paths, tagToHeading } from '@/utils/blogCategories';
import { useRouter } from 'next/router';
import { blogRevalidate } from '@/utils/config';

export default function BlogCategory({ posts }) {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <BlogPostsContainer
        posts={posts}
        swipe={false}
        heading={tagToHeading[tag] || `#${tag}`}
        viewall={false}
        back={true}
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts = await res.json();

  return {
    props: {
      posts: posts
        .filter(post => post.tag_list.includes(params.tag))
        .map(post => ({
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

export async function getStaticPaths() {
  return {
    paths,
    fallback: 'blocking',
  };
}
