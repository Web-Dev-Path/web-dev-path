import CardsColumns from '@/components/containers/CardsColumns';
import Card from '@/components/containers/Card';
import Title from '@/components/snippets/Title';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import S from './styles';
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
              <S.PostContainer>
                {posts?.map((p, index) => (
                  <Card customClass='blog' key={index} card={p} />
                ))}
              </S.PostContainer>
            </Container>
          )
        }

        {viewall && posts.length >= 3 ? (
          <Container>
            <S.ViewAllBottomLink
              href={tag ? `/blog/category/${tag}` : '/blog/category/all'}
            >
              view all
            </S.ViewAllBottomLink>
          </Container>
        ) : null}

        {back ? (
          <Container>
            <S.BackBottomLink href={`/blog`}>&#60; Back</S.BackBottomLink>
          </Container>
        ) : null}
      </div>
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
