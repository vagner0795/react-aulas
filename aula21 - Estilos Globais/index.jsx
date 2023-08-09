/*
  ESTILOS GLOBAIS para criar estilos globais em React
  criamos um arquivo globalStyles.js
  dentro dele importamos o createGlobalStyles do styled-components

  exportamos a variavel GlobalStyles com todas as configurações que queremos na pagina

*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uiidv4(), task: "Lavar Louça" }]);

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function butaoClicado() {
    setList([...list, { id: uuidv4(), task: inputTask }]);
  }

  return (
    <Container>
      <input
        onChange={inputMudou}
        type="text"
        placeholder="Digite o que tenho para fazer"
      />
      <button onClick={butaoClicado}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
