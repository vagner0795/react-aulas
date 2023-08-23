/*
    CRIANDO CARROSSEL DE IMAGENS COM SWIPER
      O Swiper é uma biblioteca de javascript criado e 
      utilizado para a apresentação na forma de slides de uma 
      forma moderna, estilizada e fácil de se implementar

      https://swiperjs.com/react -> Documentação da biblioteca

      dentro da documentação existe varios modelos de slides para adicionarmos
      aos nossos projetos. basta acessar a aba demos

      instalamos o Swiper usando o comando yarn add swiper

      vamos importar os componentes e podemos usar os modelos prontos que
      estão disponíveis na documentação.

      abaixo está um modelo do componente de slide com o Swiper

      importamos o Swiper e o SwiperSlide, criamos a função com as props info e title

      criamos a estrutura com o Container, Title, Swiper (recebe as propriedades: grabCursor, spaceBetween, slidesPerView e className='swiper')
      criamos um filtro para listar os itens e a posição dentro das informações.
      e retornamos o SwiperSlide com a key={index} e dentro o item desejado





*/

/* eslint-disable react/prop-types */
import { Title, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ info, title }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Swiper
          grabCursor
          spaceBetween={10}
          slidesPerView={"auto"}
          className="swiper"
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <div>{item.original_title}</div>
              <div>{item.title}</div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt="image-movie"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
