import styles from '@/styles/SearchBar.module.scss';

const SearchBar = ({ posts, setSearchTerm, setSearchResults }) => {
  const handleChange = e => {
    if (!e.target.value) return setSearchResults(null);
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
    setSearchTerm(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type='search'
        placeholder='keyword or topic'
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </div>
  );
};

export default SearchBar;
