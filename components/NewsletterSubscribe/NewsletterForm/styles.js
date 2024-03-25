import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';


const Section = styled.section`
  padding: 2.5rem 0;
  background-color: ${({ theme }) => theme.colors.primaryAccent};

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      padding: 1rem 0;
    }
  `}
`;

const InnerContainer = styled(Container)`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
  `}
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryContent};
  margin: 0;
  white-space: nowrap;
  display: flex;
  gap: 0.5rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.mediumDesktop}) {
      font-size: 1.75rem;
      gap: 1rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      height: auto;
    }
  `}
`;

const RightChevron = styled.span`
  position: relative;
  top: 0.1rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      top: unset;

      img {
        width: 1.5rem !important;
        height: 1.5rem !important;
      }
    }
  `}
`;

const Form = styled.form`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: auto;
    }
  `}
`;

const Input = styled.input`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 2rem;
  margin: 1rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBg};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryContent};
  }

  &:focus {
    outline: none;
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      font-size: 1.5rem;
      height: 3rem;
      border-radius: 3rem;
      max-width: 25rem;
    }
  `}
`;

const InputName = styled(Input)`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      width: 12.25rem;
    }
  `}
`;

const InputEmail = styled(Input)`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      width: 16rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      width: 26rem;
    }
  `}
`;

const FormInfo = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.primaryContent};
`;

const FormResponse = styled.div`
  margin-top: 1rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      font-size: 1.2rem;
      margin: 0;
    }
  `}
`;

const FormSending = styled(FormResponse)``;

const FormError = styled(FormResponse)`
  color: ${({ theme }) => theme.colors.error};
`;

const FormSuccess = styled(FormResponse)``;

export default {
  Section,
  InnerContainer,
  Title,
  RightChevron,
  Form,
  InputEmail,
  InputName,
  Input,
  FormError,
  FormInfo,
  FormSending,
  FormSuccess,
};
