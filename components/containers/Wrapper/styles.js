import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0;

  //check props to inject background color varient
  ${props => (props.$colorVarient === 'primary__accent' ? PrimaryAccent : '')}
`;

const PrimaryAccent = css`
  background-color: ${({ theme }) => theme.colors.primaryAccent};
`;

export default { Wrapper };
