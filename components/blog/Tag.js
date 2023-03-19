import Link from 'next/link';
import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 12rem;
  overflow: hidden;
  gap: 0.5rem;
  margin-bottom: -1rem;
  a {
    text-decoration: none;
  }
`;

const TagLink = styled(Link)`
  background-color: #8cd5e8;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
`;

export const Tag = ({ text }) => {
  return <TagLink href={`/blog/category/${text}`}>{text}</TagLink>;
};
