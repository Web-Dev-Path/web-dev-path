import styled from 'styled-components';

export const StyledTitle = styled.h2`
  align-self: flex-start;
  margin: '0 auto 1rem';
`;

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
