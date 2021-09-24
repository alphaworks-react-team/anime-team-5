import React from "react";
import styled from "styled-components";
import StyledLink from "../Fragments/StyledLink";

const DetailContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
`;

const MainDetailContainer = styled.div`
  width: 70%;
`;

const AnimeTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const AnimeDescription = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

const AnimeTags = styled.div`
  margin-bottom: 10px;
`;

const TagTitle = styled.h4`
  margin: 0;
  margin-bottom: 5px;
`;

const TagContainer = styled.div`
  margin: 0;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row wrap;
`;

const Tags = styled.p`
  margin: 0;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  padding: 3px;
  border: 0.5px solid grey;
  border-radius: 3px;
  box-sizing: border-box;
  background: lightgrey;
  color: grey;
`;

const SmallDetailsContainer = styled.div`
  width: 30%;
  padding: 10px;
  border: 0.1px solid lightgrey;
  border-radius: 5px;
`;

const SmallDetailBox = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

const SmallDetailTitle = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

const SmallDetailPair = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const SmallDetailKey = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
  width: 120px;
`;

const SmallDetailValue = styled.p`
  margin: 0;
  font-size: 12px;
`;

const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  margin-bottom: 10px;
`;

const ViewMoreButton = styled.div`
  font-size: 12px;
  text-align: right;
  color: green;
  cursor: pointer;
`;

const Summary = ({
  producer,
  anime,
  animeCategories,
  animeGenres,
  CharacterPreview,
  id,
}) => {
  return (
    <DetailContainer>
      <MainDetailContainer>
        <AnimeTitle>{anime?.attributes.titles.en}</AnimeTitle>
        <AnimeDescription>{anime?.attributes.description}</AnimeDescription>
        <AnimeTags>
          <TagTitle>Genre</TagTitle>
          <TagContainer>
            {animeGenres.map((genre, index) => (
              <Tags key={index}>{genre.attributes.name}</Tags>
            ))}
          </TagContainer>
          <TagTitle>Category</TagTitle>
          <TagContainer>
            {animeCategories?.map((category, index) => (
              <Tags key={index}>{category.attributes.title}</Tags>
            ))}
          </TagContainer>
        </AnimeTags>
      </MainDetailContainer>
      <SmallDetailsContainer>
        <SmallDetailBox>
          <SmallDetailTitle>AnimeDetails</SmallDetailTitle>
          <SmallDetailPair>
            <SmallDetailKey>English</SmallDetailKey>
            <SmallDetailValue>{anime?.attributes.titles.en}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Japanese</SmallDetailKey>
            <SmallDetailValue>
              {anime?.attributes.titles.ja_jp}
            </SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Average Rating</SmallDetailKey>
            <SmallDetailValue>
              {anime?.attributes.averageRating}%
            </SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Start Date</SmallDetailKey>
            <SmallDetailValue>{anime?.attributes.startDate}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Popularity Rank</SmallDetailKey>
            <SmallDetailValue>
              #{anime?.attributes.popularityRank}
            </SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Rating Rank</SmallDetailKey>
            <SmallDetailValue>#{anime?.attributes.ratingRank}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Rated</SmallDetailKey>
            <SmallDetailValue>{anime?.attributes.ageRating}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Type</SmallDetailKey>
            <SmallDetailValue>{anime?.type}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Status</SmallDetailKey>
            <SmallDetailValue>{anime?.attributes.status}</SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Licensors</SmallDetailKey>
            <SmallDetailValue>
              {producer[0]?.attributes.name}/ {producer[1]?.attributes.name}
            </SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Producers</SmallDetailKey>
            <SmallDetailValue>
              {producer[2]?.attributes.name}/ {producer[3]?.attributes.name}
            </SmallDetailValue>
          </SmallDetailPair>
          <SmallDetailPair>
            <SmallDetailKey>Studio</SmallDetailKey>
            <SmallDetailValue>{producer[4]?.attributes.name}</SmallDetailValue>
          </SmallDetailPair>
        </SmallDetailBox>
        <SmallDetailBox>
          <SmallDetailTitle>Characters</SmallDetailTitle>
          <CharacterContainer>{CharacterPreview()}</CharacterContainer>
          <StyledLink to={`/anime/details/${id}/episodes`}>
            <ViewMoreButton>View More</ViewMoreButton>
          </StyledLink>
        </SmallDetailBox>
      </SmallDetailsContainer>
    </DetailContainer>
  );
};

export default Summary;
