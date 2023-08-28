/*

  CRIANDO MODAL
    Caixa onde podemos acessar conteúdos ao ser clicados
    nesse projeto vamos criar um modal que vai abrir ao clicar nos botões ver filme
    e assistir trailer.

    criamos a pasta do componente, criamos os arquivos index e styles.
    criamos a função que será o Modal e dentro dela teremos o useState e o useEffect
    vamos criar um Background 50% transparente e um Contatainer que vai receber o
    iframe (tag que recebe links externos) dentro dela vamos adicionar o ID do filme
    assim conseguimos receber o trailer corretamente.


    criamos um novo estado para gerenciar o aparecimento e remoção do Modal
    chamaremos de showModal que será false
    primeiro adicionamos ao componente Button o spread operator(...) com as props
    assim o Button vai conseguir acessar o onClick

    criamos o evento de onClick no componente Button da Home passando o setModalModal
    como true. assim ao clicar no botão será alterado o estado e exibindo o modal.

    para remover o modal vamos enviar o setSHowModal para Modal como
    props e adicionamos o evento de onClick ao componente Background do 
    Modal usando a props setShowModal e dentro dela retornamos false.
    dessa forma sempre que o Modal estiver aberto e clicarmos no Background o 
    evento de click vai alterar o setShowModal para false, removendo o Modal.

    também podemos adicionar um ícone, para isso vamos instalar a biblioteca 
    react-icons

    yarn add react-icons --save -> comando para instalar a biblioteca

    após instalar a biblioteca importamos dentro do styles, escolhemos o icone de X
     criamos o componente CloseModal e adicionamos as estilizações de tamanho e
      posicionamento. depois de criado o componente podemos adicionar o onClick
      passando o setShowModal como false, assim como fizemos no Background.





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
import Modal from "../../components/Modal";
import { getImages } from "../../utils/getImages";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [people, setPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular/");

      setMovie(results[3]);
    }
    getMovies();

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovie(results);
    }
    getTopMovies();

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
    }
    getTopSeries();

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setPopularSeries(results);
    }
    getPopularSeries();

    async function getPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      setPeople(results);
    }
    getPeople();
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
                <Button red={true}>Assista agora</Button>
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
