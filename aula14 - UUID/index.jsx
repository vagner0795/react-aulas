/*
  UUID - Biblioteca que auxilia na criação de Key unicas no projetos

  fazemos a instalação, importação e configuração

  - instalação: npm install uuid
  - impottação: import { v4 as uiidV4} from 'uuid'
  - configuração: adicionamos o uiidV4 dentro da key em forma de função

*/

// ex: importação do uuid e implementação no código

import { v4 as uiidv4 } from "uuid";

function App() {
  const list = [
    { id: uuidv4(), task: "Regar as Plantas" },
    { id: uuidv4(), task: "Lavar a Louça" },
    { id: uuidv4(), task: "Comprar o Pão" },
    { id: uuidv4(), task: "Tomar Café" },
    { id: uuidv4(), task: "Ver Aulas" },
  ];

  function inputMudou(event) {
    console.log(event.target.value);
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
