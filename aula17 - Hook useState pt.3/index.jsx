/*
  REACT HOOKS - useState 

  Imutabilidade -> conceito usado no react para preservar valores, 
  os valores nunca podem ser alterados definitivamente, apenas substituidos temporariamente
  quando temos uma mudança de estado seja mudança de pagina, abertura oy fechamento de um modal
  eventos de click.

  por isso usamos duas variaveis no useState, a primeira é imutavel, a segunda é usada para
  adicionar as alterações quando necessario.




*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uiidv4(), task: "Lavar Louça" }]);

  function inputMudou(event) {
    console.log(event.target.value);
    setList({ id: uuidv4(), task: event.target.value });
  }
  function butaoClicado() {
    console.log("fui clicado");
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
