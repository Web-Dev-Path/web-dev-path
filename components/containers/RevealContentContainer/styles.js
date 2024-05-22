import styled, { css } from 'styled-components';
import { transition } from '@/styles/themeConfig';


const SectionHidden = css`
  opacity: 0;
  transform: translateY(8rem);
`;

const RevealContainerWrapper = styled.div`
  ${transition('transform 1s, opacity 1s')};

  //check props for hidden style
  ${props => (props.$hiddenStyle ? SectionHidden : '')}
`;

export default { RevealContainerWrapper };
