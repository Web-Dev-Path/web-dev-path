import S from './styles';

const YoutubeEmbed = ({ id }) => {
  const url = `https://www.youtube.com/embed/${id}`;

  return (
    <S.YoutubeContainer>
      <S.YoutubeIframe src={url} allowfullscreen />
    </S.YoutubeContainer>
  );
};

export default YoutubeEmbed;
