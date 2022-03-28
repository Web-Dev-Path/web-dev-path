import Link from 'next/link';
import Bracket from '../components/Bracket';
import Stick from '../components/Stick';
import TwoColumn from '../components/TwoColumn';
import CardsColumns from '../components/CardsColumns';
import styles from '../styles/Home.module.scss';
import { white, primary } from '../styles/TwoColumn.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.description}>
          <h1 className={styles.title}>&lt; Web Dev wannabe? /&gt;</h1>
          <p>
            Hold our hand and enjoy the road to learn how to start a new
            project, the magic behind Github while working in a team
            environment, and much more...
          </p>
        </div>

        <TwoColumn
          title="Let's grow together."
          image="/images/join-us.jpg"
          content="The Web Dev Path is a team of professional developers project that aims to provide a comprehensive path for people who seek to begin their web development journey."
          link="/about-us"
        />

        <Bracket className={styles.bracket} />

        <TwoColumn
          title="Get involved."
          content="Web Dev Path runs on volunteers. Here are the ways you can get involved with us:"
          rowOrder="row-reverse"
          customInnerClass="get-involved"
          color={primary}
          bgColor={white}
        />

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
          links={['/about-us', '/contact-us', '/about-us']}
          linkText={['Learn more', 'Contact us', 'Learn more']}
        />

        <Stick className={styles.stick} />

        <TwoColumn
          title="Nonprofit?"
          content="Web Dev Path can help your nonprofit with web projects of various sizes. Connect with us to find out how."
          color={white}
          bgColor={primary}
          btnColor={primary}
          btnBg={white}
          link="/about-us"
          customInnerClass="non-profit"
        />
      </div>
    </section>
  );
}
