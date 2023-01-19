import styles from '@/styles/SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type='search' placeholder='keyword or topic' />
      <button type='submit'>Search</button>
    </div>
  );
};

export default SearchBar;
