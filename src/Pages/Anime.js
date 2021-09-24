import React, { useEffect, useState } from "react";
import MainContainer from "../Fragments/MainContainer";
import {
  getNew,
  getTrending,
  getPopular,
  getHighestRated,
  getAnimeByCategory,
  getCategories,
} from "../utils";
import ExploreCard from "./../Components/ExploreCard";
import ExploreContainer from "../Fragments/ExploreContainer";
import CategoryContainer from "../Fragments/CategoryContainer";
import ExploreCardContainer from "../Fragments/ExploreCardContainer";
import CategoryBox from "../Components/CategoryBox";
import styled from "styled-components";
import CurrentExplorer from "../Components/CurrentExplorer";
import axios from "axios";

const CategorySubContainer = styled.div`
  border: 0.2px solid lightgrey;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
`;

const Anime = ({ searchedAnime, name }) => {
  const [trending, setTrending] = useState([]);
  const [newAnime, setNewAnime] = useState([]);
  const [popular, setPopular] = useState([]);
  const [highestRated, setHighestRated] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [categories, setCategories] = useState([]);

  const searchAnime = () => {
    // if (activeCategory.data === undefined) {
    //   return null;
    // }
    setActiveCategory({
      data: searchedAnime,
      name: name,
    });
  };
  useEffect(() => {
    searchAnime();
  }, [searchedAnime]);

  useEffect(() => {
    getTrending(setTrending);
    getNew(setNewAnime);
    getPopular(setPopular);
    getHighestRated(setHighestRated);
    getCategories(setCategories);
  }, [activeCategory]);

  const onClick = async (name, description) => {
    console.log(name, description);
    const results = await getAnimeByCategory(name);
    setActiveCategory({ data: results, name: name, description: description });
  };

  return (
    <MainContainer>
      <CategoryContainer>
        <CategorySubContainer>
          <CategoryBox title="Categories" tags={categories} onClick={onClick} />
        </CategorySubContainer>
      </CategoryContainer>
      <ExploreContainer>
        {activeCategory.data === undefined ? (
          <ExploreCardContainer>
            <ExploreCard
              title="Trending"
              anime={trending}
              setActiveCategory={setActiveCategory}
            />
            <ExploreCard
              title="Most Popular Anime"
              anime={popular}
              setActiveCategory={setActiveCategory}
            />
            <ExploreCard
              title="Highest Rated Anime"
              anime={highestRated}
              setActiveCategory={setActiveCategory}
            />
            <ExploreCard
              title="New Anime"
              anime={newAnime}
              setActiveCategory={setActiveCategory}
            />
          </ExploreCardContainer>
        ) : (
          <CurrentExplorer
            title={activeCategory.name}
            current={activeCategory.data}
            setActiveCategory={setActiveCategory}
            description={activeCategory.description}
          />
        )}
      </ExploreContainer>
    </MainContainer>
  );
};

export default Anime;
