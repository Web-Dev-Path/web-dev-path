import S from './styles';
import Image from 'next/image';
import Container from '@/components/containers/Container';
import { getUserBio } from '@/utils/getUserBio';
export default function AuthorBio({ user }) {
  const webdevpathUrl =
    'https://www.linkedin.com/company/web-dev-path/posts/?feedView=all';
  return (
    <S.GreyBG>
      <Container>
        <h3>Author Bio</h3>
        <S.FlexContainer>
          <S.ImageWrapper>
            <Image src={user.profile_image} alt="Author's profile" fill />
          </S.ImageWrapper>
          <S.SplitContainer>
            <p>
              {user.summary ? user.summary : getUserBio(user.name, user.id)}
            </p>
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
              <a href={webdevpathUrl} target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/svg/linkedin-portfolio.svg'
                  alt='Linkedin account of Web Dev Path'
                  height={48}
                  width={48}
                />
              </a>
            </S.LogosContainer>
          </S.SplitContainer>
        </S.FlexContainer>
      </Container>
    </S.GreyBG>
  );
}
