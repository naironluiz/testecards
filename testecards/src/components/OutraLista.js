function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {/* js em jsx é sempre entre chaves */}
      {/* operador ternario de validaçao */}
      {itens.length > 0 ? (
        itens.map((item) => <p>{item}</p>)
      ) : (
        <p>Não há itens da lista</p>
      )}
    </>
  );
}

export default OutraLista;
