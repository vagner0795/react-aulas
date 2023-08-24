/*
  ESTILIZANDO O CARROSSEL
  
    para estilizar nosso carrossel de imagens vamos criar o componente Card,
    ele vai receber a imagem e o titulo do filme através da propriedade item.
     adicionamos o card com ao swiperSlider e adicionamos o item a propriedade
     de mesmo nome, assim conseguimos enviar os dados para o card.

     depois estilizamos o card com tamanho e largura dos textos e imagens.
     por fim vamos ao Container que recebe o Swiper e SwiperSlider e adicionamos a 
     classe do SwiperSlide a swiper-wrapper. assim conseguimos mudar a orientação 
     dos cards usando display flex.

*/

import { Title, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

const Slider = ({ info }) => {
  return (
    <>
      <Container>
        <Title>Top Filmes</Title>
        <Swiper
          grabCursor
          spaceBetween={20}
          slidesPerView={"auto"}
          className="swiper"
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
