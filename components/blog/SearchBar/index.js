import styles from './SearchBar.module.scss';
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
        className={styles.searchInput}
        type='search'
        placeholder='keyword or topic'
        onChange={search}
      />
      <button type='submit' className={styles.submitButton} onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
