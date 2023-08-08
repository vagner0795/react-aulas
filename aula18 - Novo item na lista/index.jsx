/*
  ADICIONANDO NOVO ITEM NA LISTA

  Para adicionar varios elementos numa lista usamos o Spread operator: ...

  A sintaxe de propagação pode ser usada quando todos os elementos de um objeto 
  ou matriz precisam ser incluídos em uma nova matriz ou objeto, ou devem ser aplicados
   um a um na lista de argumentos de uma chamada de função.

literalmente esparrama os itens e junta todos os itens no array


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
