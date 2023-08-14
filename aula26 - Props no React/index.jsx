/*
  DELETANDO ITENS

  para deletar um item da nossa lista vamos usar o metodo filter()
  criamos uma função, dentro dessa função percorremos o array com os itens da lista e retornamos 
  os itens com ID diferente do item que vamos remover.

  essa função será adicionada ao icone da lixeira e chamada através do evento onClick
  toda vez que o icone de lixeira for clicado a função vai verificar o id e remover o item da tela.
*/

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, ToDoList, Input, Button, ListItem } from "./styles";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

function App() {
  const [list, setList] = useState([
    { id: uuidv4(), task: "Lavar Louça", finishedTask: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function butaoClicado() {
    setList([...list, { id: uuidv4(), task: inputTask, finishedTask: false }]);
  }

  function finishTask(id) {
    const newList = list.map((itemList) =>
      itemList.id === id
        ? { ...itemList, finishedTask: !itemList.finishedTask }
        : itemList
    );

    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
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
            <ListItem isfinished={item.finishedTask} key={item.id}>
              <FcCheckmark onClick={() => finishTask(item.id)} />
              <li>{item.task}</li>
              <FcFullTrash onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
