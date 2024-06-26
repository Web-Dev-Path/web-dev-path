import styled, { css } from 'styled-components';
import { transition } from '@/styles/themeConfig';

const ButtonLink = styled.a`
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryContent};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  min-width: 16rem;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.primaryContent};
  ${transition('all 0.3s ease')};
  

  &:hover {
    text-decoration: none;
  }

  //check props for button variations
  ${props => (props.$colorScheme === 'inverted-grey' ? invertedGrey : '')}
  ${props => (props.$colorScheme === 'inverted-white' ? invertedWhite : '')}
`;


//Color Scheme Variations
const invertedGrey = css`
  &:hover {
    color: ${({ theme }) => theme.colors.primaryContent};
    background-color: ${({ theme }) => theme.colors.transparent};
  }
`;

const invertedWhite = css`
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryContent};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.transparent};
  }
`;

export default { ButtonLink };
