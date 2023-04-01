import CardsColumns from '@/components/containers/CardsColumns';
import Card from '@/components/containers/Card';
import Title from '@/components/snippets/Title';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import { tagToHeading } from '@/utils/blogCategories';
import Container from '@/components/containers/Container';

function* splitPosts(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const BlogPostsContainer = ({
  posts,
  heading,
  tag,
  swipe = true,
  viewall = true,
  back = false,
}) => {
  // process posts props (e.g. insert default image)
  posts.map(post => {
    if (!post.image) {
      post.image = '/images/svg/blogImage.svg';
    }
    return post;
  });

  return (
    <RevealContentContainer>
      <div className={styles.blogContainer}>
        {heading ? (
          <Container>
            <Title title={heading} />
          </Container>
        ) : tag ? (
          <Container>
            <Title title={tagToHeading[tag]} />
          </Container>
        ) : null}
        {
          // put in rows of 3 if more than 3 posts (for swipable cards)
          swipe ? (
            <>
              {[...splitPosts(posts, 3)].map((p, index) => (
                <CardsColumns key={index} cards={p} customClass='blog' />
              ))}
            </>
          ) : (
            <Container>
              <div className={styles.postContainer}>
                {posts?.map((p, index) => (
                  <Card customClass='blog' key={index} card={p} />
                ))}
              </div>
            </Container>
          )
        }
        {viewall && posts.length >= 3 ? (
          <Container>
            <Link
              className={`${styles.bottomLink} ${styles.viewAll}`}
              href={tag ? `/blog/category/${tag}` : '/blog/category/all'}
            >
              view all
            </Link>
          </Container>
        ) : null}
        {back ? (
          <Container>
            <Link
              className={`${styles.bottomLink} ${styles.backLink}}`}
              href={`/blog`}
            >
              &#60; Back
            </Link>
          </Container>
        ) : null}
      </div>
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
