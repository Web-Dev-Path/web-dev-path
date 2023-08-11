import styled, { css } from 'styled-components';
import { $primaryAccentColor } from '@/styles/_variables';

const Wrapper = styled.div`
  padding: 1rem 0;

  //check props to inject background color varient
  ${props => (props.$colorVarient === 'primary__accent' ? PrimaryAccent : '')}
`;

const PrimaryAccent = css`
  background-color: ${$primaryAccentColor};
`;

export default { Wrapper };
