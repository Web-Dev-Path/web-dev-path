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
  iframe {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    min-width: 18rem;
    max-width: 50rem;
  }
  p:has(iframe) {
    text-align: center;
  }
  li > p {
    display: inline;
  }
  .highlight.js-code-highlight {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: scroll;
  }
  .highlight__panel-action.js-fullscreen-code-action {
    display: none;
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
