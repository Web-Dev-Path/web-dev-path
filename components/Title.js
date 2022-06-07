import TwoColumn from './TwoColumn';
import { white, primary } from '../styles/TwoColumn.module.scss';
import styles from '../styles/Title.module.scss';
import Container from './Container';

const Title = () => {
  return (
    <Container>
      <h2 className={styles.title}>About Web Dev Path</h2>
      <TwoColumn
        content={
          <div>
            The Web Dev Path project was idealized in 2020 in consequence of
            many conversations with aspirant web developers as well as by
            considering some personal experiences. When talking to other junior
            developers, it was evident the lack of practical experience with
            version control in a team dynamic was making their integration in a
            professional environment harder. Most of those new graduates used a
            version control feature, such as <u>GitHub</u> or <u>Bitbucket</u>,
            as a repository for their personal projects where they were the only
            participants. So, all that “branch out and PR review” enriching
            process was completely unknown to them. That happened to be a
            problem either for being considered for “junior” positions and after
            being hired because, in most cases, their team lead was a very, very
            busy senior developer…
          </div>
        }
        rowOrder="row-reverse"
        image="/images/svg/open-square-bracket.svg"
        color={primary}
        bgColor={white}
        customInnerClass="about-title"
      />
      <TwoColumn
        content={
          <div>
            Another problem found out is that collaborating with open-source
            projects, the way it is possible to gain some version control
            experience, can be quite intimidating since there isn’t a clear
            mentoring aspect. It can take years for someone to develop “a logic
            mindset” that allows solving a problem by using a programming
            language, so just going to an open-source project with a list of
            available tasks that don’t make any sense won’t cut it.
          </div>
        }
        image="/images/svg/open-angle-bracket.svg"
        color={primary}
        bgColor={white}
        customInnerClass="about-title"
      />
    </Container>
  );
};

export default Title;
