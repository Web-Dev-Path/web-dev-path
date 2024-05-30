import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem !important;
  color: ${({ theme }) => theme.colors.primaryContent};
  text-align: left;
  line-height: normal;
  margin: 1rem 0 !important;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  `}
`;
const Title = styled(H3)``;

const List = styled.ul`
  font-size: 1.5rem !important;
  text-align: left;
  line-height: normal;
  padding: 0;
  list-style: none;
`;
const Li = styled.li``;
const LinkWrapper = styled.div`
  font-size: 1rem !important;
  text-underline-offset: 2px;

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

export default {
  Container,
  Title,
  List,
  Li,
  LinkWrapper,
};
