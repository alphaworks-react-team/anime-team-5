import React, { useEffect, useState } from "react";
import MainContainer from "../Fragments/MainContainer";
import {
  getAnimeById,
  getAnimeGenresById,
  getAnimeCategoriesById,
  getAnimeCharacters,
  getAnimeEpisodes,
  getRelatedAnime,
  getLinks,
} from "../utils";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Character from "../Components/Character";
import Episodes from "../Components/Episodes";
import Related from "./../Components/Related";
import Summary from "./../Components/Summary";
import VideoPlayer from "../Components/VideoPlayer";
import { getProducers } from "./../utils";
import StyledLink from "../Fragments/StyledLink";
import { SiHulu, SiCrunchyroll } from "react-icons/si";

const AnimeMediaContainer = styled.div`
  padding: 10px;
  width: 26%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const AnimeImage = styled.img`
  // width: 150px;
  // height: 200px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TrailerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: rgb(48, 48, 48);
  background: linear-gradient(
    0deg,
    rgba(48, 48, 48, 1) 0%,
    rgba(163, 163, 163, 1) 100%
  );
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  margin-bottom: 10px;
`;

// const OtherLinksContainer = styled.div`
//   // width: 100%;
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
// `;

// const LinkTitle = styled.h5`
//   margin: 0;
//   margin-bottom: 10px;
// `;

// const LinkIcons = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const Icon = styled.div`
//   padding: 3px;
//   border: 0.5px solid lightgrey;
//   border-radius: 3px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const TabContainer = styled.div`
  width: 70%;
`;

const CharacterImage = styled.img`
  width: 25%;
  border-radius: 5px;
`;

const AnimeDetails = (props) => {
  const [anime, setAnime] = useState();
  const [animeGenres, setAnimeGenres] = useState([]);
  const [animeCategories, setAnimeCategories] = useState([]);
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [relatedAnime, setRelatedAnime] = useState([]);
  const [producer, setProducer] = useState([]);
  const [link, setLink] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const loadAnime = async (animeId) => {
    try {
      const currentAnime = await getAnimeById(animeId);
      const currentGenres = await getAnimeGenresById(animeId);
      const currentCategories = await getAnimeCategoriesById(animeId);
      const currentCharacters = await getAnimeCharacters(animeId);
      const currentEpisodes = await getAnimeEpisodes(animeId);
      const related = await getRelatedAnime(
        currentAnime[0].attributes.titles.en
      );
      const producers = await getProducers(animeId);
      const allLinks = await getLinks(animeId);
      setAnime(currentAnime[0]);
      setAnimeGenres(currentGenres);
      setAnimeCategories(currentCategories);
      setAnimeCharacters(currentCharacters);
      setAnimeEpisodes(currentEpisodes);
      setRelatedAnime(related);
      setProducer(producers);
      setLink(allLinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const animeId = props.match.params.id;
    loadAnime(animeId);
  }, [props]);

  const CharacterPreview = () => {
    const char = [...animeCharacters];
    return char
      .splice(0, 4)
      .map((character, i) => (
        <CharacterImage
          key={i}
          src={character.attributes.image.original}
          alt={character.attributes.names.en}
        />
      ));
  };

  return (
    <MainContainer>
      <VideoPlayer
        setToggleModal={setToggleModal}
        link={anime?.attributes.youtubeVideoId}
        toggleModal={toggleModal}
      />
      <AnimeMediaContainer>
        <AnimeImage
          src={anime?.attributes.posterImage.medium}
          alt={anime?.attributes.titles.en}
        />
        <TrailerContainer onClick={() => setToggleModal(true)}>
          View Trailer
        </TrailerContainer>
        {/* <OtherLinksContainer>
          <LinkTitle>Watch Online</LinkTitle>
          <LinkIcons>
            <StyledLink
              to={{
                pathname: link[1]?.attributes.url,
              }}
              target="_blank"
            >
              <Icon>
                <SiHulu fill="green" />
              </Icon>
            </StyledLink>
            <StyledLink>
              <Icon>
                <SiCrunchyroll fill="orange" />
              </Icon>
            </StyledLink>
          </LinkIcons>
        </OtherLinksContainer> */}
      </AnimeMediaContainer>
      <TabContainer>
        <Tabs>
          <TabList>
            <Tab>Summary</Tab>
            <Tab>Characters</Tab>
            <Tab>Episodes</Tab>
            <Tab>Related</Tab>
          </TabList>
          <TabPanel>
            <Summary
              anime={anime}
              animeCategories={animeCategories}
              animeGenres={animeGenres}
              CharacterPreview={CharacterPreview}
              producer={producer}
              id={anime?.id}
            />
          </TabPanel>
          <TabPanel>
            <Character characters={animeCharacters} />
          </TabPanel>
          <TabPanel>
            <Episodes episodes={animeEpisodes} />
          </TabPanel>
          <TabPanel>
            <Related related={relatedAnime} />
          </TabPanel>
        </Tabs>
      </TabContainer>
    </MainContainer>
  );
};

export default AnimeDetails;
