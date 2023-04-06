import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $lgDesktopBreakpoint,
  $primaryContentColor,
} from '@/styles/_variables';

// Homepage

const GetInvolvedInnerContainer = css`
  //media query mixins
  ${m.desktopBreakpointMinus(css`
    padding-bottom: 0;
  `)}
`;

const NonProfitInnerContent = css`
  //media query mixins
  ${m.desktopBreakpointMinus(css`
    margin-bottom: 0;
  `)}
`;

// End Homepage

// About page

//About page InnerContainer
const GetStartedInnerContainer = css`
  padding-bottom: 0px;

  //media query mixins
  ${m.desktop(css`
    padding-bottom: 5rem;
  `)}
`;

const QuestionsInnerContainer = css`
  padding-bottom: 0px;

  //media query mixins
  ${m.desktop(css`
    padding-bottom: 5rem;
  `)}
`;

const TwoTextColumnsInnerContainer = css`
  justify-content: space-evenly !important;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  a {
    margin-top: auto;
    color: $light-bg-color;
  }

  a:hover {
    color: $primary-content-color;
  }
`;

const SecondTextColumnInnerContainer = css`
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

// About page InnerContent
const TwoTextColumnsInnerContent = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: unset !important;

  //media query mixins
  ${m.desktop(css`
    width: 25rem;
  `)}
`;

const SecondTextColumnInnerContent = css`
  ${TwoTextColumnsInnerContent}
  height: 100%;
`;

//About page Content
const WannaLearnMoreContent = css`
  margin: 0;
`;

// About page ImageWrapper
const AboutUsInnerImageWrapper = css`
  height: 10rem;
`;

const GetStartedInnerImageWrapper = css`
  ${AboutUsInnerImageWrapper}
  display: none;

  //media query mixins
  ${m.desktop(css`
    height: 20rem;
    display: unset;
  `)}
`;

const OurProcessInnerImageWrapper = css`
  ${AboutUsInnerImageWrapper}

  //media query mixins
  ${m.desktop(css`
  height: height: 12rem;
  `)}
`;

const OurPurposeInnerImageWrapper = css`
  ${AboutUsInnerImageWrapper}

  //media query mixins
  ${m.desktop(css`
    height: 18rem;
  `)}
`;

const OurBackgroundInnerImageWrapper = css`
  ${AboutUsInnerImageWrapper}

  //media query mixins
  ${m.desktop(css`
    height: 15rem;
  `)}
`;

const QuestionsInnerImageWrapper = css`
  ${AboutUsInnerImageWrapper}
  display: none;

  //media query mixins
  ${m.desktop(css`
    height: 13rem;
    display: unset;
  `)}
`;

const WannaLearnMoreInnerImageWrapper = css`
  height: 10rem;

  //media query mixins
  ${m.desktop(css`
    height: 15rem;
  `)}
`;

// About page InnerImage

const AboutUsInnerImage = css`
  object-fit: contain;
`;

const WannaLearnMoreInnerImage = css`
  object-fit: contain;
`;

const cssVarNames = {
  'our-process': {
    InnerImageWrapper: OurProcessInnerImageWrapper,
    InnerImage: AboutUsInnerImage,
  },
  'get-started': {
    InnerContainer: GetStartedInnerContainer,
    InnerImageWrapper: GetStartedInnerImageWrapper,
    InnerImage: AboutUsInnerImage,
  },
  'our-purpose': {
    InnerImageWrapper: OurPurposeInnerImageWrapper,
    InnerImage: AboutUsInnerImage,
  },
  'our-background': {
    InnerImageWrapper: OurBackgroundInnerImageWrapper,
    InnerImage: AboutUsInnerImage,
  },
  'get-involved': { InnerContainer: GetInvolvedInnerContainer },
  'non-profit': { InnerContent: NonProfitInnerContent },
  'wanna-learn-more': {
    Content: WannaLearnMoreContent,
    InnerImageWrapper: WannaLearnMoreInnerImageWrapper,
    InnerImage: WannaLearnMoreInnerImage,
  },
  questions: {
    InnerContainer: QuestionsInnerContainer,
    InnerImageWrapper: QuestionsInnerImageWrapper,
    InnerImage: AboutUsInnerImage,
  },
  'two-text-columns': {
    InnerContainer: TwoTextColumnsInnerContainer,
    InnerContent: TwoTextColumnsInnerContent,
  },
  'second-text-column': {
    InnerContainer: SecondTextColumnInnerContainer,
    InnerContent: SecondTextColumnInnerContent,
  },
};

export default function addContentsCss({ $contentType, componentName }) {
  let returnCss = '';

  if ($contentType && cssVarNames[$contentType][componentName]) {
    returnCss = cssVarNames[$contentType][componentName];
  }

  return returnCss;
}
