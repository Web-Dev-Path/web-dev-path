import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';
import * as m from '@/styles/_mixins';
import {
  $error,
  $darkBgColor,
  $primaryAccentColor,
  $primaryContentColor,
} from '@/styles/_variables';

const Section = styled.section`
  padding: 2.5rem 0;
  background-color: ${$primaryAccentColor};

  //media query mixins
  ${m.desktop(css`
    padding: 1rem 0;
  `)}
`;

const InnerContainer = styled(Container)`
  //media query mixins
  ${m.desktop(css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  `)}
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${$primaryContentColor};
  margin: 0;
  white-space: nowrap;
  display: flex;
  gap: 0.5rem;

  //media query mixins
  ${m.mediumDesktop(css`
    font-size: 1.75rem;
    gap: 1rem;
  `)}

  ${m.largeDesktop(css`
    font-size: 2.25rem;
    gap: 1.5rem;
  `)}
`;

const RightChevron = styled.span`
  position: relative;
  top: 0.1rem;

  //media query mixins
  ${m.largeDesktop(css`
    top: unset;

    img {
      width: 1.5rem !important;
      height: 1.5rem !important;
    }
  `)}
`;

const Form = styled.form`
  //media query mixins
  ${m.desktop(css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
  `)}
`;

const Input = styled.input`
  display: block;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 2rem;
  margin: 1rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid ${$darkBgColor};
  width: 100%;

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

const InputName = styled(Input)`
  //media query mixins
  ${m.desktop(css`
    width: 12.25rem;
  `)}
`;

const InputEmail = styled(Input)`
  //media query mixins
  ${m.desktop(css`
    width: 16rem;
  `)}

  ${m.largeDesktop(css`
    width: 26rem;
  `)}
`;

const FormInfo = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: ${$primaryContentColor};
`;

const FormResponse = styled.div`
  margin-top: 1rem;

  //media query mixins
  ${m.desktop(css`
    font-size: 1.2rem;
    margin: 0;
  `)}
`;

const FormSending = styled(FormResponse)``;

const FormError = styled(FormResponse)`
  color: ${$error};
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
