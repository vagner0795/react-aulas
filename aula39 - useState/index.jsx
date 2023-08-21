/*

  USESTATE
       Permite a criação de estado no componente através de função e faz o 
       gerenciamento do estado local do componente retorna um array como 
       resultado.

       com o useState criamos duas variáveis, e vamos gerenciar o estado entre api e frontend

       movie = variavel padrão
       setMovie = variável que vai receber as alterações e retornar na tela

*/

import api from "../../services/api";
import { Background } from "./styles";
import { useState } from "react";

const Home = () => {
  const [movie, setMovie] = useState();

  async function getMovies() {
    const data = await api.get("/movie/popular/");

    setMovie(data.data.results[2]);
    console.log(movie);
  }

  getMovies();

  return (
    <>
      {movie && (
        <Background image="https://image.tmdb.org/t/p/original/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </Background>
      )}
    </>
  );
};

export default Home;
