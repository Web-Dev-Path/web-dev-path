import styled, { css } from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
  margin: 1rem 1rem 0 0.5rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  min-width: 32%;
  height: 37rem;

  & a {
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.smMobile}) {
      height: 42rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      height: 42rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      height: 37rem;
      margin: 1.5rem 1.5rem 0 1.5rem;
      &:first-child,
      &:last-child {
        margin: 1.5rem 0.5rem 0 0.5rem;
      }
    }
  `}
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  font-size: 1.75rem;
  color:  ${({ theme }) => theme.colors.primaryContent};
  margin: 1rem 0 0 0;
  line-height: unset;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      font-size: 2.25rem;
    }
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 18rem;
  position: relative;
`;

const CardImage = styled(Image)`
  border-radius: 0.25rem;
  object-fit: cover;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 12rem;
  overflow: hidden;
  gap: 0.5rem;
  margin-bottom: -1rem;
  & a {
    text-decoration: none;
  }
`;

//About Us Varients Varients
const AboutUs = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  max-height: 35rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      max-height: 37rem;

    }
  `}
`;

const AboutUsTitle = styled(Title)`
  font-size: 3.5rem;
  text-align: center;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      font-size: 5rem;
    }
  `}
`;

const AboutUsContentWrapper = styled(ContentWrapper)`
${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      & p {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
    }
  `}
`;

//Contact Us Cards Varients

const ContactUsCard = styled(Card)`
  height: 27rem;
  background-color: ${({ theme }) => theme.colors.white};;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      height: 25rem;
    }
  `}
`;

const ContactUsCardImageWrapper = styled(ImageWrapper)`
  width: auto;
  position: relative;
  height: 5rem;
  margin-right: 75%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ContactUsCardImage = styled(Image)`
  margin: 0;
  position: absolute;
  object-fit: contain !important;
`;

const Blog = styled(Card)`
  margin: 1rem 0.5rem 0 0.5rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      height: 40rem;
    }
  `}
`;

const BlogTitle = styled(Title)`
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  max-height: 7rem;
  overflow: hidden;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      font-size: 1.3rem;
    }
  `}
`;

const BlogImageWrapper = styled(ImageWrapper)`
  height: 12rem;
`;

export const CardStyles = {
  Card: Card,
  ImageWrapper: ImageWrapper,
  CardImage: CardImage,
  Title: Title,
  ContentWrapper: ContentWrapper,
  TagContainer: TagContainer,
};

export const AboutUsCardStyles = {
  ...CardStyles,
  Card: AboutUs,
  Title: AboutUsTitle,
  ContentWrapper: AboutUsContentWrapper,
};

export const ContactUsCardStyles = {
  ...CardStyles,
  Card: ContactUsCard,
  ImageWrapper: ContactUsCardImageWrapper,
  CardImage: ContactUsCardImage,
};

export const BlogCardStyles = {
  ...CardStyles,
  Card: Blog,
  ImageWrapper: BlogImageWrapper,
  Title: BlogTitle,
};
