/*

  CRIANDO TELA DE DETALHES
    Vamos iniciar uma tela que vai exibir os detalhes dos nossos filmes.
    criamos um novo Container dentro da pasta Containers e vamos começar constuindo
    o container Detail, é nele que vamos implementar o codigo.

    vamos criar novas requisições de dados no getData.js: get


*/

import { useEffect, useState } from "react";
import { Background, Container, Cover, Info } from "./styles";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

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
          console.log({ movie, videos, credits, similar });
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
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
              <div>genero</div>
              <p>{movie.overview}</p>
              <div>creditos</div>
            </Info>
          </Container>
        </>
      )}
    </>
  );
};
export default Detail;
