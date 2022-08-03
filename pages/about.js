import RevealContentContainer from '@/components/containers/RevealContentContainer';
// import Title from '@/components/snippets/Title';
import TwoColumn from '@/components/containers/TwoColumn';
import { white, primary, primaryAccent } from '@/styles/TwoColumn.module.scss';
// import Container from '@/components/containers/Container';

export default function AboutUs() {
  return (
    <div className='about-us'>
      <RevealContentContainer>
        {/* ================================FIRST ABOUT SECTION============== */}
        {/* <Container> */}
        {/* <Title title='Our background' /> */}
        <TwoColumn
          title='Our background'
          content={
            <div>
              The Web Dev Path project was idealized in 2020 in consequence of
              many conversations with aspirant web developers as well as by
              considering some personal experiences.
              <br />
              <br />
              When talking to other junior developers, it was evident the lack
              of practical experience with version control in a team dynamic was
              making their integration in a professional environment harder.
            </div>
          }
          rowOrder='row'
          image='/images/svg/square-brackets.svg'
          color={primary}
          bgColor={primaryAccent}
          customInnerClass='our-background'
        />
        {/* </Container> */}
      </RevealContentContainer>

      <RevealContentContainer>
        {/* <Container> */}
          {/* <Title title='Peer reviews' /> */}
          <TwoColumn
            title='Peer reviews'
            content={
              <div>
                Most of those new graduates used a version control feature, such
                as&nbsp;
                <a
                  target='_blank'
                  href='http://www.github.com'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>{' '}
                or&nbsp;
                <a
                  target='_blank'
                  href='http://www.bitbucket.com'
                  rel='noopener noreferrer'
                >
                  Bitbucket
                </a>
                , as a repository for their personal projects where they were
                the only participants. So, all that “branch out and PR review”
                enriching process was completely unknown to them.
                <br />
                <br />
                That happened to be a problem either for being considered for
                “junior” positions and after being hired because, in most cases,
                their team lead was a very, very busy senior developer…
              </div>
            }
            rowOrder='row-reverse'
            image='/images/svg/open-angle-bracket.svg'
            color={primary}
            bgColor={white}
            customInnerClass='about-content'
          />
          <TwoColumn
            title='Version control'
            content={
              <div>
                Another problem found out is that collaborating with open-source
                projects, the way it is possible to gain some version control
                experience, can be quite intimidating since there isn’t a clear
                mentoring aspect.
                <br />
                <br />
                It can take years for someone to develop “a logic mindset” that
                allows solving a problem by using a programming language, so
                just going to an open-source project with a list of available
                tasks that don’t make any sense won’t cut it.
              </div>
            }
            image='/images/svg/close-angle-bracket.svg'
            color={primary}
            bgColor={white}
            customInnerClass='about-content'
          />
        {/* </Container> */}
      </RevealContentContainer>

       {/* ================================FIRST ABOUT SECTION============== */}

      {/* <RevealContentContainer>
        <Container>
          <Title title="Our goals" />
        </Container>
      </RevealContentContainer> */}
    </div>
  );
}
