import { styled } from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// aqui criamos o componente de background, temos uma propriedade dentro da url da imagem
// altura e largura do background, centralização dos elementos filhos ( textos e imagens dentro da div)
// criação de um efeito de opacidade usando o before
