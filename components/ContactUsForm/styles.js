import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $white,
  $error,
  $darkBgColor,
  $primaryContentColor,
  $lightBgColor,
  $boxShadow,
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

  //check props for button variations
  ${props => (props.$inputType === 'message' ? InputMessage : '')}
`;

const TextArea = styled.textarea`
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

  //check props for button variations
${props => (props.$inputType === 'message' ? InputMessage : '')}
`;

const InputMessage = css`
  font-family: inherit;
  height: 13rem !important;
  border-radius: 1rem;

  //media query mixins
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

// .contact {
//   background-color: $light-bg-color;
//   height: 42rem;
//   position: relative;
//   margin-bottom: -10rem;
//   @include mobile {
//     margin-bottom: 3rem;
//   }

//   &__formAndDecorations {
//     @include tablet {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: center;
//       position: absolute;
//       bottom: 48%;
//       right: 4%;
//       z-index: 11;
//     }

//     @include desktop {
//       bottom: 52%;
//       right: 8%;
//     }
//   }

//   &__yellowBracket {
//     -webkit-transform: scaleX(-1);
//     transform: scaleX(-1);

//     @include mobile {
//       display: none;
//     }

//     @include tablet {
//       position: absolute;
//       top: 28%;
//       right: 120%;
//       width: 8rem;
//     }

//     @include desktop {
//       top: 25%;
//       right: 120%;
//     }

//     @include desktop-breakpoint-plus {
//       top: 25%;
//       right: 140%;
//     }
//   }

//   &__yellowColon {
//     @include tablet {
//       position: absolute;
//       top: -10%;
//       right: -5%;
//     }

//     @include desktop {
//       right: -15%;
//     }
//   }

//   @include desktop-breakpoint-minus {
//     img {
//       display: none;
//     }
//   }

//   &__form {

//   }

//   &__errorMessage {

//   }

//   &__input {

//   }

//   &__message {

//   }

//   &__subscribe {

//   }

//   &__subscribeInput {

//   }

//   @include desktop {
//     height: 32rem;
//   }

//   &__response_message {
//     position: absolute;
//     right: 8%;
//     bottom: -5%;
//     margin: auto;

//     @include mobile {
//       position: unset;
//       margin-top: 1rem;
//       padding: 0 2rem;
//     }

//     @include small-mobile {
//       max-width: fit-content;
//     }
//   }

//   &__respseonErrorMessage {
//   }

// @include mobile {
//     height: unset;
//     padding-bottom: 2rem;
//   }
// }
