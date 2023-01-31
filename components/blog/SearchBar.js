import styles from '@/styles/SearchBar.module.scss';
import { useRef } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const searchInput = useRef(null);
  const search = () => {
    setSearchTerm(searchInput.current.value);
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
