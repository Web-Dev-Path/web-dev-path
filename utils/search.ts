export const blogSearch = (posts, searchTerm) => {
  if (!searchTerm) return null;
  return posts.filter(
    post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tagList.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
};
