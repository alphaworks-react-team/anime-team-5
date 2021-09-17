import axios from "axios";

export const getTrending = async (setTrending) => {
  try {
    const result = await axios.get("https://kitsu.io/api/edge/trending/anime/");
    console.log(result.data);
    setTrending(result.data.data);
  } catch (error) {
    console.log(error);
  }
};
