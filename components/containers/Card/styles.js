import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 12rem;
  overflow: hidden;
  gap: 0.5rem;
  margin-bottom: -1rem;
  & a {
    text-decoration: none;
  }
`;

export default { TagContainer };
