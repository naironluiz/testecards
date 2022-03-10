import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState();
  const [useremail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    console.log(email);
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
      <button onClick={enviarEmail}>Enviar Email</button>
    </div>
  );
};

export default Condicional;
