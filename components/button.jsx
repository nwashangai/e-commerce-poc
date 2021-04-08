const Button = ({ type, text, onClick = () => {} }) => (
  <button
    onClick={onClick}
    className={`box-border text-center w-full px-5 border-2 border-primary ${
      type !== 'primary' ? 'text-primary bg-pure' : 'text-pure bg-primary'
    }`}
  >
    <span>{text}</span>
  </button>
);

export default Button;
