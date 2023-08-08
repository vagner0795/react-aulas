/*
  REACT HOOKS

  useState - permite a criação de estado no componente através de função e faz 
  o gerenciamento do estado local do componente retorna um array como resultado.

  toda vez que quisermos alterar o valor o valor de uma variavel com useState usamos o segundo
  parametro da variavel, geralmente chamado de setNomeDaVariavel

ex: 
  const [data, setData] = useState() -> primeiro elemento é nossa variavel e o segundo elemento é 
  o que gerencia mudanças de estado na variavel.

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
