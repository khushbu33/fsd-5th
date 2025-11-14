import { useState } from "react";

const InputToDo = ({inputHandler}) => {
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    inputHandler(inputValue);
    setInputValue("");
  };
  return (
    <div className="input-todo">
      <input
        type="text"
        name="todo"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <button>Clear</button>
    </div>
  );
};
export default InputToDo;

