import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import styles from '@/styles/Blog.module.scss';
import Title from '@/components/snippets/Title';

export default function Blog({ posts }) {
  return (
    <Container>
      <div className={styles.blogSearch}>
        <Title customClass='blogTitle' title='Latest Posts' />
        <SearchBar />
      </div>
      <BlogPostsContainer posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://dev.to/api/articles?username=wdp&per_page=3'
  );
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
