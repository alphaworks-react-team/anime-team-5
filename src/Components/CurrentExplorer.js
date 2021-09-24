import React, { useState } from "react";
import styled from "styled-components";
import ExploreCardContainer from "../Fragments/ExploreCardContainer";
import StyledLink from "./../Fragments/StyledLink";

const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 8px;
  border-bottom: 0.2px solid lightgrey;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CardImageRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const CardImageContainer = styled.div`
  width: 18%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

const GoBackButton = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: green;
  cursor: pointer;
`;

const MoreDetailsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.shown === true ? "flex" : "none")};
  justify-content: center;
  align-items: flex-end;
  background: rgba(1, 1, 1, 0.5);
`;

const MoreDetailsButton = styled.div`
  margin: 5px;
  padding: 3px;
  background: green;
  color: white;
  font-size: 15px;
  width: 80%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

const CurrentExplorer = ({ title, current = [], setActiveCategory }) => {
  const [show, setShow] = useState(false);
  const [animeIndex, setAnimeIndex] = useState(-1);

  const moreDetailButton = (id) => {
    return (
      <StyledLink width="100%" to={`/anime/details/${id}`}>
        <MoreDetailsButton>More Details</MoreDetailsButton>
      </StyledLink>
    );
  };

  const showIndex = (index) => {
    setAnimeIndex(index);
    setShow(true);
  };

  return (
    <ExploreCardContainer>
      <GoBackButton onClick={() => setActiveCategory({})}>Go Back</GoBackButton>
      <Title>{title}</Title>
      <CardImageRow>
        {current.map((anime, index) => (
          <CardImageContainer
            key={index}
            onMouseEnter={() => showIndex(index)}
            onMouseLeave={() => setShow(false)}
          >
            <CardImage
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.titles.en}
            />
            {index === animeIndex && (
              <MoreDetailsContainer shown={show}>
                {moreDetailButton(anime.id)}
              </MoreDetailsContainer>
            )}
          </CardImageContainer>
        ))}
      </CardImageRow>
    </ExploreCardContainer>
  );
};

export default CurrentExplorer;
