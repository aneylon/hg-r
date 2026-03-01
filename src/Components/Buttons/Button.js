const Button = ({ text = "A Button", style = {}, action = () => {} }) => {
  return (
    <button onClick={action} style={style}>
      {text}
    </button>
  );
};

export default Button;
