
const Input = ({ name, index, ...rest }) => {
  return (
    <div data-index={index} {...rest} draggable className=" flex border-2 mb-5">
      <div className=" cursor-move p-2 bg-slate-400  ">||</div>
      <div className=" w-full">
        <input className="p-2 w-full" type="text" placeholder={name} />
      </div>
    </div>
  );
};

export default Input;