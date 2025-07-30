import styles from './PostContent.module.scss';
import Image from 'next/image';
import Container from '@/components/containers/Container';

export default function PostContent({ post }) {
  const publishedDate = post.published_at.split('T')[0];
  return (
    <Container>
      <h1>{post.title}</h1>
      <p
        className={styles.subtitle}
      >{`${post.user.name}\u00A0\u00A0\u00A0${publishedDate}`}</p>
      {post.cover_image && (
        <div className={styles.imageWrapper}>
          <Image src={post.cover_image} alt='Blog post cover' fill />
        </div>
      )}
      <div className={styles.contentContainer}>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </div>
    </Container>
  );
}
