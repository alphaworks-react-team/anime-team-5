import axios from "axios";

export const getTrending = async (setTrending) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/trending/anime/?[limit]=5&[offset]=0"
    );
    console.log(result.data);
    setTrending(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getNew = async (setNewAnime) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=-createdAt,popularityRank&page[limit]=5&[offset]=0"
    );
    console.log(result.data);
    setNewAnime(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getPopular = async (setPopular) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=popularityRank&page[limit]=5&[offset]=0"
    );
    console.log(result.data);
    setPopular(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getHighestRated = async (setHighestRated) => {
  try {
    const result = await axios.get(
      "https://kitsu.io/api/edge/anime/?sort=ratingRank&page[limit]=5&[offset]=0"
    );
    console.log(result.data);
    setHighestRated(result.data.data);
  } catch (error) {
    console.log(error);
  }
};
