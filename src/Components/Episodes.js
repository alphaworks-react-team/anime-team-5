import React from "react";
import styled from "styled-components";

const EpisodeTabContainer = styled.div`
  width: 100%;
  padding: 10px;
  // display: flex;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const EpisodeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const EpisodeCard = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const EpisodeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px;
`;

const EpisodeImage = styled.img`
  display: flex;
  width: 100%;
  border-radius: 5px;
  object-fit: fill;
`;

const EpisodeDetails = styled.div`
  width: 65%;
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const EpisodeName = styled.h3`
  margin: 0;
  margin-bottom: 5px;
`;

const SeasonEpisode = styled.h6`
  margin: 0;
  margin-bottom: 5px;
`;

const EpisodeDescription = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;

const MainDetails = styled.div``;

const MinorDetails = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const MinorDetailPair = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
`;

const MinorDetailKey = styled.p`
  border-bottom: 1px solid lightgrey;
  margin: 0;
  font-size: 12px;
`;

const MinorDetailValue = styled.p`
  font-size: 12px;
  margin: 0;
`;

const Episodes = ({ episodes }) => {
  return (
    <EpisodeTabContainer>
      <Title>Episodes</Title>
      <EpisodeContainer>
        {episodes.map((episode, index) => (
          <EpisodeCard key={index}>
            <EpisodeImageContainer>
              <EpisodeImage
                src={episode?.attributes?.thumbnail?.original}
                alt={episode?.attributes?.canonicalTitle}
              />
            </EpisodeImageContainer>
            <EpisodeDetails>
              <MainDetails>
                <EpisodeName>{episode.attributes.titles.en_us}</EpisodeName>
                <SeasonEpisode>
                  S{episode.attributes.seasonNumber}E{episode.attributes.number}
                </SeasonEpisode>
                <EpisodeDescription>
                  {episode.attributes.description}
                </EpisodeDescription>
              </MainDetails>
              <MinorDetails>
                <MinorDetailPair>
                  <MinorDetailKey>Release Date</MinorDetailKey>
                  <MinorDetailValue>
                    {episode.attributes.airdate}
                  </MinorDetailValue>
                </MinorDetailPair>
                <MinorDetailPair>
                  <MinorDetailKey>Episode Length</MinorDetailKey>
                  <MinorDetailValue>
                    {episode.attributes.length} min
                  </MinorDetailValue>
                </MinorDetailPair>
              </MinorDetails>
            </EpisodeDetails>
          </EpisodeCard>
        ))}
      </EpisodeContainer>
    </EpisodeTabContainer>
  );
};

export default Episodes;
