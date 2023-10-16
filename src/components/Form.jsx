import { useState } from "react";
import { useAppSelector } from "../hooks/redux";
const Form = (props) => {
  const todosState = useAppSelector((state) => state.todosSlice);
  const [inputValue, setInputValue] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const todo = {
      userId: 1,
      id: todosState.todos.length + 1,
      title: title,
      completed: false,
    };
    props.onSubmit(todo);
    setInputValue("");
    setButtonDisable(true);
  };
  const onChangeHandler = (e) => {
    const value = e.target.value;
    !value ? setButtonDisable(true) : setButtonDisable(false);
    setInputValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={inputValue}
          placeholder="New ToDo Title"
          onChange={onChangeHandler}
        ></input>
      </label>
      <button type="submit" disabled={buttonDisable}>
        Add
      </button>
    </form>
  );
};

export default Form;
