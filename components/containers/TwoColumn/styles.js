import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import Container from '../Container/Container';
import Image from 'next/image';
import {
  $lgDesktopBreakpoint,
  $primaryContentColor,
  $lightBgColor,
} from '@/styles/_variables';

//TwoColumn Base styles

const TwoColumnWrapper = styled.section`
  align-self: stretch;
  color: ${props => (props.$color ? props.$color : '')};
  background-color: ${props => (props.$bgColor ? props.$bgColor : '')};
`;

const InnerContainer = styled(Container)`
  padding: 5rem 0;
  margin: 0 auto;
  width: 90%;
  max-width: ${$lgDesktopBreakpoint};

  //media query mixins
  ${m.desktop(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `)}
`;

const InnerContent = styled.div`
  margin-bottom: 5rem;

  //media query mixins
  ${m.desktop(css`
    flex-basis: 50%;
    margin-bottom: 0;
  `)}
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  color: ${props => (props.$color ? props.$color : $primaryContentColor)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 3.875rem 0 2.5rem;
  max-width: 39rem;
  font-size: 1.5rem;
  line-height: 1.938rem;

  a {
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

const InnerImageWrapper = styled.div`
  width: 100%;
  height: 34rem;
  position: relative;

  //media query mixins
  ${m.desktop(css`
    width: 25rem;
  `)}
`;

const InnerImage = styled(Image)`
  border-radius: 0.25rem;
  object-fit: cover;
`;

export const Base = {
  TwoColumnWrapper,
  InnerContainer,
  InnerContent,
  Title,
  Content,
  InnerImageWrapper,
  InnerImage,
};

// About page InnerImage
const AboutUsInnerImage = styled(InnerImage)`
  object-fit: contain;
`;

const AboutUs = {
  ...Base,
  InnerImage: AboutUsInnerImage,
};

// Our Process
const OurProcessInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;

  //media query mixins
  ${m.desktop(css`
  height: height: 12rem;
  `)}
`;

export const OurProcess = {
  ...AboutUs,
  InnerImageWrapper: OurProcessInnerImageWrapper,
};

// Get Started
const GetStartedInnerContainer = styled(InnerContainer)`
  padding-bottom: 0px;

  //media query mixins
  ${m.desktop(css`
    padding-bottom: 5rem;
  `)}
`;

const GetStartedInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;
  display: none;

  //media query mixins
  ${m.desktop(css`
    height: 20rem;
    display: unset;
  `)}
`;

export const GetStarted = {
  ...AboutUs,
  InnerContainer: GetStartedInnerContainer,
  InnerImageWrapper: GetStartedInnerImageWrapper,
};

// Our Purpose
const OurPurposeInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;

  //media query mixins
  ${m.desktop(css`
    height: 18rem;
  `)}
`;

export const OurPurpose = {
  ...AboutUs,
  InnerImageWrapper: OurPurposeInnerImageWrapper,
};

// Our Background
const OurBackgroundInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;

  //media query mixins
  ${m.desktop(css`
    height: 15rem;
  `)}
`;

export const OurBackground = {
  ...AboutUs,
  InnerImageWrapper: OurBackgroundInnerImageWrapper,
};

// Get Involved
const GetInvolvedInnerContainer = styled(InnerContainer)`
  //media query mixins
  ${m.desktopBreakpointMinus(css`
    padding-bottom: 0;
  `)}
`;

export const GetInvolved = {
  ...Base,
  InnerContainer: GetInvolvedInnerContainer,
};

// Non Profit
const NonProfitInnerContent = styled(InnerContent)`
  //media query mixins
  ${m.desktopBreakpointMinus(css`
    margin-bottom: 0;
  `)}
`;

export const NonProfit = {
  ...Base,
  InnerContent: NonProfitInnerContent,
};

// Wanna Learn More
const WannaLearnMoreContent = styled(Content)`
  margin: 0;
`;

const WannaLearnMoreInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;

  //media query mixins
  ${m.desktop(css`
    height: 15rem;
  `)}
`;

const WannaLearnMoreInnerImage = styled(InnerImage)`
  object-fit: contain;
`;

export const WannaLearnMore = {
  ...Base,
  Content: WannaLearnMoreContent,
  InnerImageWrapper: WannaLearnMoreInnerImageWrapper,
  InnerImage: WannaLearnMoreInnerImage,
};

// Questions
const QuestionsInnerContainer = styled(InnerContainer)`
  padding-bottom: 0px;

  //media query mixins
  ${m.desktop(css`
    padding-bottom: 5rem;
  `)}
`;

const QuestionsInnerImageWrapper = styled(InnerImageWrapper)`
  height: 10rem;
  display: none;

  //media query mixins
  ${m.desktop(css`
    height: 13rem;
    display: unset;
  `)}
`;

export const QuestionsMore = {
  ...AboutUs,
  InnerContainer: QuestionsInnerContainer,
  InnerImageWrapper: QuestionsInnerImageWrapper,
};

// Two Text Columns
const TwoTextColumnsInnerContainer = styled(InnerContainer)`
  justify-content: space-evenly !important;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  a {
    margin-top: auto;
    color: ${$lightBgColor};
  }

  a:hover {
    color: ${$primaryContentColor};
  }
`;

const TwoTextColumnsInnerContent = styled(InnerContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: unset !important;

  //media query mixins
  ${m.desktop(css`
    width: 25rem;
  `)}
`;

export const TwoTextColumns = {
  ...Base,
  InnerContainer: TwoTextColumnsInnerContainer,
  InnerContent: TwoTextColumnsInnerContent,
};

//Second Text Columns
const SecondTextColumnInnerContent = styled(TwoTextColumnsInnerContent)`
  height: 100%;
`;

const SecondTextColumnInnerContainer = styled(InnerContainer)`
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

export const SecondTextColumn = {
  ...Base,
  InnerContainer: SecondTextColumnInnerContainer,
  InnerContent: SecondTextColumnInnerContent,
};
