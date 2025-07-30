import TwoColumn from '@/components/containers/TwoColumn';
import { CardsColumns } from '@/components/containers/CardColumns';
import S from '@/styles/pages/homeStyles';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <RevealContentContainer>
        <TwoColumn
          title="Let's grow together."
          image='/images/join-us.webp'
          altTag='Three people collaborating happily on a laptop in a modern workspace'
          content='Web Dev Path is an open-source initiative that provides hands-on experience in a simulated professional environment to people who seek to begin or move forward in their web development journey.'
          link='/about'
          customBtnClass='inverted-grey'
          bgColor={theme.colors.lightBg}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <S.Bracket />
        <TwoColumn
          title='Get involved.'
          content='Web Dev Path runs on volunteers. Here are the ways you can get involved with us:'
          rowOrder='row-reverse'
          $contentType='get-involved'
          bgColor={theme.colors.white}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <CardsColumns
          cards={[
            {
              title: 'Join the project',
              image: '/images/join-us.webp',
              altTag: 'Join the project',
              content:
                'Are you learning web development and need mentorship? Are you a web dev looking for help or a code buddy for a project?',
              link: '/about',
              linkText: 'Learn more',
            },
            {
              title: 'Volunteer to learn together',
              image: '/images/volunteer.webp',
              altTag: 'Volunteer to learn together',
              content:
                'Would you like to volunteer? For roles other than mentor/mentee, please get in touch.',
              link: '/contact',
              linkText: 'Contact us',
            },
            {
              title: 'Become a project mentor',
              image: '/images/mentor.webp',
              altTag: 'Become a project mentor',
              content:
                'Are you an experienced web dev who wants to become a mentor? Welcome!',
              link: '/about',
              linkText: 'Learn more',
            },
          ]}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <S.Stick />

        <TwoColumn
          title='Nonprofit?'
          content='Web Dev Path can help your nonprofit with web projects of various sizes. Connect with us to find out how.'
          color={theme.colors.white}
          bgColor={theme.colors.primaryContent}
          link='/about'
          $contentType='non-profit'
          customBtnClass='inverted-white'
        />
      </RevealContentContainer>
    </>
  );
}
