import BlogPostContainer from '@/components/blog/BlogPostContainer';
import { post, user } from '@/utils/blogContent';

const BlogPost = () => {
  post['user']['summary'] = user.summary;
  return <BlogPostContainer post={post} userSummary={user.summary} />;
};

export default BlogPost;
