import Link from 'next/link';
import styled from 'styled-components';
import { $lightBgColor } from '@/styles/_variables';

const TagLink = styled(Link)`
  background-color: ${$lightBgColor};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
`;

export default { TagLink };
