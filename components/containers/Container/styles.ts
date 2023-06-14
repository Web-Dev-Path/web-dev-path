import styled from 'styled-components';
import { $lgDesktopBreakpoint } from '@/styles/_variables';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: ${$lgDesktopBreakpoint};
`;

export default { Container };
