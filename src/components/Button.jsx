
function Button({ type, action, text }) {
  const className = type === "primary" ? "btn btn-primary" : "btn btn-secondary";
  
  return (
    <button 
      className={className}
      onClick={action ? action : () => alert('Wihoo')}
    >
      {text}
    </button>
  );
}

export default Button;
