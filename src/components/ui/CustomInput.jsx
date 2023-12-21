const CustomInput = (props) => {
  return (
    <input
      className="input input-bordered input-primary w-full max-w-xs font-normal"
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomInput;
