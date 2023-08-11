import { BlogPost } from 'types';

type BlogSearch = {
  posts: BlogPost[];
  searchTerm: string;
};

export const blogSearch = ({
  posts,
  searchTerm,
}: BlogSearch): null | BlogPost[] => {
  if (!searchTerm) return null;
  return posts
    ? posts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tagList.some(tag =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : null;
};
