/*
  ICONES NO REACT 
    Podemos adicionar icones em nossos projetos através de bibliotecas

    ex: React icons
      https://react-icons.github.io/react-icons/ - documentação

      Primeiro instalamos as dependencias,
      importamos o icone, adicionamos o icone ao componente.
*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";
import { Container, Button, Input, ToDoList } from "./styles";
import { FcFullTrash } from "react-icons/fc";

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
            <>
              <li key={item.id}>{item.task}</li>
              <FcFullTrash />
            </>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
