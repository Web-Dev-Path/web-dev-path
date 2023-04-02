import { useState } from 'react';
import BlogPostsContainer from '@/components/blog/BlogPostsContainer/BlogPostsContainer';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/blog/SearchBar';
import Title from '@/components/snippets/Title';
// import styles from '@/styles/Blog.module.scss';
import S from './styles';
import { blogRevalidate } from '@/utils/config';
import { tagToHeading } from '@/utils/blogCategories';
import { blogSearch } from '@/utils/search';

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = {
    posts: posts.slice(0, 3),
  };

  if (searchTerm) {
    const filteredPosts = blogSearch(posts, searchTerm);
    filteredData.posts = filteredPosts;
    filteredData.heading = `${
      filteredPosts.length === 0 ? 'no' : filteredPosts.length
    } search ${
      filteredPosts.length > 1 ? 'results' : 'result'
    } for '${searchTerm}'`;
    filteredData.viewall = false;
  }

  return (
    <>
      <Container>
        <S.BlogSearch>
          <Title blogTitle title={!searchTerm && 'Latest Posts'} />
          <SearchBar setSearchTerm={setSearchTerm} />
        </S.BlogSearch>
      </Container>

      <BlogPostsContainer {...filteredData} />
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
  const res = await fetch('https://dev.to/api/articles?username=wdp');
  const posts = await res.json();

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
