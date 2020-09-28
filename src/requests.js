//TMDB Movie List API Key
const API_KEY = "3bbd10c3e887a83cd4d01794ed40e55f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchMystery: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requests;
