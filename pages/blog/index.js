import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import styles from '@/styles/Blog.module.scss';
import Title from '@/components/snippets/Title';

export default function Blog({ posts }) {
  const latestPosts = posts.slice(0, 3);
  const nextJsPosts = posts.filter(post => post.tagList.includes('nextjs'));
  const typescriptPosts = posts.filter(post =>
    post.tagList.includes('typescript')
  );

  return (
    <>
      <div className={styles.blogSearch}>
        <Title customClass='blogTitle' title='Latest Posts' />
        {/* <SearchBar /> */}
      </div>
      <BlogPostsContainer posts={latestPosts} />
      <BlogPostsContainer posts={nextJsPosts} tag='nextjs' />
      <BlogPostsContainer posts={typescriptPosts} tag='typescript' />
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
  };
}
