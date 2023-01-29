import { useEffect, useState } from 'react';
import BlogPostsContainer from '@/components/blog/BlogPostsContainer';
import SearchBar from '@/components/blog/SearchBar';
import Title from '@/components/snippets/Title';
import styles from '@/styles/Blog.module.scss';
import { blogRevalidate } from '@/utils/config';
import { tagToHeading } from '@/utils/blogCategories';

export default function Blog({ posts }) {
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('temp');
  const getPostsByTag = tag => {
    return posts.filter(post => post.tagList.includes(tag));
  };

  useEffect(() => {
    console.log('search result', searchResults);
  }, [searchResults]);

  return (
    <>
      <div className={styles.blogSearch}>
        <Title
          customClass='blogTitle'
          title={searchResults ? '' : 'Latest Posts'}
        />
        <SearchBar
          posts={posts}
          setSearchTerm={setSearchTerm}
          setSearchResults={setSearchResults}
        />
      </div>
      {searchResults ? (
        <BlogPostsContainer
          posts={searchResults}
          heading={`${searchResults.length} search Results for '${searchTerm}'`}
        />
      ) : (
        <>
          <BlogPostsContainer posts={posts.slice(0, 3)} />
          {Object.keys(tagToHeading).map(tag => (
            <BlogPostsContainer
              key={tag}
              posts={getPostsByTag(tag)}
              tag={tag}
            />
          ))}
        </>
      )}
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
