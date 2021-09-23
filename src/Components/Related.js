import React, { useState } from "react";
import styled from "styled-components";
import StyledLink from "../Fragments/StyledLink";

const RelatedTabContainer = styled.div`
  width: 100%;
  padding: 10px;
  // display: flex;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const RelatedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const RelatedCard = styled.div`
  width: 18%;
  margin-bottom: 10px;
  position: relative;
`;

const RelatedImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const RelatedName = styled.h5`
  margin: 0;
`;

const MoreDetailsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.shown === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
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

const Related = ({ related }) => {
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
    <RelatedTabContainer>
      <Title>Related</Title>
      <RelatedContainer>
        {related.map((anime, index) => (
          <RelatedCard
            key={index}
            onMouseEnter={() => showIndex(index)}
            onMouseLeave={() => setShow(false)}
          >
            {index === animeIndex && (
              <MoreDetailsContainer shown={show}>
                {moreDetailButton(anime.id)}
              </MoreDetailsContainer>
            )}
            <RelatedImage
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.titles.en}
            />
            <RelatedName>{anime.attributes.titles.en_jp}</RelatedName>
          </RelatedCard>
        ))}
      </RelatedContainer>
    </RelatedTabContainer>
  );
};

export default Related;
