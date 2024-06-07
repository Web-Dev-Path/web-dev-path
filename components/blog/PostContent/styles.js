import styled, { css } from 'styled-components';

const P = styled.p`
  font-size: 2rem;
  font-style: italic;
  text-align: left;
  line-height: normal;
  margin: 2rem 0;
`;
const SubTitle = styled(P)``;

const ContentContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  .article-body-image-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .article-body-image-wrapper img {
    width: 100%;
    height: 100%;
    max-width: 40rem;
  }
  ul,
  ol {
    list-style: inside;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 828px;
  height: 348px;
  margin: 0 auto;
  img {
    border-color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
    object-fit: contain;
  }
`;

export default {
  SubTitle,
  ContentContainer,
  ImageWrapper,
};
