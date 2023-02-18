import styled from 'styled-components';

export const TitleStyle = styled.h2`
  ${props =>
    props.blogTitle &&
    `
    align-self: flex-start;
    margin: ${props.adjustedTitle ? '0 auto 1rem 15rem' : '0 auto 1rem'};
    width: 90%;
    max-width: 1440px;
    min-height: 5rem;
    `};
`;

const Title = ({ title, blogTitle }) => {
  return <TitleStyle blogTitle={blogTitle}>{title}</TitleStyle>;
};

export default Title;
