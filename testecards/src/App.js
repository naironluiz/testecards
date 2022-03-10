import "./App.css";
//import, dar o nome e from
import HelloWord from "./components/HelloWord";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";

function App() {
  /* Interpolação de variaveis
  1. cria uma variavel */
  const name = "Matheus";

  /* 3. funciona com funções também */
  const sum = (a, b) => {
    return a + b;
  };

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      {/* 2. usa essa variavel num contexto html usando {chaves} */}
      <p>Olá {name}</p>
      {/* 4. interpolação passando os parametros da função sum */}
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      {/* utilizar o componente */}
      <HelloWord />
      <List />
      <Evento />
      <Form />
      <Condicional />
    </div>
  );
}

export default App;
