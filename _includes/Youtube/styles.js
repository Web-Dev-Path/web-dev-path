import styled from 'styled-components'

const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
`;

const YoutubeIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;


`;

export default { YoutubeContainer, YoutubeIframe };
