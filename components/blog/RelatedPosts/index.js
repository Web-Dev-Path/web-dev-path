import S from './styles';
import Container from '@/components/containers/Container';

export default function RelatedOrLatestPosts({ relatedPosts, latestPosts }) {
  return (
    <Container>
      {relatedPosts.length != 0 ? (
        <>
          <h3>Related Posts</h3>
          <S.List>
            {relatedPosts.map(relatedPost => {
              return (
                <li key={relatedPost.id}>
                  <a href={`/blog/post/${relatedPost.slug}`}>
                    {relatedPost.title}
                  </a>
                </li>
              );
            })}
          </S.List>
        </>
      ) : (
        <>
          <h3>Latest Posts</h3>
          <S.List>
            {latestPosts &&
              latestPosts.map(latestPost => {
                return (
                  <li key={latestPost.id}>
                    <a href={`/blog/post/${latestPost.slug}`}>
                      {latestPost.title}
                    </a>
                  </li>
                );
              })}
          </S.List>
        </>
      )}
    </Container>
  );
}
