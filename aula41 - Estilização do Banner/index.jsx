/*

  ESTILIZAÇÃO DO BANNER
    Vamos começar a estilizar a Home criando um Banner
      criamos os componentes Container, Post e Info, estilizamos com styled-component
      usamos a propriedade z-index: 2; para que os componentes fiquem na frente do
      filtro opaco.


*/

import api from "../../services/api";
import { Background } from "./styles";
import { useState, useEffect } from "react";

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular/");

      setMovie(results[3]);
      console.log(results[1].title); // acessando o titulo do filme
      console.log(results[1].overview); // acessando a descrição
      console.log(results[1].backdrop_path); // acessando a imagem banner
      console.log(results[1].poster_path); // acessando a imagem poster
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
