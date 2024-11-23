import { useState } from 'react';
import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import Title from '@/components/snippets/Title';
import { BlogSearch } from '@/components/snippets/BlogSearch';
import { blogRevalidate } from '@/utils/config';
import { tagToHeading } from '@/utils/blogCategories';
import { blogSearch } from '@/utils/search';

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  let filteredPosts = posts;
  let heading;

  if (searchTerm) {
    filteredPosts = blogSearch(posts, searchTerm);

    heading = `${
      filteredPosts.length === 0 ? 'no' : filteredPosts.length
    } search ${
      filteredPosts.length > 1 ? 'results' : 'result'
    } for '${searchTerm}'`;
    filteredPosts.viewall = false;
  }

  return (
    <>
      <Container>
        <BlogSearch>
          <Title blogTitle title={!searchTerm && 'Latest Posts'} />
          <SearchBar setSearchTerm={setSearchTerm} />
        </BlogSearch>
      </Container>

      <BlogPostsContainer posts={filteredPosts} heading={heading} />
      {!searchTerm &&
        Object.keys(tagToHeading).map(tag => (
          <BlogPostsContainer
            key={tag}
            posts={posts.filter(post => post.tagList.includes(tag))}
            tag={tag}
          />
        ))}
    </>
  );
}

export async function getStaticProps() {
  const PER_PAGE = 1000
  const res = await fetch(`https://dev.to/api/articles?username=wdp&per_page=${PER_PAGE}`);
  const posts = await res.json();

  return {
    props: {
      posts: posts.map(post => ({
        title: post.title,
        image: post.cover_image,
        altTag: post.title,
        content: post.description,
        link: `/blog/post/${post.slug}`,
        linkText: 'Read more',
        tagList: post.tag_list,
      })),
    },
    revalidate: blogRevalidate,
  };
}
