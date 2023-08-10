/*
  FINALIZANDO ESTILIZAÇÃO
    Dentro do Styled-components podemos criar elementos, se esse elemento for elemento pai
    de outro elemento podemos estilizar o elemento filho sem criar outro componente.
*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";
import { Container, Button, Input, ToDoList, ListItem } from "./styles";
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
              <ListItem>
                <li key={item.id}>{item.task}</li>
                <FcFullTrash />
              </ListItem>
            </>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
