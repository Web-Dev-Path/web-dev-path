import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import styles from '@/styles/Blog.module.scss';
import Title from '@/components/snippets/Title';
import { blogRevalidate } from '@/utils/config';
import { tagToHeading } from '@/utils/blogCategories';

export default function Blog({ posts }) {
  const latestPosts = posts.slice(0, 3);
  const getPostsByTag = tag => {
    return posts.filter(post => post.tagList.includes(tag));
  };

  return (
    <>
      <div className={styles.blogSearch}>
        <Title customClass='blogTitle' title='Latest Posts' />
        <SearchBar />
      </div>
      <BlogPostsContainer posts={latestPosts} />
      {Object.keys(tagToHeading).map(tag => (
        <BlogPostsContainer key={tag} posts={getPostsByTag(tag)} tag={tag} />
      ))}
    </>
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
