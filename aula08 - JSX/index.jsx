/*
    JSX - componente React que possui duas partes: javascrip e html

        Maioria dos componentes React são funções ou arrow function.
        
        Sempre devemos exportar nossos componentes para poder acessá-los em outras partes da aplicação
            para expotar um arquivo basta adicionar o export defalt nome do app.

        Para importar podemos usar o import NomeDoComponent from '../caminhoDoComponent'

        Para importar uma biblioteca basta por o nome da biblioteca dentro das aspas
            import { styled } from 'styled-components'

        !Todos os componentes devem começar com letra MAIÚSCULA

        Todo componente é uma função que returna alguma coisa. geralmente HTML
        componentes html possuem letra minúscula e para diferencias componentes HTML de componentes REACT
        usamos letra Maiúscula.


        a sintaxe jsx mistura javascript com html - usamos javascript fora do return e html dentro do return
        para usar javascript dentro do html devemos usar as {}
*/

//! ex: componente arrow function

const App = () => {
  const message = "Hello world";
  return (
    <>
      <div>{message}</div>
    </>
  );
};

export default App;

//! importando um componente react

import Home from "./app";

function MeuAppi() {
  // aqui colocamos o codigo javascript

  return (
    <>
      <Home />
      <div>aqui colocamos codigo html</div>
    </>
  );
}
