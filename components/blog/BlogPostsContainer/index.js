import { BlogCardsColumns } from '@/components/containers/CardColumns/BlogCardsColumns';
import { BlogCard } from '@/components/containers/Card/BlogCard';
import Title from '@/components/snippets/Title';
import Link from 'next/link';
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
      <S.BlogContainer>
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
                <BlogCardsColumns key={index} cards={p} />
              ))}
            </>
          ) : (
            <Container>
              <S.PostContainer>
                {posts?.map((p, index) => (
                  <BlogCard $cardType='blog' key={index} card={p} />
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
      </S.BlogContainer>
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
