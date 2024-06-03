import S from './styles';
import Image from 'next/image';
import Container from '@/components/containers/Container';
import Title from '@/components/snippets/Title';
export default function PostContent({ post }) {
  const publishedDate = post.published_at.split('T')[0];
  return (
    <Container>
      <Title title={post.title} />
      <S.SubTitle>{`${post.user.name}\u00A0\u00A0\u00A0${publishedDate}`}</S.SubTitle>
      <S.ImageWrapper>
        {post.cover_image && (
          <Image src={post.cover_image} alt='Blog post cover' fill />
        )}
      </S.ImageWrapper>
      <S.ContentContainer>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </S.ContentContainer>
    </Container>
  );
}
