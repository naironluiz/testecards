/* importar botão com props de evento*/
import Button from "./evento/Button";

/* Exemplo de Eventos */
const Evento = () => {
  //1.Declara a função a ser disparada em um evento
  const meuEvento = () => {
    console.log("Ativando primeiro evento");
  };

  const segundoEvento = () => {
    console.log("Ativando segundo evento");
  };
  return (
    <>
      <p>Clique para disparar um evento</p>
      {/* Utilizando o botão com evento onclick em prop */}
      <Button event={meuEvento} text="primeiro evento" />
      {/*  pode se usar outra função no mesmo prop de evento, o mesmo código de origem que é o button on click em prop*/}
      <Button event={segundoEvento} text="segundo evento" />
      {/* Adiciona a função criada a cima onclick */}
      <button onClick={meuEvento}>Ativar</button>
    </>
  );
};

export default Evento;
