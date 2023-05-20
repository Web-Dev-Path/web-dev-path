import S from './styles';

export const Tag = ({ text }) => {
  return <S.TagLink href={`/blog/category/${text}`}>{text}</S.TagLink>;
};
