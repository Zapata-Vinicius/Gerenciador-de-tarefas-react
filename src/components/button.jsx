function Button(props) {
  return (
    <button className="bg-slate-400 p-2 text-white" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
