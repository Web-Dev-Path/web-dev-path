import RevealContentContainer from '@/components/containers/RevealContentContainer/RevealContentContainer';
import TwoColumn from '@/components/containers/TwoColumn';
import {
  white,
  primary,
  primaryAccent,
  lightBgColor,
} from '@/styles/TwoColumn.module.scss';
import CardsColumns from '@/components/containers/CardsColumns';
import Title from '@/components/snippets/Title';
import Wrapper from '@/components/containers/Wrapper/Wrapper';
import Container from '@/components/containers/Container/Container';
import Row from '@/components/containers/Row/Row';
import Member from '@/components/containers/Member';
import { whoWeAre } from '@/utils/about';

export default function AboutUs() {
  return (
    <div className='about-us'>
      <RevealContentContainer>
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
          altTag='Square Brackets'
          color={primary}
          bgColor={primaryAccent}
          customInnerClass='our-background'
        />
      </RevealContentContainer>

      <RevealContentContainer>
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
              , as a repository for their personal projects where they were the
              only participants. So, all that “branch out and PR review”
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
          altTag='Open angle bracket'
          color={primary}
          bgColor={white}
          customInnerClass='our-process'
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
              allows solving a problem by using a programming language, so just
              going to an open-source project with a list of available tasks
              that don’t make any sense won’t cut it.
            </div>
          }
          image='/images/svg/close-angle-bracket.svg'
          altTag='close-angle-bracket'
          color={primary}
          bgColor={white}
          customInnerClass='our-process'
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <Container>
          <Title title='Our goals' />
        </Container>
        <CardsColumns
          cards={[
            {
              title: '1',
              content:
                'To provide a safe space for juniors to learn how to communicate in a simulated professional environment.',
            },
            {
              title: '2',
              content:
                'To offer more detailed tasks (GitHub issues) and help the developer assimilate the logical mindset required in a structured project, under guidance following the industry’s best practices throughout the entire process.',
            },
          ]}
          customClass='our-goals'
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='Our purpose'
          content={
            <div>
              To do so, we're coding this platform in Next.js. In the short
              term, we intend to have a blog where the participants can post
              anything related to the web development world.
              <br />
              <br />
              The ultimate purpose though is to make this platform a portal
              where Non-Profit Organizations can find support for their web
              products. That way, new graduates can gain some experience while
              helping a good cause.
            </div>
          }
          rowOrder='row-reverse'
          image='/images/svg/semi-colon.svg'
          altTag='Semi-colon'
          color={primary}
          bgColor={white}
          customInnerClass='our-purpose'
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='Wanna learn more?'
          content={''}
          image='/images/svg/close-curly-bracket.svg'
          altTag='Close curly bracket'
          color={primary}
          bgColor={lightBgColor}
          customInnerClass='wanna-learn-more'
        />
        <TwoColumn
          title='Junior Developers'
          content={
            'If you are a junior web developer looking for some guidance and mentoring, ' +
            'we invite you to join us and start coding our platform. ' +
            "You will learn how to code in a team environment by following issue's " +
            'instructions and submitting your code to our repository through a ' +
            'PR while guided throughout the entire process.\n'
          }
          linkText='Our wiki'
          openNewTab
          link='https://github.com/Web-Dev-Path/web-dev-path/wiki'
          customBtnClass='inverted-grey'
          color={primary}
          bgColor={lightBgColor}
          customInnerClass='two-text-columns'
          secondTextColumn={
            <TwoColumn
              title='Experienced Developers'
              content={
                'If you are an experienced and patient-loving developer, ' +
                'a true rockstar who wants to mentor juniors, ' +
                "it will be wonderful to have your help to review those PR's, " +
                'write detailed issues and guide the developers when necessary.\n'
              }
              linkText='Contact us'
              link='/contact'
              customBtnClass='inverted-grey'
              color={primary}
              bgColor={lightBgColor}
              customInnerClass='second-text-column'
            />
          }
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='How to get started?'
          content={
            <div>
              After taking a look at our project&nbsp;
              <a
                target='_blank'
                href='https://github.com/Web-Dev-Path/web-dev-path#readme'
                rel='noopener noreferrer'
              >
                README
              </a>{' '}
              and&nbsp;
              <a
                target='_blank'
                href='https://github.com/Web-Dev-Path/web-dev-path/wiki'
                rel='noopener noreferrer'
              >
                wiki
              </a>
              , just send us an email sharing with us about your journey in tech
              and why you’re interested in joining us.
              <br />
              We've got you!
            </div>
          }
          rowOrder='row-reverse'
          image='/images/svg/slash.svg'
          altTag='Slash'
          color={primary}
          bgColor={white}
          customInnerClass='get-started'
          link='mailto:hello@webdevpath.co'
          linkText='Ping us'
          customBtnClass='inverted-grey'
        />
      </RevealContentContainer>
      <RevealContentContainer>
        <Wrapper customClass='primary__accent'>
          <Container>
            <Title title='Who we are' />
            <Row customClass='align__left'>
              {whoWeAre.map(_ => {
                return (
                  <Member
                    key={_?.name}
                    image={_?.image}
                    name={_?.name}
                    title={_?.title}
                    position={_?.position}
                    linkedIn={_?.linkedIn}
                    portfolio={_?.portfolio}
                    about={_?.about}
                  />
                );
              })}
            </Row>
          </Container>
        </Wrapper>
      </RevealContentContainer>
      <RevealContentContainer>
        <TwoColumn
          title='Still got questions?'
          content='Feel free to contact us.'
          image='/images/svg/hashtag.svg'
          altTag='Hashtag'
          color={primary}
          bgColor={white}
          customInnerClass='questions'
          link='/contact'
          linkText='Contact us'
          customBtnClass='inverted-grey'
        />
      </RevealContentContainer>
    </div>
  );
}
