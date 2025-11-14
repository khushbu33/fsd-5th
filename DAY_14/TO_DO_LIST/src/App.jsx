import { useState } from "react";
import InputToDo from "./Component/InputToDo";

function App() {
  const [toDoList, setToDoList] = useState([]);

  // add new todo
  const inputHandler = (inputValue) => {
    setToDoList([...toDoList, inputValue]);
  };

  // delete todo by index
  const deleteHandler = (deleteIndex) => {
    const filteredList = toDoList.filter((item, index) => index !== deleteIndex);
    setToDoList(filteredList);
  };

  return (
    <>
      <div className="todolist">
        <h1>To Do List</h1>

        {toDoList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => deleteHandler(index)}>
              Delete
            </button>
          </li>
        ))}

        <InputToDo inputHandler={inputHandler} />
      </div>
    </>
  );
}

export default App;
