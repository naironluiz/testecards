import Item from "./Item";

/* Exemplo de Fragmentos */
const List = () => {
  return (
    /* Fragment é retirar o div */
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
        <Item marca="Renault" ano_lancamento={1985} />
        <Item ano_lancamento={1999} />
      </ul>
    </>
  );
};

export default List;
