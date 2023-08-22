/*

  CRIANDO BUTTON
    Vamos criar nosso componente de button e adicionar a nossa Home.

    usaremos uma abordagem diferente, pois teremos 2 botões com cores distintas.
    o primeiro botão é vermelho e o segundo botão é transparente.
    podemos criar dois componentes, 1 para cada botão ou usar as propriedades
    e enviar a cor desejada.

    nesse projeto usaremos o css dentro do styled-componentes, criaremos uma variavel
    com as estilizações do botão, depois dois componentes: ButtonRed e ButtonWhite

    adicionamos a variavel dentro de cada botão, alteramos a estilização do ButtonRed
    dentro do componente Button importamos as estilizações e adicionamos uma verificação

    se a props.red ou red for verdadeira o botão vermelho sera usado, se for falsa
    o botão branco sera usado.

    importamos o Button na nossa Home e adicionamos a propriedade red como true para
    o botão vermelho e false para o botão branco


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

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular/");

      setMovie(results[3]);
      console.log(results[1].title);
      console.log(results[1].overview);
      console.log(results[1].backdrop_path);
      console.log(results[1].poster_path);
    }

    getMovies();
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
