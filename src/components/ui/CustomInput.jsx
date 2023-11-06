const CustomInput = (props) => {
  return (
    <input
      className="p-1"
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomInput;
