/*

  BUSCANDO DADOS NA API
    agora que acessamos os filmes populares, vamos acessar os filmes mais 
    assistidos

    vamos copiar a função que acessa os filmes e ajustar o nome e o endereço
    que a API esta acessando, assim conseguimos retornas os dados dos top filmes

*/

import api from "../../services/api";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular/");

      setMovie(results[2]);
      console.log(results[1].title);
      console.log(results[1].overview);
      console.log(results[1].backdrop_path);
      console.log(results[1].poster_path);
    }
    getMovies();

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovie(results[2]);
      console.log(results[2]);
      console.log(results[2].title);
      console.log(results[2].overview);
      console.log(results[2].backdrop_path);
      console.log(results[2].poster_path);
    }
    getTopMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista agora</Button>
                <Button red={false}>Assista o trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="image-movie"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
};

export default Home;
