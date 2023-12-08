const CustomInput = (props) => {
  return (
    <input
      className="p-1 rounded-lg"
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomInput;
