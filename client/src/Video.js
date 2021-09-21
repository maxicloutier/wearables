import React from "react";
import styled from "styled-components";
import video from "./assets/pexels-vlada-karpovich-8439880.mp4";

const Video = () => {
  return (
    <>
      <VideoContainer>
        <video autoPlay playsInline muted width={"98.5%"} src={video} />
      </VideoContainer>
    </>
  );
};

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: auto;
  z-index: -1;
`;

export default Video;
