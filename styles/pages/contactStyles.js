import styled, { css } from 'styled-components';
import Bracket from '@/components/decorations/Bracket';

const ContactUsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBg};
  height: 42rem;
  position: relative;
  margin-bottom: -10rem;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.lgMobile}) {
      height: unset;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      height: 32rem;
    }
  `}
`;

const FormAndDecorations = styled.div`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: absolute;
      bottom: 48%;
      right: 4%;
      z-index: 11;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      bottom: 52%;
      right: 8%;
    }
  `}
`;

const YellowBracket = styled(Bracket)`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      display: none;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      position: absolute;
      top: 28%;
      right: 120%;
      width: 8rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      top: 25%;
      right: 120%;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopPlus}) {
      top: 45%;
      right: 140%;
    }
  `}
`;

const YellowColon = styled.img`
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.desktopMinus}) {
      display: none;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      position: absolute;
      top: -10%;
      right: -5%;
    }
  `}  

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      right: -15%;
    }
  `}
`;

const ResponseMessage = styled.div`
  position: unset;
  bottom: -5%;
  padding: 0 2rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      position: absolute;
      margin-top: 1rem;
    }
  `}
`;

export default {
  ContactUsContainer,
  FormAndDecorations,
  YellowBracket,
  YellowColon,
  ResponseMessage,
};
