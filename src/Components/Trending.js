import React from "react";
import styled from "styled-components";

const TrendingContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.shown === true ? "flex" : "none")};
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const Trending = () => {
  return (
    <TrendingContainer>
      <Title>Welcome to Trending</Title>
    </TrendingContainer>
  );
};

export default Trending;
