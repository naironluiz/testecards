import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail() {
    setUserEmail("");
  }
  return (
    <div>
      <h2>Cadastre o seu email:</h2>
      <form action="">
        <input
          type="email"
          name=""
          id=""
          placeholder="digite o seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={enviarEmail}>Enviar e-mail</button>
      {/* vai ser executado depois da função 
      - renderização com if*/}
      {userEmail && (
        <div>
          <p>o email do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
      )}
    </div>
  );
};

export default Condicional;
