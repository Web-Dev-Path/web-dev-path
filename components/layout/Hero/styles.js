import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container/Container';
import Image from 'next/image';
import * as m from '@/styles/_mixins';
import { $white, $primaryAccentColor } from '@/styles/_variables';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  //media query mixins
  ${m.desktop(css`
    min-height: 100vh;
  `)}
`;
const HeaderContent = styled(Container)`
  z-index: 10;
  color: ${$white};
  padding-top: 9%;
`;

const HeaderContentUpper = styled.div`
  max-width: 41rem;
  span {
    color: ${$primaryAccentColor};
    font-style: italic;
    font-weight: bold;
    line-height: 3.5rem;

    //media query mixins
    ${m.desktop(css`
      font-size: 4.5rem;
      line-height: 5rem;
    `)}
  }
`;

const HeaderContentBottom = styled.div`
  max-width: 19rem;
  padding-bottom: 5rem;

  //media query mixins
  ${m.desktop(css`
    padding-bottom: 0;
  `)}
`;

const ImageBg = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
const Title = styled.h1`
  ${props => (props.$hasAccent ? `color: ${$primaryAccentColor}` : '')}
`;

export default {
  Header,
  HeaderContent,
  HeaderContentUpper,
  HeaderContentBottom,
  ImageBg,
  Title,
};
