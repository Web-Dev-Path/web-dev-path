import TwoColumn from '@/components/containers/TwoColumn/TwoColumn';
import CardsColumns from '@/components/containers/CardColumns/CardsColumns';
import S from '@/styles/pages/homeStyles';
import {
  $white,
  $primaryContentColor,
  $lightBgColor,
} from '@/styles/_variables';
import RevealContentContainer from '@/components/containers/RevealContentContainer/RevealContentContainer';

export default function Home() {
  return (
    <>
      <RevealContentContainer>
        <TwoColumn
          title="Let's grow together."
          image='/images/join-us.webp'
          altTag='Join the project'
          content='The Web Dev Path is a team of professional developers project that aims to provide a comprehensive path for people who seek to begin their web development journey.'
          link='/about'
          customBtnClass='inverted-grey'
          bgColor={$lightBgColor}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <S.Bracket />
        <TwoColumn
          title='Get involved.'
          content='Web Dev Path runs on volunteers. Here are the ways you can get involved with us:'
          rowOrder='row-reverse'
          $contentType='get-involved'
          customInnerClass='get-involved'
          bgColor={$white}
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
          color={$white}
          bgColor={$primaryContentColor}
          link='/about'
          $contentType='non-profit'
          customInnerClass='non-profit'
          customBtnClass='inverted-white'
        />
      </RevealContentContainer>
    </>
  );
}
