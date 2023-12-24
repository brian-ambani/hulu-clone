import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie/";
const api_key = "daa2714fbb0d45e428dd26688677baf3";

const getPopularMovies = axios.get(
  movieBaseURL + "/popular?api_key=" + api_key + "&language=en-US&page=1"
);

export default {
  getPopularMovies,
};
