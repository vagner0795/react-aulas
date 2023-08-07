/*
  REACT HOOKS

    Os React Hooks são funções JavaScript simples que podemos usar para isolar a 
    parte reutilizável de um componente funcional.

    Para que serve o Hook?
    Os Hooks nos ajudam a organizar a lógica que será usada em um componente.



*/

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
    list.push({ id: uuidv4(), task: event.target.value });
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
