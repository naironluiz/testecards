import { useState } from "react";

const Condicional = () => {
  function enviarEmail(e) {
    e.preventDefault();
    console.log("Enviar email");
  }
  return (
    <div>
      <h2>Cadastre o seu email:</h2>
      <form action="">
        <input type="email" name="" id="" placeholder="digite o seu email" />
      </form>
      <button onClick={enviarEmail}>Enviar Email</button>
    </div>
  );
};

export default Condicional;
