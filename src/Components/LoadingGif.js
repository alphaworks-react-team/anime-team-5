import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingGif = () => {
  return (
    <LoadingContainer>
      <img
        src={
          "https://media.giphy.com/media/l0HlLMeBgzK2UuHVS/giphy.gif?cid=ecf05e47kudaobktmf355uikl537abqha8rl2olyyf64mpki&rid=giphy.gif&ct=g"
        }
        alt="broken"
      />
    </LoadingContainer>
  );
};

export default LoadingGif;
