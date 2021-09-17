import React, { useEffect, useState } from "react";
import Container from "./../Fragments/Container";
import { getTrending } from "../utils";
import Carousel from "../Components/Carousel";

const Anime = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending(setTrending);
  }, []);

  return (
    <Container>
      <Carousel anime={trending} />
      {/* {trending.map((anime, index) => (
        <div key={index}>
          <h3>{anime.attributes.titles.en}</h3>
          <img src={anime.attributes.posterImage.small} alt="" />
        </div>
      ))} */}
    </Container>
  );
};

export default Anime;
