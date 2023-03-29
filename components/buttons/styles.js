import styled from 'styled-components';
// import variables from '@/styles/_variables';
import { $white, $primaryContentColor, $black } from '@/styles/_variables';

// const { $white, $primaryContentColor, $black } = variables;

const ButtonLink = styled.a`
  padding: 0.5rem 2rem;
  color: ${$black};
  background-color: ${$primaryContentColor};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  min-width: 16rem;
  display: inline-block;
  border: 1px solid ${$primaryContentColor};
  @include transition(all 0.3s ease);
`;

export default { ButtonLink };
