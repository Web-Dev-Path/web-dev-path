export const getRelatedOrLatestPosts = async post => {
  const postsRes = await fetch('https://dev.to/api/articles?username=wdp');
  const allPosts = await postsRes.json();
  const relatedPosts = allPosts
    .filter(
      relatedPost =>
        relatedPost.id !== post.id &&
        relatedPost.tag_list.some(tag => post.tag_list.includes(tag))
    )
    .slice(0, 5);
  const latestPosts =
    relatedPosts.length == 0
      ? allPosts.filter(latestPost => latestPost.id != post.id).slice(0, 5)
      : [];
  return { relatedPosts, latestPosts };
};
