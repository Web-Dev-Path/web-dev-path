import Link from 'next/link';
import styled from 'styled-components';

const TagLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.lightBg};;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
`;

export default { TagLink };
