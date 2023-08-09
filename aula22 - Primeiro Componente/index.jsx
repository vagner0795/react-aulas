/*
  PRIMEIROS COMPONENTES
    nosso primeiro componente será o Container uma div que vai 
    armazenar os componentes.
*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";
import { Container, Button, Input, ToDoList } from "./styles";

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
      <ToDoList>
        <Input
          onChange={inputMudou}
          type="text"
          placeholder="Digite o que tenho para fazer"
        />
        <Button onClick={butaoClicado}>Adicionar</Button>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
