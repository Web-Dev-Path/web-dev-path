import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Dev Path</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>&lt; Web Dev wannabe? /&gt;</h1>
      <div className={styles.description}>
        <p>
          Hold our hand and enjoy the road to learn how to start a new project,
          the magic behind Github while working in a team environment, and much
          more...
        </p>
      </div>
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

      <div>
        <h3 className={styles.centerText}>
          If so, you are probably in the right place and should learn more about
          us
        </h3>
      </div>

      <div className={styles.centerText}>
        <button className={styles.button}>
          <Link href="/about-us">Learn More</Link>
        </button>
      </div>
    </div>
  );
}
