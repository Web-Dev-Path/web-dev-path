import styles from '@/styles/SearchBar.module.scss';
import { useRef } from 'react';

const SearchBar = ({ items, setSearchTerm, setSearchResults }) => {
  const searchInput = useRef(null);
  const search = () => {
    const searchTerm = searchInput.current.value;
    if (!searchTerm) return setSearchResults(null);
    const results = items.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tagList.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setSearchResults(results);
    setSearchTerm(searchTerm);
  };
  return (
    <div className={styles.searchBar}>
      <input
        ref={searchInput}
        type='search'
        placeholder='keyword or topic'
        onChange={search}
      />
      <button type='submit' onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
