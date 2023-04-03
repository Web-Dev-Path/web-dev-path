import styled, { css } from 'styled-components';

const SectionHidden = css`
  opacity: 0;
  transform: translateY(8rem);
`;

const Wrapper = styled.div`
  transition: transform 1s, opacity 1s;

  //check props for hidden style
  ${props => (props.$hiddenStyle ? SectionHidden : '')}
`;

export default { Wrapper };
