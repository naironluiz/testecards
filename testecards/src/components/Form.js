/* HOOK useState */
import { useState } from "react";

const Form = () => {
  /* e é uma explicação resumida de eventos */
  function cadastrarUsuario(e) {
    /* e.preventDefault vai fazer com que o html não automaticamente de refresh */
    e.preventDefault();
    console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`);
    console.log("Cadastrou o usuario");
  }
  /* duas variaveis no setName a primeira e a segunda. A segunda será manipulada e utilizada */
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario} action="">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={name}
            /* onChange é outro evento do React. Ele vai executar quando houver uma mudança.
            no caso aqui onchange vai mandar o setname de usestate setar o que está sendo digitado através de target.value */
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
