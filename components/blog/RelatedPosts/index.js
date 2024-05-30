import S from './styles';

export default function RelatedPosts() {
  const relatedPosts = [
    { title: 'Example Post Title', link: '/blog', id: 1 },
    { title: 'Example Post Title', link: '/blog', id: 2 },
    { title: 'Example Post Title', link: '/blog', id: 3 },
    { title: 'Example Post Title', link: '/blog', id: 4 },
    { title: 'Example Post Title', link: '/blog', id: 5 },
  ];
  return (
    <S.Container>
      <S.Title>Related Posts</S.Title>
      <S.List>
        {relatedPosts.map(relatedPost => {
          return (
            <S.Li key={relatedPost.id}>
              <S.LinkWrapper>
                <a href={relatedPost.link}>{relatedPost.title}</a>
              </S.LinkWrapper>
            </S.Li>
          );
        })}
      </S.List>
    </S.Container>
  );
}
