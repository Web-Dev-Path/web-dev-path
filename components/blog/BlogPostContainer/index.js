import RevealContentContainer from '@/components/containers/RevealContentContainer';
import TwoColumn from '@/components/containers/TwoColumn';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import PostContent from '@/components/blog/PostContent';
import { useTheme } from 'styled-components';

const BlogPostContainer = ({ post }) => {
  const theme = useTheme();
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
        <RelatedPosts />
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='Still got questions?'
          content='Feel free to contact us.'
          image='/images/svg/square-brackets.svg'
          altTag='Hashtag'
          color={theme.colors.primaryContent}
          bgColor={theme.colors.white}
          $contentType='questions'
          link='/contact'
          linkText='Contact us'
          $btnColorScheme='inverted-grey'
        />
      </RevealContentContainer>
    </>
  );
};
export default BlogPostContainer;
