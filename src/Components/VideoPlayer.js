import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const VideoPlayer = ({ link, toggleModal, setToggleModal }) => {
  if (!toggleModal) {
    return null;
  }
  return (
    <VideoBackground onClick={() => setToggleModal(false)}>
      {link ? (
        <ReactPlayer
          onClick={(e) => e.stopPropagation()}
          url={`https://www.youtube.com/watch?v=${link}`}
        />
      ) : (
        <ErrorDiv>Sorry No Trailer Video Available</ErrorDiv>
      )}
    </VideoBackground>
  );
};

export default VideoPlayer;
