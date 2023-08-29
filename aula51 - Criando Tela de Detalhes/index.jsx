/*

  CRIANDO TELA DE DETALHES
    Vamos iniciar uma tela que vai exibir os detalhes dos nossos filmes.
    criamos um novo Container dentro da pasta Containers e vamos começar constuindo
    o container Detail, é nele que vamos implementar o codigo.

    vamos criar novas requisições de dados no getData.js

    em nossa tela de detalhes vamos exibir o nome do filme, poster, sinapse, atores
    trailers e filmes similares. todos os dados serão recebidos da API.

    abaixo o codigo que usaremos 


*/

import { useEffect, useState } from "react";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)}></Background>
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="poster image" />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={"Filmes Similares"} />
          )}
        </>
      )}
    </>
  );
};
export default Detail;
