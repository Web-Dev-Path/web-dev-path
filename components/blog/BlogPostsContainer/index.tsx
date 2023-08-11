import { BlogCardsColumns } from '@/components/containers/CardColumns/BlogCardsColumns';
import { BlogCard } from '@/components/containers/Card/BlogCard';
import Title from '@/components/snippets/Title';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import S from './styles';
import Container from '@/components/containers/Container';
import { BlogContainer, BlogPost } from 'types';

function* splitPosts(arr: BlogPost[], n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const BlogPostsContainer = ({
  posts = [],
  heading,
  tag,
  swipe = true,
  viewall = true,
  back = false,
}: Partial<BlogContainer>) => {
  // process posts props (e.g. insert default image)
  posts &&
    posts.map(post => {
      if (!post.image) {
        post.image = '/images/svg/blogImage.svg';
      }
      return post;
    });

  return (
    <RevealContentContainer>
      {posts && (
        <S.BlogContainer>
          {heading ? (
            <Container>
              <Title title={heading} />
            </Container>
          ) : tag ? (
            <Container>
              <Title title={`${tag}`} />
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
                    <BlogCard key={index} card={p} />
                  ))}
                </S.PostContainer>
              </Container>
            )
          }

          {viewall && posts?.length >= 3 ? (
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
      )}
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
