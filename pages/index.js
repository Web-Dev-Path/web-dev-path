import Link from 'next/link';
import Bracket from '../components/Bracket';
import Stick from '../components/Stick';
import TwoColumn from '../components/TwoColumn';
import ThreeColumn from '../components/ThreeColumn';
import styles from '../styles/Home.module.scss';
import { white, primary } from '../styles/TwoColumn.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>&lt; Web Dev wannabe? /&gt;</h1>
        <div className={styles.description}>
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
          color={primary}
          bgColor={white}
        />

        <ThreeColumn
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
          links={['/about-us', '/about-us', '/about-us']}
          linkText={['Learn more', 'Contact us', 'Contact us']}
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
        />

        <hr className={styles.divider} />
        <h2 className={styles.centerText}>
          Would you answer "yes" to any of these questions?
        </h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Are you learning web development and need mentorship?</p>
          </div>
          <div className={styles.card}>
            <p>Are you an experienced web dev who wants to become a mentor?</p>
          </div>
          <div className={styles.card}>
            <p>
              Are you a non-profit organization who needs help with a web
              project?
            </p>
          </div>
          <div className={styles.card}>
            <p>
              Are you a web dev looking for help or a code buddy for a project?
            </p>
          </div>
        </div>
        <div className={`${styles.learn_more} ${styles.centerText}`}>
          <h3>
            If so, you are probably in the right place and should learn more
            about us
          </h3>
          <button className={styles.button}>
            <Link href="/about-us">Learn More</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
