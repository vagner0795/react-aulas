/*
  EVENTOS:

  Ações executadas pelo usuário.

  ex: clicar num botão, clicar num link, digitar dentro de um input, passar o mouse por cima de um elemento, etc..

  para pegar eventos usamos o on seguido do evento que queremos capturar.

  ex: onChange -> captura evento de mudança no elemento. 
  dentro do onChange adicionamos uma função que será executada após o evento acontecer

  normalmente o evento é chamado de event ou e 

  ex2: onClick -> captura evento de click e chama uma função toda vez que o botão é clicado

*/

function App() {
  function textoNoInputMudou(evento) {
    console.log(evento);
  }

  function cliqueiNoBotao(evento) {
    console.log(evento);
  }

  return (
    <div>
      <input
        onChange={textoNoInputMudou()}
        type="text"
        placeholder="Digite o que tenho para fazer"
      />
      <button onClick={cliqueiNoBotao()}>Adicionar</button>
      <ul>
        <li>Regar as Plantas</li>
        <li>Comprar Pão</li>
        <li>Assistir as Aulas</li>
      </ul>
    </div>
  );
}

export default App;
