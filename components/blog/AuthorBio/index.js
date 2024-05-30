import S from './styles';
import Image from 'next/image';

export default function AuthorBio({ user }) {
  return (
    <S.Container>
      <S.Title>Author Bio</S.Title>
      <S.FlexContainer>
        <S.ImageWrapper>
          <Image src={user.profile_image} alt="Author's profile" fill />
        </S.ImageWrapper>
        <S.SplitContainer>
          <S.Paragraph>{user.summary}</S.Paragraph>
          <S.LogosContainer>
            {user.twitter_username && (
              <a
                href={`https://x.com/${user.twitter_username}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/images/svg/x.svg'
                  alt='X logo'
                  height={48}
                  width={48}
                />
              </a>
            )}
            {user.github_username && (
              <a
                href={`https://github.com/${user.github_username}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/images/svg/github-black.svg'
                  alt='Github Logo'
                  height={48}
                  width={48}
                />
              </a>
            )}
            {user.website_url && (
              <a
                href={user.website_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/images/svg/globe.svg'
                  alt='Web Site'
                  height={48}
                  width={48}
                />
              </a>
            )}
          </S.LogosContainer>
        </S.SplitContainer>
      </S.FlexContainer>
    </S.Container>
  );
}
