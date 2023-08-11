import { Dispatch, SetStateAction } from 'react';
import S from './styles';

type SetSearch = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
};

const SearchBar = ({ setSearchTerm, searchTerm }: SetSearch) => {
  const search = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <S.SearchBar>
      <S.SearchInput
        type='search'
        placeholder='keyword or topic'
        onChange={e => setSearchTerm(e.target.value)}
      />
      <S.SubmitButton type='submit' onClick={search}>
        Search
      </S.SubmitButton>
    </S.SearchBar>
  );
};

export default SearchBar;
