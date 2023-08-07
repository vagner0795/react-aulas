/*
  KEY - É uma forma de identificar cada item filho de um array.
      Cada filho deve ter uma chave única.
      ! A key é obrigatória

*/

// ex: adicionamos a key dentro da li, dentro da key o item mais a identificação

function App() {
  const list = [
    { id: 1, task: "Regar as Plantas" },
    { id: 2, task: "Lavar a Louça" },
    { id: 3, task: "Comprar o Pão" },
    { id: 4, task: "Tomar Café" },
    { id: 5, task: "Ver Aulas" },
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
