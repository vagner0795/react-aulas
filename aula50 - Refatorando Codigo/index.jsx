/*

REFATORANDO CODIGO
    Nessa parte vamos deixar nosso código menor e mais abstraido.
      em nossa tela de Home por exemplo tem várias funções para acessar dados, podemos
      deixar nossa Home menos puluída criando um arquivo getData e movendo todas as funções
      assim nosso código fica muito mais profissional e organizado.

      1 - criamos o arquivo getdata.js dentro de services, criamos e exportamos
       as funções responsáveis pelos dados dos filmes.

      2 - importamos as funções na Home e adicionamos a função getAllData, responsável
      por adicionar os dados recebidos em cada componente.
      dentro do getAllData usaremos uma Promisse.all ela vai chamar todas as funções
      de uma vez, vamos também fragmentar o resultado em partes menores e cada
      posição será 1 item ou função por fim adicionamos o resultado da requisição dentro
      das variaveis do useState para rendenizar na tela.

*/

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
import Modal from "../../components/Modal";
import { getImages } from "../../utils/getImages";
import { useNavigate } from "react-router-dom";
import {
  getMovies,
  getPeople,
  getTopSeries,
  getTopMovies,
  getPopularSeries,
} from "../../services/getData";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [people, setPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getPopularSeries(),
        getTopSeries(),
        getPeople(),
      ]).then(([movie, topMovie, topSeries, popularSeries, people]) => {
        setMovie(movie);
        setTopMovie(topMovie);
        setTopSeries(topSeries);
        setPopularSeries(popularSeries);
        setPeople(people);
      });
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background image={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                  red={true}
                >
                  Assista agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="image-movie" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Series Populares"} />
      )}
      {people && <Slider info={people} title={"Artistas Populares"} />}
    </>
  );
};

export default Home;
