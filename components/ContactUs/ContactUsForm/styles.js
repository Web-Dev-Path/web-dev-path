import styled, { css } from 'styled-components';

const ResponseOnErrorMsg = styled.div`
  position: absolute;
  right: 8%;
  bottom: -15%;
  width: 26rem;
  margin: auto;
  color: ${({ theme }) => theme.colors.error};

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.mobile}) {
      position: unset;
    }
  `}
`;

const Form = styled.form`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  //media query mixins
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      max-width: 100%;
      width: 26rem;
      padding: 2rem 0;
    }
  `}
`;

const Input = styled.input`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 2rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBg};
  max-width: 100%;
  width: 24rem;

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

const TextArea = styled.textarea`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 13rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBg};
  max-width: 100%;
  width: 24rem;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryContent};
  }

  &:focus {
    outline: none;
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      font-size: 1.5rem;
      border-radius: 3rem;
      max-width: 25rem;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      border-radius: 1.5rem;
    }
  `}
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 0.1rem 0 1rem;
  font-size: 1rem;
  height: 1.5rem;
  font-style: italic;
  align-self: start;
`;

const SubscribeWrapper = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  opacity: 0.6;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      font-size: 1.5rem;
    }
  `}
`;

const SubscribeInput = styled.input`
  width: 1.5rem;
  margin-right: 10px;
`;

export default {
  ResponseOnErrorMsg,
  Form,
  Input,
  ErrorMsg,
  SubscribeWrapper,
  SubscribeInput,
  TextArea,
};
