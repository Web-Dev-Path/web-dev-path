import Image from 'next/image';
import S from './styles';

export default function Member({
  image,
  name,
  title,
  position,
  about,
  linkedIn,
  portfolio,
}) {
  return (
    <S.Card>
      {image && (
        <S.ImageWrapper>
          <Image src={image} alt={name} fill />
        </S.ImageWrapper>
      )}

      <S.Name>{name}</S.Name>
      <S.Title>{title}</S.Title>
      <S.Position>{position}</S.Position>
      <S.Content>
        {linkedIn && (
          <S.LinkWrapper>
            <S.Image
              src='/images/svg/linkedin-portfolio.svg'
              alt='LinkedIn'
              height={25}
              width={25}
            />
            <a
              href={`https://linkedin.com/in/${linkedIn}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {linkedIn}
            </a>
          </S.LinkWrapper>
        )}
        {portfolio && (
          <S.LinkWrapper>
            <Image
              src='/images/svg/globe.svg'
              alt='Web Site'
              height={25}
              width={25}
            />
            <a
              href={`https://${portfolio}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {portfolio}
            </a>
          </S.LinkWrapper>
        )}

        <S.Paragraph>{about}</S.Paragraph>
      </S.Content>
    </S.Card>
  );
}
