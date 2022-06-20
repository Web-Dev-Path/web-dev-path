import Bracket from '@/components/decorations/Bracket';
import Stick from '@/components/decorations/Stick';
import TwoColumn from '@/components/containers/TwoColumn';
import CardsColumns from '@/components/containers/CardsColumns';
import styles from '@/styles/Home.module.scss';
import { white, primary } from '@/styles/TwoColumn.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';

export default function Home() {
  return (
    <>
      <RevealContentContainer>
        <TwoColumn
          title="Let's grow together."
          image='/images/join-us.jpg'
          content='The Web Dev Path is a team of professional developers project that aims to provide a comprehensive path for people who seek to begin their web development journey.'
          link='/about'
          customBtnClass='inverted-grey'
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <Bracket className={styles.bracket} />
        <TwoColumn
          title='Get involved.'
          content='Web Dev Path runs on volunteers. Here are the ways you can get involved with us:'
          rowOrder='row-reverse'
          customInnerClass='get-involved'
          bgColor={white}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <CardsColumns
          titles={['Join us', 'Volunteer', 'Become a mentor']}
          images={[
            '/images/join-us.jpg',
            '/images/volunteer.jpg',
            '/images/mentor.jpg',
          ]}
          altTags={['Join us', 'Volunteer', 'Become a mentor']}
          content={[
            'Are you learning web development and need mentorship? Are you a web dev looking for help or a code buddy for a project? ',
            'Would you like to volunteer? For roles other than mentor/mentee, please get in touch.',
            'Are you an experienced web dev who wants to become a mentor? Welcome!',
          ]}
          links={['/about', '/contact', '/about']}
          linkText={['Learn more', 'Contact us', 'Learn more']}
        />
      </RevealContentContainer>

      <RevealContentContainer>
        <Stick className={styles.stick} />

        <TwoColumn
          title='Nonprofit?'
          content='Web Dev Path can help your nonprofit with web projects of various sizes. Connect with us to find out how.'
          color={white}
          bgColor={primary}
          link='/about'
          customInnerClass='non-profit'
          customBtnClass='inverted-white'
        />
      </RevealContentContainer>
    </>
  );
}
