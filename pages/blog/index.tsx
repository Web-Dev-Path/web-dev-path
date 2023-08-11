import { useState } from 'react';
import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import Title from '@/components/snippets/Title';
import { BlogSearch } from '@/components/snippets/BlogSearch';
import { blogRevalidate } from '@/utils/config';
import { tagToHeading } from '@/utils/blogCategories';
import { blogSearch } from '@/utils/search';
import { BlogContainer, BlogPost, PostResponse, Posts } from 'types';

export default function Blog({ posts }: Posts) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  let filteredData: Partial<BlogContainer> = {
    posts: posts.slice(0, 3),
  };

  if (searchTerm) {
    const filteredPosts: BlogPost[] | null = blogSearch({
      posts,
      searchTerm,
    });

    if (filteredPosts) {
      filteredData.posts = filteredPosts;
      filteredData.heading = `${
        filteredPosts?.length === 0 ? 'no' : filteredPosts?.length
      } search ${
        filteredPosts?.length > 1 ? 'results' : 'result'
      } for '${searchTerm}'`;
      filteredData.viewall = false;
    }
  }

  return (
    <>
      <Container>
        <BlogSearch>
          <Title title={!searchTerm && 'Latest Posts'} />
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </BlogSearch>
      </Container>

      <BlogPostsContainer {...filteredData} />
      {!searchTerm &&
        Object.keys(tagToHeading).map(tag => (
          <BlogPostsContainer
            key={tag}
            posts={
              posts ? posts.filter(post => post.tagList.includes(tag)) : []
            }
            tag={tag}
          />
        ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts: PostResponse[] = await res.json();

  return {
    props: {
      posts: posts.map(post => ({
        title: post.title,
        image: post.cover_image,
        altTag: post.title,
        content: post.description,
        link: post.url,
        linkText: 'Read more',
        tagList: post.tag_list,
      })),
    },
    revalidate: blogRevalidate,
  };
}
