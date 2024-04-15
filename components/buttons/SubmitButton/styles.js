import styled, { css } from 'styled-components';

const SubmitButton = styled.button`
  padding: 0.3rem 0;
  min-width: 12rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryContent};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.primaryContent};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryContent};
    background-color: ${({ theme }) => theme.colors.transparent};
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      margin-left: auto;
      font-size: 1.5rem;
      min-width: 16rem;
      padding: 0.5rem 2rem;
    }
  `}
`;

const NewsLetterSubmitButton = styled(SubmitButton)`
  border-radius: 1.2rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.darkBg};
  padding: 0.3rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.darkBg};
    border: 1px solid ${({ theme }) => theme.colors.darkBg};
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      border-radius: 1.2rem;
      font-size: 1.2rem;
      padding: 0.3rem 0;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      min-width: 12rem;
      border-radius: 3rem;
      padding: 0.7rem 0;
    }
  `}
`;

export default { SubmitButton, NewsLetterSubmitButton };
