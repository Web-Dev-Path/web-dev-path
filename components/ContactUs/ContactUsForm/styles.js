import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $error,
  $darkBgColor,
  $primaryContentColor,
} from '@/styles/_variables';

const ResponseOnErrorMsg = styled.div`
  position: absolute;
  right: 8%;
  bottom: -15%;
  width: 26rem;
  margin: auto;
  color: ${$error};

  //media query mixins
  ${m.mobile(css`
    position: unset;
  `)}
`;

const Form = styled.form`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  //media query mixins
  ${m.desktop(css`
    max-width: 100%;
    width: 26rem;
    padding: 2rem 0;
  `)}
`;

const Input = styled.input`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 2rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid ${$darkBgColor};
  max-width: 100%;
  width: 24rem;

  &::placeholder {
    color: ${$primaryContentColor};
  }

  &:focus {
    outline: none;
  }

  //media query mixins
  ${m.largeDesktop(css`
    font-size: 1.5rem;
    height: 3rem;
    border-radius: 3rem;
    max-width: 25rem;
  `)}
`;

const TextArea = styled.textarea`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 13rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid ${$darkBgColor};
  max-width: 100%;
  width: 24rem;
  font-family: inherit;

  &::placeholder {
    color: ${$primaryContentColor};
  }

  &:focus {
    outline: none;
  }

  //media query mixins
  ${m.largeDesktop(css`
    font-size: 1.5rem;
    border-radius: 3rem;
    max-width: 25rem;
  `)}

  ${m.desktop(css`
    border-radius: 1.5rem;
  `)}
`;

const ErrorMsg = styled.p`
  color: ${$error};
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

  //media query mixins
  ${m.desktop(css`
    font-size: 1.5rem;
  `)}
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
