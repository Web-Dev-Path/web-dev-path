import S from './styles';
import Container from '@/components/containers/Container';

export default function RelatedPosts({ relatedPosts }) {
  return (
    <Container>
      <h3>Related Posts</h3>
      <S.List>
        {relatedPosts.map(relatedPost => {
          return (
            <li key={relatedPost.id}>
              <a href={`/blog/post/${relatedPost.slug}`}>{relatedPost.title}</a>
            </li>
          );
        })}
      </S.List>
    </Container>
  );
}
