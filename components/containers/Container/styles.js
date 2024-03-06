import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: ${({ theme }) => theme.breakpoints.lgDesktop};
`;

export default { Container };
