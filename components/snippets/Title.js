import styled from 'styled-components';

export const TitleStyle = styled.h2`
  ${props =>
    props.blogTitle &&
    `
    align-self: flex-start;
    margin: 0 auto 1rem;
    width: 90%;
    max-width: $large-desktop-breakpoint;
    min-height: 5rem;
    color: black;
  `};
`;

const Title = ({ title, blogTitle }) => {
  return <TitleStyle blogTitle={blogTitle}>{title}</TitleStyle>;
};

export default Title;
