import api from "./api";

//Busca 1 Filme da lista dos mais Populares
export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular/");
  return results[5];
}

//Busca Filmes mais votados
export const getTopMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");
  return results;
};

// Busca Series mais votadas
export const getTopSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");
  return results;
};

//Busca Series Populares
export const getPopularSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/popular");
  return results;
};

// Busca os Atores
export const getPeople = async () => {
  const {
    data: { results },
  } = await api.get("/person/popular");
  return results;
};

// Busca filme pelo ID
export const getMovie = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  return results[4];
};
