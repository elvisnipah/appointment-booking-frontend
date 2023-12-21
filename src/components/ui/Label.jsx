const Label = (props) => {
  return (
    <label
      className={`flex flex-col font-bold ${props.colspan && "md:col-span-2"}`}
    >
      {props.children}
    </label>
  );
};

export default Label;
