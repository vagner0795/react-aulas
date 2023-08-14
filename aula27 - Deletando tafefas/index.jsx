/*
 PROPS - Abreviação de PROPRIEDADES

  propriedades são formas de alterar os elementos da tela de acordo com as 
  ações do usuário.

  ex: podemos criar uma props para quando o botão for clicado trocar 
  o background do botão.

  podemos criar uma propriedade para definir a altura, largura ou
  cor do componente adicionando o atributo dentro do componente importado 

  em nosso projeto usaremos o seguinte codigo:

  ${(props) => (props.finished ? "#0097ff" : "#e4e4e4")

  se a propriedade finished for true, a cor do componente é azul. se a propriedade for false
  a cor do componente é branco.

  
*/

import React, { useState } from "react";
import { v4 as uiidv4 } from "uuid";
import { Container, Button, Input, ToDoList, ListItem } from "./styles";
import { FcFullTrash } from "react-icons/fc";

function App() {
  const [list, setList] = useState([
    { id: uiidv4(), task: "Lavar Louça", finished: true },
  ]);

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function butaoClicado() {
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
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
