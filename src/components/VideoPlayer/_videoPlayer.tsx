import ReactPlayer from "react-player";
import styled from "styled-components";

export const VideoPlayer = styled(ReactPlayer).attrs({
  controls: true,
})`
  width: 100%;
`;