import S from './styles';
import Container from '@/components/containers/Container';

export default function RelatedPosts() {
  const relatedPosts = [
    { title: 'Example Post Title', link: '/blog', id: 1 },
    { title: 'Example Post Title', link: '/blog', id: 2 },
    { title: 'Example Post Title', link: '/blog', id: 3 },
    { title: 'Example Post Title', link: '/blog', id: 4 },
    { title: 'Example Post Title', link: '/blog', id: 5 },
  ];
  return (
    <Container>
      <h3>Related Posts</h3>
      <S.List>
        {relatedPosts.map(relatedPost => {
          return (
            <li key={relatedPost.id}>
              <a href={relatedPost.link}>{relatedPost.title}</a>
            </li>
          );
        })}
      </S.List>
    </Container>
  );
}
