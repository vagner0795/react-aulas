/*
  REACT FRAGMENT 
   Tag vazia que serve como elemento pai, evitando erro na sintaxe jsx e auxuliando na construção de components com mais de um elemento 


! Todo componente React pode retornar apenas 1 elemento pai html.


*/

// estrutura React Fragment
function App() {
  return (
    //FRAGMENT
    <>
      <div>
        <p>texto 1</p>
      </div>
      <div>
        <p>texto 2</p>
      </div>
    </>
  );
}

export default App;

// estrutura React Fragment com import, alguns lugares usam dessa forma

import { Fragment } from "react";

function App() {
  return (
    //FRAGMENT
    <Fragment>
      <div>
        <p>texto 1</p>
      </div>
      <div>
        <p>texto 2</p>
      </div>
    </Fragment>
  );
}
