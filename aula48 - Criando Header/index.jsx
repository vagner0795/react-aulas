/*

  CRIANDO HEADER MODERNO

    Vamos usar o componente Header criado anteriormente e adicionarmos 
    a estilização.

    criamos o Container(div), adicionamos a imagem, Menu(ul), 
    Li(li) e Link(react-router-dom).

    criamos o arquivo styles e exportamos os componentes com suas estilizações.


    dentro do React podemos acessar o window, dentro do window podemos acessar o 
    window.onScroll que verifica o movimento de rolagem na tela.
    e o window.pageYoffset para verificar a posição no eixo Y

    criamos um estado para verificar quando foi executado o scroll e alterar a cor do 
    Header.

    dentro do Container adicionamos a propriedade changeBackground e dentro dos styles
    usamos verificação. se o scroll for true background-color = preto se for false
    background-color = transparente.



*/

import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Container, Li, Menu } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };
  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li>
          <Link to={"/"}>Home</Link>
        </Li>
        <Li>
          <Link to={"/filmes"}>Filmes</Link>
        </Li>
        <Li>
          <Link to={"/series"}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
