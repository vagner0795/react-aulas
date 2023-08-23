/*
    CRIANDO FUNÇÃO QUE RETORNA AS IMAGENS
      Conforme nossa aplicação vai crescendo temos muitos códigos repetidos
      então como uma boa pratica podemos abstrair e criar um unico codigo para fazer essa função
      agora vamos criar um componente que acessa a url da imagem e nos permite reutilizar em qualquer
      parte da aplicação

      1º criamos a pasta utils, dentro dela criamos o arquivo getImages, dentro do 
      getImagens criamos uma função que recebe o parametro path.
       retornamos uma template strging com a url do site e o path da imagem
       importamos a função e adicionamos em todas as partes que receberão a imagem



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
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular/");

      setMovie(results[2]);
    }
    getMovies();

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovie(results);
    }
    getTopMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background image={getImages(movie.backdrop_path)}>
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
              <img src={getImages(movie.poster_path)} alt="image-movie" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
    </>
  );
};

export default Home;
