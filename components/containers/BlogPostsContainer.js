import CardsColumns from '@/components/containers/CardsColumns';
import Card from '@/components/containers/Card';
import Container from '@/components/containers/Container';
import Title from '@/components/snippets/Title';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';

function* splitPosts(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const BlogPostsContainer = ({ posts, heading, swipe = true }) => {
  // process posts props (e.g. insert default image)
  posts.map(post => {
    if (!post.image) {
      post.image = '/images/svg/blogImage.svg';
    }
    return post;
  });

  return (
    <Container>
      <Title title={heading} />
      {
        // put in rows of 3 if more than 3 posts (for swipable cards)
        swipe
          ? [...splitPosts(posts, 3)].map((p, index) => (
              <CardsColumns key={index} cards={p} customClass='blog' />
            ))
          : posts.map((p, index) => <Card key={index} card={p} />)
      }
      <Link className={styles.viewAll} href='/blog/category/all'>
        view all
      </Link>
    </Container>
  );
};

export default BlogPostsContainer;
