import styled, { css } from 'styled-components';

export const BlogSearch = styled.div`
  display: flex;
  padding-top: 2.5rem;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start;

  
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      align-items: center;
      flex-direction: row;
    }
  `}
`;
