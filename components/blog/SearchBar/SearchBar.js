// import styles from '@/styles/SearchBar.module.scss';
import S from './styles';
import { useRef } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const searchInput = useRef(null);
  const search = () => {
    setSearchTerm(searchInput.current.value);
  };
  return (
    <S.SearchBar>
      <S.SearchInput
        ref={searchInput}
        type='search'
        placeholder='keyword or topic'
        onChange={search}
      />
      <S.SubmitButton type='submit' onClick={search}>
        Search
      </S.SubmitButton>
    </S.SearchBar>
  );
};

export default SearchBar;
