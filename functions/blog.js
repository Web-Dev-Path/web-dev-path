//ISR (incremental static rendering) function that communicates to Netlify
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts = await res.json();

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      posts: posts.map(post => ({
        title: post.title,
        image: post.cover_image,
        altTag: post.title,
        content: post.description,
        link: post.url,
        linkText: 'Read more',
        tagList: post.tag_list,
      })),
    }),
  };
};
