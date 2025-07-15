import Container from '@/components/containers/Container';
import styles from './RelatedPosts.module.scss';

export default function RelatedOrLatestPosts({ relatedPosts, latestPosts }) {
  return (
    <Container>
      {relatedPosts.length != 0 ? (
        <>
          <h3>Related Posts</h3>
          <ul className={styles.list}>
            {relatedPosts.map(relatedPost => {
              return (
                <li key={relatedPost.id}>
                  <a href={`/blog/post/${relatedPost.slug}`}>
                    {relatedPost.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <h3>Latest Posts</h3>
          <ul className={styles.list}>
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
          </ul>
        </>
      )}
    </Container>
  );
}
