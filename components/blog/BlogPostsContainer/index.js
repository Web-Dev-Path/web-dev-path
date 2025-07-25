import Link from 'next/link';
import { BlogCardsColumns } from '@/components/containers/CardColumns/BlogCardsColumns';
import { BlogCard } from '@/components/containers/Card/BlogCard';
import Title from '@/components/snippets/Title';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import { tagToHeading } from '@/utils/blogCategories';
import Container from '@/components/containers/Container';
import styles from './BlogPostsContainer.module.scss';

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
      <section className={styles.blogContainer}>
        {heading ? (
          <Container>
            <Title title={heading} />
          </Container>
        ) : tag ? (
          <Container>
            <Title title={tagToHeading[tag]} />
          </Container>
        ) : null}
        {swipe ? (
          <>
            {[posts.slice(0, 6)].map((p, index) => (
              <BlogCardsColumns key={index} cards={p} />
            ))}
          </>
        ) : (
          <Container>
            <div className={styles.postContainer}>
              {posts?.map((p, index) => (
                <BlogCard $cardType='blog' key={index} card={p} />
              ))}
            </div>
          </Container>
        )}

        {viewall && posts.length >= 3 ? (
          <Container>
            <Link
              href={tag ? `/blog/category/${tag}` : '/blog/category/all'}
              className={styles.viewAllBottomLink}
            >
              view all
            </Link>
          </Container>
        ) : null}

        {back ? (
          <Container>
            <Link href={`/blog`} className={styles.backBottomLink}>
              &#60; back
            </Link>
          </Container>
        ) : null}
      </section>
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
