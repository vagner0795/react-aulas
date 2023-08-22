/*

  USEEFFECT
      useEffect nos auxilia a lidar com os side-effects (efeitos colaterais) 
      e podemos usá-los também como ciclo de vida do componente. 

      Criamos o useEffect e adicionamos a função para que carregue apenas 1 vez
      pois o parametro do useEffect esta vazio ( os [] depois da ,).

      atualizamos a função para buscar apenas o results dentro do data
      atravez do results acessamos o title, overview e backdrop_path (codigo da imagem)

      atualizamos o background dinamicamente usando template strings e o backdrop_path

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
      console.log(results[1].backdrop_path); // acessando a imagem
    }

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        >
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </Background>
      )}
    </>
  );
};

export default Home;
