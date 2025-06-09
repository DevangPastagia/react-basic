function Button({ button, action }) {
  return (
    <button
      className={`${button.bgColor} ${button.color} px-4 py-1 rounded-full shadow-lg outline-none`}
      onClick={action}
    >
      {/* onClick={button.onClick} */}
      {button.name}
    </button>
  );
}

export default Button;