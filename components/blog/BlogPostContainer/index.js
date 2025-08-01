import RevealContentContainer from '@/components/containers/RevealContentContainer';
import TwoColumn from '@/components/containers/TwoColumn';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedOrLatestPosts from '@/components/blog/RelatedPosts';
import PostContent from '@/components/blog/PostContent';

const BlogPostContainer = ({ post, relatedPosts, latestPosts }) => {
  const { user } = post;
  return (
    <>
      <RevealContentContainer>
        <PostContent post={post} />
      </RevealContentContainer>
      <RevealContentContainer>
        <AuthorBio user={user} />
      </RevealContentContainer>
      <RevealContentContainer>
        <RelatedOrLatestPosts
          relatedPosts={relatedPosts}
          latestPosts={latestPosts}
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='Still got questions?'
          content='Feel free to contact us.'
          image='/images/svg/square-brackets.svg'
          altTag='Hashtag'
          color='var(--color-primary-content)'
          bgColor='var(--color-white)'
          link='/contact'
          linkText='Contact us'
          customInnerClass='questions'
          customBtnClass='inverted-grey'
        />
      </RevealContentContainer>
    </>
  );
};
export default BlogPostContainer;
