import TwoColumn from '@/components/containers/TwoColumn';
import { CardsColumns } from '@/components/containers/CardColumns';
import S from '@/styles/pages/homeStyles';
import RevealContentContainer from '@/components/containers/RevealContentContainer';

export default function Home() {
  return (
    <>
      <RevealContentContainer>
        <TwoColumn
          title="Let's grow together."
          image='/images/join-us.webp'
          altTag='Join the project'
          content='Web Dev Path is an open-source initiative that provides hands-on experience in a simulated professional environment to people who seek to begin or move forward in their web development journey.'
          link='/about'
          customBtnClass='inverted-grey'
          bgColor='var(--color-light-bg)'
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <S.Bracket />
        <TwoColumn
          title='Get involved.'
          content='Web Dev Path runs on volunteers. Here are the ways you can get involved with us:'
          rowOrder='row-reverse'
          customInnerClass='get-involved'
          bgColor='var(--color-white)'
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
          color='var(--color-white)'
          bgColor='var(--color-primary-content)'
          link='/about'
          customInnerClass='non-profit'
          customBtnClass='inverted-white'
        />
      </RevealContentContainer>
    </>
  );
}
