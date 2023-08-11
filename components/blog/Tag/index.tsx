import S from './styles';

type Tag = {
  text: string;
};

export const Tag = ({ text }: Tag) => {
  return <S.TagLink href={`/blog/category/${text}`}>{text}</S.TagLink>;
};
