/* importar botão com props de evento*/
import Button from "./evento/Button";

/* Exemplo de Eventos */
const Evento = () => {
  //1.Declara a função a ser disparada em um evento
  const meuEvento = () => {
    console.log("Opa! Fui ativado");
  };
  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="primeiro evento" />
      {/* Adiciona a função criada a cima onclick */}
      <button onClick={meuEvento}>Ativar</button>
    </>
  );
};

export default Evento;
