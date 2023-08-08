/*
  CSS NO REACT - estilização dos elementos dentro do React

    poderiamos criar um app.css e adicionar as estilizações dentro do arquivo
    importar o app.css dentro do app.jsx

    podemos criar classes, chamadas de className e estilizar dentro do arquivo app.css

    porem temos outras ferramentas melhores e com mais possibilidades.
    a mais usada é o styled-components. 

    fazemos a instalação da biblioteca no nosso projeto e seguimos o passo a passo da documentação

    styled-components permite que possamos usar css com javascript


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
