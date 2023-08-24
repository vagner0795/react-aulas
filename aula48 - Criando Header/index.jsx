/*

  CRIANDO HEADER MODERNO

    Vamos usar o componente Header criado anteriormente e adicionarmos 
    a estilização.

    criamos o Container(div), adicionamos a imagem, Menu(ul), 
    Li(li) e Link(react-router-dom).

    criamos o arquivo styles e exportamos os componentes com suas estilizações.





*/

import Logo from "../../assets/logo.png";
import { Container, Li, Menu } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
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
