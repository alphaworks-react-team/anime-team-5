import React, { useEffect, useState } from "react";
import MainContainer from "../Fragments/MainContainer";
import { getNew, getTrending, getPopular, getHighestRated } from "../utils";
import ExploreCard from "./../Components/ExploreCard";
import ExploreContainer from "../Fragments/ExploreContainer";
import CategoryContainer from "../Fragments/CategoryContainer";
import Trending from "./Trending";

const Anime = () => {
  const [trending, setTrending] = useState([]);
  const [newAnime, setNewAnime] = useState([]);
  const [popular, setPopular] = useState([]);
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    getTrending(setTrending);
    getNew(setNewAnime);
    getPopular(setPopular);
    getHighestRated(setHighestRated);
  }, []);

  return (
    <MainContainer>
      <CategoryContainer>Hi from Categories</CategoryContainer>
      <ExploreContainer>
        <ExploreCard title="Trending" anime={trending} path="trending" />
        <ExploreCard title="Most Popular Anime" anime={popular} path="" />
        <ExploreCard title="Highest Rated Anime" anime={highestRated} path="" />
        <ExploreCard title="New Anime" anime={newAnime} path="" />
      </ExploreContainer>
    </MainContainer>
  );
};

export default Anime;
