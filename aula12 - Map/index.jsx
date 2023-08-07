/*
    MAP
    
      O método map() invoca a função callback passada por argumento para cada elemento 
      do Array e devolve um novo Array como resultado.

      usamos as chaves para adicionar javascript dentro do html
      adicionamos o array, conectamos o map ao array
      dentro do map criamos uma variavel e uma função
      podemos usar os parenteses para dar um return automaticamente, ou usamos chaves
      e dentro das chaves usamos o return com o que será retornado

      {
        list.map((item) => (
          <li>{item}</li>
        ))}

*/

// ex: map acessa o array e retorna os itens na tela

function App() {
  const list = [
    "Regar as Plantas",
    "Comprar Pão",
    "Assistir as Aulas",
    "Cagar",
    "Lavar roupas",
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
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
