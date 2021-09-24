import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <>
      <VideoContainer>
        <video
          autoPlay
          playsInline
          muted
          width={"100%"}
          src="/assets/pexels-vlada-karpovich-8439880.mp4"
        />
      </VideoContainer>
    </>
  );
};

const VideoContainer = styled.div`
  position: fixed;
  margin-top: 76px;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: auto;
  z-index: 1;

  & video {
    filter: grayscale(1) sepia(1) brightness(0.25) contrast(1.15);
  }
`;

export default Video;
