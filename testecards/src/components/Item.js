/* Exemplo de props e props avançado. PropTypes extende props para poder utilizar validações */
import PropTypes from "prop-types";
/* Structuring */
const Item = ({ marca, ano_lancamento }) => {
  return (
    <>
      <li>
        {marca}, {ano_lancamento}
      </li>
    </>
  );
};

/* propTypes vem em minusculo e camelcase quando junto a função */
Item.propTypes = {
  /* prop: Proptypes.tipodeitem */
  marca: PropTypes.string.isRequired,
  /* isRequired = é requirido */
  ano_lancamento: PropTypes.number,
};
/* default props é outra ferramenta do PropTypes que seta um valor default caso nada seja inserido..............................0 */
Item.defaultProps = {
  marca: "Faltou a marca",
};
export default Item;
