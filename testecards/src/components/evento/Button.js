const Button = (props) => {
  /* props.event manda um evento em prop que vai ser utilizado no proximo conteudo */
  return <button onClick={props.event}>{props.text}</button>;
};

export default Button;
