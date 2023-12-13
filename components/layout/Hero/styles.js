import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';
import Image from 'next/image';
import * as m from '@/styles/_mixins';
import { $white, $primaryAccentColor } from '@/styles/_variables';

const Header = styled.div`
  display: ${({ theme }) => theme.hero.display};
  flex-direction: ${({ theme }) => theme.hero.flexDirection};
  align-items: ${({ theme }) => theme.hero.alignItems};
  position: ${({ theme }) => theme.hero.position};

  //media query mixins
  ${m.desktop(css`
    min-height: ${({ theme }) => theme.hero.minHeight};
  `)}
`;
const HeaderContent = styled(Container)`
  z-index: ${({ theme }) => theme.hero.zIndex};
  color: ${({ theme }) => theme.hero.color};
  padding-top: ${({ theme }) => theme.hero.paddingTop};
`;

const HeaderContentUpper = styled.div`
  max-width: 41rem;
  span {
    color: ${({ theme}) => theme.hero.headerSpanColor};
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
  ${props => (props.$hasAccent ? `color: ${({ theme}) => theme.hero.headerSpanColor}` : '')}
`;

export default {
  Header,
  HeaderContent,
  HeaderContentUpper,
  HeaderContentBottom,
  ImageBg,
  Title,
};
