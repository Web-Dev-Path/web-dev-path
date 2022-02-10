import Link from 'next/link';
import TwoColumn from '../components/TwoColumn';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>&lt; Web Dev wannabe? /&gt;</h1>
      <div className={styles.description}>
        <p>
          Hold our hand and enjoy the road to learn how to start a new project,
          the magic behind Github while working in a team environment, and much
          more...
        </p>
      </div>

      <TwoColumn
        title="Let's grow together."
        image="/images/home-two-column-image.jpg"
        content="The Web Dev Path is a team of professional developers project that aims to provide a comprehensive path for people who seek to begin their web development journey. "
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
            Are you a non-profit organization who needs help with a web project?
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
          If so, you are probably in the right place and should learn more about
          us
        </h3>
        <button className={styles.button}>
          <Link href="/about-us">Learn More</Link>
        </button>
      </div>
    </div>
  );
}
