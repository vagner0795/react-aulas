/*

Primeiro projeto React - Lista de tarefas

modelo figma do projeto:
https://www.figma.com/file/nNbdEzrcaBs9Rn0L728J0p/Lista-de-Tarefas?type=design&node-id=0-1&mode=design&t=CEG3JJTtvC8A7oXQ-0


*/

// estrutura html do projeto - função que retorna o HTML da lista de taferas
function App() {
  return (
    <div>
      <input type="text" placeholder="Digite o que tenho para fazer" />
      <button>Adicionar</button>
      <ul>
        <li>Regar as Plantas</li>
        <li>Comprar Pão</li>
        <li>Assistir as Aulas</li>
      </ul>
    </div>
  );
}

export default App;
