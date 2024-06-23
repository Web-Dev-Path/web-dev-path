export const getRelatedPosts = async post => {
  const postsRes = await fetch('https://dev.to/api/articles?username=wdp');
  const allPosts = await postsRes.json();
  const relatedPosts = allPosts
    .filter(
      relatedPost =>
        relatedPost.id !== post.id &&
        relatedPost.tag_list.some(tag => post.tag_list.includes(tag))
    )
    .map(relatedPost => ({
      id: relatedPost.id,
      slug: relatedPost.slug,
      title: relatedPost.title,
    }))
    .slice(0, 5);
  return relatedPosts;
};
