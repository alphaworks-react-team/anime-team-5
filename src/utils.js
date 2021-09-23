import axios from "axios";

const headers = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
};

export const getTrending = async (setTrending) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/trending/anime/?[limit]=5&[offset]=0",
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    setTrending(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getNew = async (setNewAnime) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=-createdAt,popularityRank&page[limit]=5&[offset]=0",
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    setNewAnime(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getPopular = async (setPopular) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=popularityRank&page[limit]=5&[offset]=0",
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    setPopular(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getHighestRated = async (setHighestRated) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=ratingRank&page[limit]=5&[offset]=0",
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    setHighestRated(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeById = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/?filter[id]=${id}`,
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeGenresById = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/genres/?page[limit]=20`,
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeCategoriesById = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/categories/?page[limit]=20`,
      {
        headers: headers,
      }
    );
    // console.log(result.data);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeCharacters = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/characters?page[limit]=20`,
      {
        headers: headers,
      }
    );
    const charID = result.data.data;
    const animeCharacters = [];
    for (let value of Object.values(charID)) {
      let data = await axios.get(
        `https://kitsu.io/api/edge/media-characters/${value.id}/character`,
        {
          headers: headers,
        }
      );
      animeCharacters.push(data.data.data);
    }
    return animeCharacters;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeEpisodes = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/episodes/?page[limit]=20`,
      {
        headers: headers,
      }
    );
    // console.log(result.data.data);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedAnime = async (str) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/?filter[text]=${str}&page[limit]=20`,
      {
        headers: headers,
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducers = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/anime-productions?page[limit]=20`,
      {
        headers: headers,
      }
    );
    const producerId = result.data.data;
    const producers = [];
    for (let value of Object.values(producerId)) {
      let data = await axios.get(
        `https://kitsu.io/api/edge/anime-productions/${value.id}/producer`,
        {
          headers: headers,
        }
      );
      producers.push(data.data.data);
    }
    return producers;
  } catch (error) {
    console.log(error);
  }
};

export const getLinks = async (id) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/streaming-links/?page[limit]=20`,
      {
        headers: headers,
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

// https://kitsu.io/api/edge/anime/12/reviews
// https://kitsu.io/api/edge/anime/12/streaming-links
